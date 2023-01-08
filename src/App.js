import logo from './logo.svg';
import './App.css';
import JSONDATA from './emoji.json';

function App() {
  return (
    <div className="App">
      <h1>😍 Emoji Search App 🤤</h1>
      <input type="text" placeholder='Seach Emoji.....'/>
      {JSONDATA.map((val, key) => {
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
