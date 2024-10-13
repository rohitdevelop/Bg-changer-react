import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("white");



  return (
    <>
      <div style={{ backgroundColor: color }} className='w-screen h-screen flex justify-center '>
        <div className='h-16 w-2/3 bg-slate-500 flex justify-center items-center space-x-32'>
          <div className='h-10 w-24 text-center rounded-3xl bg-red-700'>
            <button onClick={() => setColor("red")}>red</button>
          </div>
          <div className='h-10 w-24 text-center rounded-3xl bg-green-500'>
            <button onClick={() => setColor("green")}>green</button>
          </div>
          <div className='h-10 w-24 text-center rounded-3xl bg-orange-400'>
            <button onClick={() => setColor("orange")}>orange</button> </div>
          <div className='h-10 w-24 text-center rounded-3xl bg-blue-600'>
            <button onClick={() => setColor('blue')}> blue</button>
          </div>
          <div className='h-10 w-24 text-center rounded-3xl bg-violet-600'>
            <button onClick={() => setColor('violet')}>voilet</button>
          </div>
          <div className='h-10 w-24 text-center rounded-3xl bg-yellow-400'>
            <button  onClick={() => setColor('yellow')}>yellow</button>
          </div>
        </div>
      </div>``
    </>
  );
}

export default App;
