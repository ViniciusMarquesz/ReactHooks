import { useReducer } from "react";


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, { counter: 0});


  return (
   <div>
    <p>{state.counter}</p>
    <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
   </div>

  );

};

export default App;