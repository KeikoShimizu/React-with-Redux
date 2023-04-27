import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  // count = counter fileのinitial state の中にあるcounter = 0のこと
  //useSelector = hook
  //state = reducer name reducer in counter file 
  //counter = counter fileの中でsetした reducer の名前を　store fileの中でcounterをさらにsetしたもの
  const {count} = useSelector((state) => state.counter)

  //Redux Actionをcounter fileからimportする（increment & decrement）
  //Dispatch hook ＝　reducer をcallする！
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>The count is : {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
    </div>
  );
}

export default App;
