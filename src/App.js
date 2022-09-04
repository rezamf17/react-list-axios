import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import{ Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <h1>React Router Dom</h1>
      <Routes>
        <Route path='/' element={<FirstPage />}/>
        <Route path='/second-page' element={<SecondPage />}/>
      </Routes>
    </div>
  );
}

export default App;
