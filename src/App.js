import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import "./index.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 className="counter">Counter : {counter}</h1>
      <div className="btns">
        <button className="plus" onClick={() => dispatch(increment(20))}>
          +
        </button>
        <button className="minus" onClick={() => dispatch(decrement(4))}>
          -
        </button>
      </div>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
