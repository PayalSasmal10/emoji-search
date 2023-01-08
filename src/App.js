import logo from './logo.svg';
import './App.css';
import JSONDATA from './emoji.json';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder='Seach Emoji.....'/>
      {JSONDATA.map((val, key) => {
        return (
          <p>{val.emoji}{val.description}</p>
        );
      })}
    </div>
  );
}

export default App;
