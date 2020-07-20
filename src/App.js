import React from 'react';
import Header from './components/container/header';
import Files from './components/container/file';
import Footer from './components/container/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="color">
      <Files/>
      </div>
      <div className="App-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
