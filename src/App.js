import logo from "./logo.svg";
import "./App.css";
import JSONDATA from "./emoji.json";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const textCopy = "Click to copy emoji";

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const copyTextHandler = () => {
    setIsCopied(true);
    // textCopy
    console.log("I am working");
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>😍 Emoji Search App 🤤</h1>
      <input
        type="text"
        // value={text}
        placeholder="Search Emoji....."
        onChange={searchHandler}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.description
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <React.Fragment>
            <div className="emojiRow">
              <span className="description">
                {val.emoji} {val.description}
              </span>
              <CopyToClipboard text={val.emoji} onCopy={copyTextHandler}>
                <span className='info'> {isCopied ? "Copied" : ""}
                  Click to copy emoji
                </span>
              </CopyToClipboard>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;
