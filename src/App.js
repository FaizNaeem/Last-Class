import { useEffect, useState } from 'react';
import './App.css';
import { Props } from './com/props';

function App() {
  const faiz = "Faiz"
  const [name1,setName] = useState("hello")
  console.log(setName);
  return (
    <div className="App">
     <h1>Hello </h1>
 
 <Props name={faiz} nameh={name1} />
    </div>
  );
}

export default App;
