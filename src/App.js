import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [results, setResults] = useState([]);
      React.useEffect(() => {
        fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setResults(data);
        })
      },[])

  return (
    <div className="App">

      <h1>hello world</h1>
    </div>
  );
}

export default App;
