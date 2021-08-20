
import './App.css';
import { useSelector, useDispatch } from "react-redux"
//bindActionCreators lets you combine multiple action creators and 
//associate them to the useDispatch function from redux
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"

function App() {
  //useSelector pulls the current state from the Store
  //useSelector can be used in any child component in the App and pull the same state value
  const state = useSelector((state) => state)
  let  account = state.account;
  //console logging the state shows you the name of each
  //reducer from combined version, as well as whatever the current value
  //is being returned by that reducer (currently just the default state)

  const dispatch = useDispatch()

  //we can destructure the object that bindActionCreators creates
  //so that we can use our action creator functions with the useDispatch superpowers!
  const { depositMoney, withdrawMoney }= bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
