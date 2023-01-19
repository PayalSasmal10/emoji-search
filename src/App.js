import logo from "./logo.svg";
import "./App.css";
import JSONDATA from "./emoji.json";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCopied, setIsCopied] = useState(false);

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
      <div className="emoji-layout">
        <h1>😍 Emoji Search App 🤤</h1>
          <input
            id="search"
            type="text"
            // value={text}
            placeholder="Search Emoji....."
            onChange={searchHandler}
          />
        
      </div>
      <div className="wrapping-jsondata">
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
            <CopyToClipboard text={val.emoji} onCopy={copyTextHandler}>
              <div className="emojiRow">
                <span className="description">
                  {val.emoji} {val.description}
                </span>

                <span className="info">
                  {!isCopied ? "Click to copy emoji" : "Copied"}
                  {/* {isCopied ? "Copied" : ""} */}
                </span>
              </div>
            </CopyToClipboard>
          );
        })}
      </div>
    </div>
  );
}

export default App;
