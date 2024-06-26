import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import React,{useState,useEffect} from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import Dashboard from './Dashboard';
import CommentSection from './CommentSection';
import SocialMediaFooter from './SocialMediaFooter';
function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  // Load expenses from localStorage when the component mounts
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
  return (
    <div className="App">
      <Navbar/>
      <Dashboard totalAmount={totalAmount} expenses={expenses} />
      <Hero/>
      <ExpenseForm 
        expenses={expenses} 
        setExpenses={setExpenses} 
        setEditingExpense={setEditingExpense} 
        editingExpense={editingExpense} 
      />
      <ExpenseList 
        expenses={expenses} 
        setExpenses={setExpenses} 
        setEditingExpense={setEditingExpense} 
      />
      <SocialMediaFooter /> 
    </div>
  );
}

export default App;
