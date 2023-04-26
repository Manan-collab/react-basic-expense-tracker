import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Header } from './components/Header';
import { TransactionList } from './components/TransactionList';
import { AddTransactionForm } from './components/AddTransactionForm';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
       <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransactionForm />
       </div>
    </GlobalProvider>
  );
}

export default App;
