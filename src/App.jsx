import {useSelector, useDispatch} from '@reduxjs/toolkit';
import './App.css';
import CounterSlice from './reduxStore/slices/CounterSlice';

function App() {
 const appDispatch = useDispatch();
 const appSelector = useSelector((state) => CounterSlice.counter.count);

  return (
    <>
      
    </>
  );
}

export default App;
