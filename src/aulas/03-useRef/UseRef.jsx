import { useState, useEffect, useRef } from "react"

const AppUseRef = () => {

  const [name, setName] = useState("");

  const renders = useRef(0);

  useEffect(() => { 
    renders.current = renders.current + 1;
  });



  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello! My names is {name}</p>
      <p>Renders: {renders.current}</p>
    </div>

  );

};

export default AppUseRef;