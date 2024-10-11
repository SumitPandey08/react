import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  const green = () => {
    setColor("green");
  };
  const red = () => {
    setColor("red");
  };
  const olive = () => {
    setColor("olive");
  };
  const blue = () => {
    setColor("blue");
  };
  const black = () => {
    setColor("black");
  };
  const white = () => {
    setColor("white");
  };
  const golden = () => {
    setColor("gold");
  };

  return (
    <div className="w-screen h-screen duration-200" style={{ backgroundColor: color }}>
    <div className='flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2'>
   <div className='flex flex-wrap gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl'>
   <button onClick={green} className='bg-green-600 px-4 py-1 rounded-lg'>Green</button>
   <button onClick={red} className='bg-red-600 px-4 py-1 rounded-lg'>Red</button>
   <button onClick={olive}className='bg-olive px-4 py-1 rounded-lg'>Olive</button>
   <button onClick={blue} className='bg-blue-600 px-4 py-1 rounded-lg'>Blue</button>
   <button onClick={black} className='bg-black px-4 py-1 rounded-lg'
  >Black</button>
   <button onClick={white} className='bg-white px-4 py-1 rounded-lg'>White</button>
   <button onClick={golden} className='bg-golden px-4 py-1 rounded-lg'>Golden</button>
   </div>
    </div>
    </div>
  );
}

export default App;