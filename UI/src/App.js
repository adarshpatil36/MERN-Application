import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h2 style={{paddingTop:'20px'}}>Battle Data</h2>
      <SearchBar/>
    </div>
  );
}

export default App;
