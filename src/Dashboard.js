import React from 'react';
import './Dashboard.css';
import './animations.css';

const Dashboard = ({ totalAmount, expenses }) => {
  const totalExpenses = expenses.length;
  const averageExpense = totalExpenses ? (totalAmount / totalExpenses).toFixed(2) : 0;

  return (
    <div className="dashboard-container1" id='dashboard-container1'>
       <div className='Welcome'>
        <div className='wl-icon'>
        <img src=" https://imgs.search.brave.com/ijEue4nO1G46qCqFU7SCfWOIsN1gLAlBAF6n2an9EYk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci82ODcv/MTAxNC9IRC13YWxs/cGFwZXItcGVhY2Ut/aXMtY29zdGx5LWJ1/dC1pdC1pcy13b3J0/aC10aGUtZXhwZW5z/ZS1xdW90ZXMtYWJv/dXQtcGVhY2UtYWZy/aWNhbi1wcm92ZXJi/LWdyZWVuLXBhcGVy/LXBvcHVsYXItcXVv/dGVzLWluc3BpcmF0/aW9uLWFmcmljYW4t/cHJvdmVyYi1xdW90/ZXMuanBn" alt="Expense Tracker" />
        </div>
        <div className='hello'>
        <div className='w'>Welcome to <span className="highlight">Xpensely</span> </div>
        <p>Your Own <span className="highlight">Personalised</span> Dashboard</p>
        </div>
       </div>
       <div className='dashboard-container'>
       <div className="dashboard-item">
        <h3>Total Expenses</h3>
        <p>{totalExpenses}</p>
      </div>
      <div className="dashboard-item">
        <h3>Total Amount Spent</h3>
        <p>${totalAmount.toFixed(2)}</p>
      </div>
      <div className="dashboard-item">
        <h3>Average Expense</h3>
        <p>${averageExpense}</p>
      </div>
       </div>
      
    </div>
  );
};

export default Dashboard;
