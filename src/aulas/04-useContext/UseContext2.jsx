import { useReducer, useState } from "react";


const reducer = (state, action) => {
  switch (action.type) {
    case "add-task":
      return {
        tasks: [
          ...state.tasks, {name: action.payload, isCompleted: false},
        ],
      };
    default:
      return state;
  }
};

const AppUseContext2 = () => {

  const [state, dispatch] = useReducer(reducer, { counter: 0});
  const [inputValue, setInputValue] = useState("");


  return (
   <div>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <button>
      onclick={() => {
        dispatch({ type: "add-task", payload: inputValue });
        setInputValue("");
      }}
      Adicionar
    </button>

    {state.tasks.map(task => <p key={task.name}>{task.name}</p>)}
   </div>

  );

};

export default AppUseContext2;