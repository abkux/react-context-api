import './index.css';
import Counter from './Counter';
import { useContext } from 'react';
import { CounterContext } from './context/Counter';

function App() {
  const counterState = useContext(CounterContext);
  console.log("CounterContext Value: ", counterState)
  return (
   <div className="flex items-center justify-center mt-4 flex-col">
    <h1 className='font-bold text-2xl'>React Context API</h1>
    <p>Count is {counterState ? counterState.count : 0}</p>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
   </div>
  );
}

export default App;
