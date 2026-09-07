import { useEffect, useRef, useState  } from "react"

const App = () => {


  const [show, setShow] = useState(false);

  const popup = useRef();
  const button = useRef();

  useEffect(() => {
    if(!popup.current || !button.current) return;

    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 10}px`;
  }, [show]);




  return (
    <>  
    <button ref={button} onClick={() => setShow((prev) => !prev)}> Toggle modal </button>

    {show && (
      <div ref={popup} style={{ position: "absolute", backgroundColor: "lightgray", padding: "10px" }}>
        <p>This is a simple modal</p>
      </div>
    )}
    </>

  );

};

export default App;