import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import FormPage from './components/FormPage';
import AnimalPage from './containers/AnimalPage';
import AnimalList from './containers/AnimalList';
import{ Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <h1>React Router Dom</h1>
      <Routes>
        <Route path='/' element={<FirstPage />}/>
        <Route path='/second-page' element={<SecondPage />}/>
        <Route path='/formulir' element={<FormPage />} />
        <Route path='animals' element={<AnimalList />}>
        <Route path=':animalId' element={<AnimalPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
