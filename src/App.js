import React from 'react';
import './App.css';
import Navmenu from './Components/Navmenu';

let nav = [
  { item1: "Home" },
  { item1: "Contact" },
  {
    item1: "Service",
    subitem: [
      "For Entrepreneurs",
      "For Student",
      "For Hobbyists"
     
    ]
  }
];


function App() {

  return (
    <div className="App">

      <Navmenu navmenu={nav} />
    </div>

  );
}

export default App;
