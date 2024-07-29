import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { useState } from "react";
import "./App.css";
function App() {
  const [inputvalue, Setinputvalue] = useState("");
  const url = "https://inportant.farmseller.in/youtube-info";
  const getUrl = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        url: inputvalue,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.title);
        alert(res.data.title);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  const handleChange = (e) => {
    Setinputvalue(e.target.value);
  };
  return (
    <div className="tex">
      <input
        className="te"
        type="text"
        value={inputvalue}
        onChange={handleChange}
        placeholder="Enter the URL"
      />
      <button className="btn" onClick={getUrl}>
        Get Details
      </button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
