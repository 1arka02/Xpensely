import React, { useState, useEffect } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ expenses, setExpenses, setEditingExpense, editingExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Stationery');

  useEffect(() => {
    if (editingExpense) {
      setDescription(editingExpense.description);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
    }
  }, [editingExpense]);

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, [setExpenses]);

  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        category,
        date: new Date().toLocaleString(),
      };

      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      
      // Clear the form
      setDescription('');
      setAmount('');
      setCategory('Stationery');
      setEditingExpense(null);
    }
  };

  const isFormValid = description && amount && category;

  return (
    <div className='Expense-form'>
     <div className="expense-form-container" id='expense-form-container'>
      <div className='h2'>{editingExpense ? 'Edit Expense' : 'Add New Expense'}</div>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-control">
          <label>Description:</label>
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </div>
        <div className="form-control">
          <label>Amount:</label>
          <input type="number" value={amount} onChange={handleAmountChange} />
        </div>
        <div className="form-control">
          <label>Category:</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="Stationery">Stationery</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
          </select>
        </div>
        <button type="submit" disabled={!isFormValid}>
          {editingExpense ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default ExpenseForm;
