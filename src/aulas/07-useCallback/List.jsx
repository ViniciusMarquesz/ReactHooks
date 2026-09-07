import { useEffect, useState } from "react";


const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((newItems) => setItems(newItems));
  }, [getItems]);

  return (
    <>
      {items &&
        items.map((item) => (
        <p key={item.id}>{item?.title || item?.name}</p>
      ))}
    </>
  );
};

export default List;