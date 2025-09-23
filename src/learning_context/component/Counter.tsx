import './index.css';
import { useContext } from 'react';
import { CounterContext } from '../context/Counter';

export default function Counter() {
    const counterContext = useContext(CounterContext);
  return (
    <div className='flex gap-x-1 mb-1'>
        <button onClick={() => {
            counterContext.setCount(counterContext.count + 1)
        }} className='border border-gray-800 hover:bg-gray-200 rounded-md px-2'>Increment</button>
        <button onClick={() => {
            counterContext.setCount(counterContext.count - 1)
        }} className='border border-gray-800 hover:bg-gray-200 rounded-md px-2'>Decrement</button>
    </div>
  );
}
