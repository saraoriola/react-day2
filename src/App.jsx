import './App.css';
import React from 'react';
import CounterFunctional from './components/Counter/CounterFunctional';

const App = () => {
  return (
    <div>
      <h1>Counter</h1>
      <CounterFunctional initialValue={0} number={2}/>
      <CounterFunctional initialValue={3} number={3}/>
      <CounterFunctional initialValue={10} number={10}/>
    </div>
  );
};

export default App;
