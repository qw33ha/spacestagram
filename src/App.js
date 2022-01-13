import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Header from './pages/header/header.component';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Homepage/>
    </div>
  );
}

export default App;
