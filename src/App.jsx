import './App.css';
import React from 'react';
import CounterFunctional from './components/Counter/CounterFunctional.jsx';

const App = () => {
  return (
    <div>
      <CounterFunctional initialValue={0}/>
    </div>
  );
};

export default App;
