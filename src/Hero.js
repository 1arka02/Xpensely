import {React} from 'react';
import './Hero.css';
import './animations.css';

const Hero = () => {
  const features = [
    {
      title: 'Track Your Expenses',
      description: 'Easily track and manage your daily expenses.',
      imgSrc: 'https://imgs.search.brave.com/1cAwCX6exWHjzifkX-VyvaBAItVwlKCMYvOPuBFAOMg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzEwNzg1/OTU5L3NjcmVlbnNo/b3RzLzE5NzE5MzIx/L21lZGlhLzZkNDJj/Y2VmYmNjMDExNjgy/ZTY3NDgwMTUyMDM0/MDk4LmpwZz9yZXNp/emU9NDAweDA', // Replace with your actual image URLs
    },
    {
      title: 'Categorize Spending',
      description: 'Categorize your spending to see where your money goes.',
      imgSrc: 'https://imgs.search.brave.com/C5_3-p3YnDlILzrtYaNr60MiNlg4GXsi-aIJuGhr_-A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/em9oby5jb20vaW52/b2ljZS9pbWFnZXMv/dG91ci9leHBlbnNl/cy90cmFjay1leHBl/bnNlLW9uLWRhc2hi/b2FyZC5wbmc', // Replace with your actual image URLs
    },
    {
      title: 'Visualize Data',
      description: 'Visualize your spending data with charts and graphs.',
      imgSrc: 'https://imgs.search.brave.com/PoCpjDbp9wy0CSyZxVnWEtd48ZftM3nh957L8cfvKvs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L2ludGVyYWN0aXZl/LWRhdGEtdmlzdWFs/aXphdGlvbi1leGFt/cGxlLTQucG5nP3dp/ZHRoPTEwMjImbmFt/ZT1pbnRlcmFjdGl2/ZS1kYXRhLXZpc3Vh/bGl6YXRpb24tZXhh/bXBsZS00LnBuZw', // Replace with your actual image URLs
    },
  ];
  return (
    <section className="hero">
      <div className='more'>
        <div className="more-content">
          <p className="more-title">Manage Your Expenses Effortlessly</p>
          <p className="more-subtitle">Stay organized, make informed decisions, and achieve your financial goals with our Expense Tracker app.</p>
        </div>
        <div className="hero-image">
          <div className='images'>
            <img src="	https://moneylover.me/img/introfeature/1.svg" alt="Expense Tracker" />
            <p>100% Secured data</p>
          </div>
          <div className='images'>
            <img src="	https://moneylover.me/img/introfeature/2.svg" alt="Expense Tracker" />
            <p>1 Million+ users</p>
          </div>
          <div className='images'>
            <img src="  https://moneylover.me/img/introfeature/3.svg" alt="Expense Tracker" />
            <p>100K+ 5-star Reviews</p>
          </div>
          <div className='images'>
            <img src="  https://moneylover.me/img/introfeature/4.svg" alt="Expense Tracker" />
            <p>App of the day</p>
          </div>
        </div>
      </div>
      <div className='more'>
        <div className='more-content'>
          <p className='more-title'>Simple Money Tracker</p>
          <p className='more-subtitle'>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
        </div>
        <div className='more-image'>
          <img src=" 	https://moneylover.me/img/details/Transaction@4x.png " alt="Expense Tracker" />
        </div>
      </div>

      <div className='more'>
        <div className='more-content'>
          <p className='more-title'>The whole picture in one place</p>
          <p className='more-subtitle'>One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.</p>
        </div>
        <div className='more-image'>
          <img src=" 	https://moneylover.me/img/details/REPORT@4x.png	" alt="Expense Tracker" />
        </div>
      </div>
      <div className="features-section">
        <div> <h2>Key Features</h2></div>
       <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.imgSrc} alt={feature.title} className="feature-img" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
