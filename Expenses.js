import React, { useState } from 'react';
import ExpenseItem from './Expenseitem';
import './Expenseitem.css';
import Card from '../UI/Card';
import '../UI/Card.css';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  let expensesContent = <p>No expenses found.</p>;
  if(filteredExpenses.length>0){
    expensesContent =filteredExpenses.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
      />
    ));
  }
  if (filteredExpenses.length === 1) {
    expensesContent = (
      <div>
        <p>Only single Expense here. Please add more...</p>
        {expensesContent}
      </div>
    )}
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
