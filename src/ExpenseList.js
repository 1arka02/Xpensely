import React, { useState, useEffect } from 'react';
import './ExpenseList.css';
import CommentSection from './CommentSection';


const categoryIcons = {
  Stationery: 'https://imgs.search.brave.com/34RGezFpjwHJnXdUUSlb6nCi359ZLhIZm2VEDjmaKGU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc3RhdGlvbmFy/eS0xMy81MTIvc3Rh/dGlvbmFyeV9wZW5j/aWxfc2Nob29sX29m/ZmljZS0wNS0xMjgu/cG5n',
  Food: 'https://imgs.search.brave.com/c3EMNUrAqAhzu8FpP6JuVv4DMlmYogiJe8vrvyngy50/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9n/Y2VFYTVLTWkucG5n',
  Transport: 'https://imgs.search.brave.com/RYw2m3brem3yUalm72Go5gEGfKOUM-oxaGozn3VaUEg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzEv/NjA3LzExOS9zbWFs/bC9kZWxpdmVyeS10/cmFuc3BvcnQtY2Fy/Z28tbG9naXN0aWMt/YWktZ2VuZXJhdGl2/ZS1mcmVlLXBuZy5w/bmc',
}

const ExpenseList = ({ expenses, setExpenses,setEditingExpense }) => {
 
  const [filterCategory, setFilterCategory] = useState('All');

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    const updatedExpenses = expenses.filter((e) => e !== expense);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  const handleCategoryFilterChange = (e) => setFilterCategory(e.target.value);

  const filteredExpenses = filterCategory === 'All' ? expenses : expenses.filter(expense => expense.category === filterCategory);

  const totalAmount = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);



  return (
    <div className="expense-list-container" id='expense-list-container'>
      <div className='back'>
      <img src="https://imgs.search.brave.com/c3us3pZtXiuj8FmDanSOgNhObXADsQfEo67hkqUJH3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC83Ny8wNS9n/b29kLWRpYWwtbGV2/ZWwtaWNvbi1mbGF0/LXN0eWxlLXZlY3Rv/ci0zMTExNzcwNS5q/cGc" alt="Expense Tracker" />
      </div>
      <p className='list'>Expense List</p>
               
      <div className="filter-container">
        <label>Filter by category:</label>
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Stationery">Stationery</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
        </select>
      </div>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense, index) => (
            <tr key={index}>
              <td>
                <img src={categoryIcons[expense.category]} alt={expense.category} className="category-icon" />
              </td>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => handleEdit(expense)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-amount">
      <strong>Total: ${totalAmount.toFixed(2)}</strong>
      </div>
      <CommentSection/>
    </div>
  );
};

export default ExpenseList;
