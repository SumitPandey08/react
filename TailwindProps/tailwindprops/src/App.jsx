import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <div>
      <h1 className='bg-green-400 text-black  p-5 rounded-xl'>TailwindCss Props</h1>
      <img className="w-full" src="" alt="Sunset in the mountains"/>
      <Card username = "Zoro" image ="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/zoro-using-three-swords-in-one-piece.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5" />
      <Card username = "Kenpachi" image = "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/bleach-kenpachi-zaraki-shikai.jpg"/>
      <Card username = "Yami" image = "https://preview.redd.it/hwyb-yami-sukehiro-from-black-clover-v0-4yl1syfh9lg91.jpg?width=1080&crop=smart&auto=webp&s=22b18a2459f96b518885f7a49d657c2e25516188" />
</div>
  
     
       

  );
}




export default App
