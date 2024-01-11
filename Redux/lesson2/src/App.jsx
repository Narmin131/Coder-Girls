import { useSelector, useDispatch } from "react-redux";
import { incrementFunction, decrementFunction } from "./redux/actions/Actions";
function App() {
  const counter = useSelector((store) => store.CounterReducer);
  console.log(counter);

  const dispatch = useDispatch();
  return (
    <>
      <div className="container m-2">
        <button
          className="btn btn-success"
          onClick={() => dispatch(incrementFunction())}
        >
          +
        </button>
        <span>{counter}</span>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(decrementFunction())}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;

// JSX - Javascript Xml
// SPA - Single Page Application

// npm i redux
// npm i react-redux
