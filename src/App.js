import logo from './logo.svg';
import './App.css';
import JSONDATA from './emoji.json';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="App">
      <h1>😍 Emoji Search App 🤤</h1>
      <input type="text" placeholder='Search Emoji.....' onChange={searchHandler} />
      {JSONDATA.filter((val) => {
        if(searchTerm === ''){
          return val;
        }else if(val.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="emojiRow">
            <span className='description'>{val.emoji}{" "}{val.description}</span>
            <span className='info'>Click to copy emoji</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
