import { useState, useEffect } from "react"

const AppEffect  = () => {

  const [resourceType, setResourceType] = useState("Posts");

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  }

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);

      const data = await response.json();
      console.log(data)
    }

    fetchResourceTypes();

  }, [resourceType]);




  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{display: "flex", alignItems: "center"}}>
        <button onClick={() => changeResourceType("Posts")}>Posts</button>
        <button onClick={() => changeResourceType("Comments")}>Comments</button>
        <button onClick={() => changeResourceType("Todos")}>Todos</button>
      </div>
    </div>

  );

};

export default AppEffect;