import React, {useState} from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {
  const [Pages, setPages] = useState('first')
  const linkHandler = (event, pages) => {
    event.preventDefault()
    setPages(pages)
  }
  return (
    <div className="App">
      <h1>Pages React</h1>
      <div style={{textAlign : 'center', display : 'flex', gap :' 0.5em'}}>
        <a href='#' onClick={(event) => linkHandler(event, 'first')}>First</a>
        <a href='#' onClick={(event) => linkHandler(event, 'second')}>Second</a>
      </div> 
      {Pages === 'first' ? <FirstPage /> : <SecondPage />}
    </div>
  );
}

export default App;
