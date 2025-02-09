import { useState } from 'react'

function App() {
const[color,setColor] = useState('olive');

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=> setColor("red")} className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=> setColor("orange")} className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=> setColor("green")} className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=> setColor("blue")} className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=> setColor("black")} className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=> setColor("pink")} className='cursor-pointer outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}}>pink</button>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default App
