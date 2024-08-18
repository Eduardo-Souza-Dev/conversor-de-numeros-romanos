import React from 'react';
import './App.css';
import { Inputs } from './components/inputs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <section className="App-body">
        <ToastContainer />
        <Inputs/>
       
      </section> 
      </header>
     
    </div>
  );
}

export default App;
