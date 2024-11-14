import React from 'react';
import './App.css';
import KYCForm from './components/KYCForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>KYC for DAO using Blockchain</h1>
        <KYCForm />
      </header>
    </div>
  );
}

export default App;
