import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/card';
function App() {
  const [counter, setCounter] = useState(10); // Set initial counter value to 10

let myobj = {
  username : "hitesh",
  age : 21 
}
let newArr = [1,2,3,4,5];
  return (
    <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
  <Card username="chai aur code" btnText="click me"/>
  <Card username="kuldeep"  />
   </>
  );
}

export default App;
