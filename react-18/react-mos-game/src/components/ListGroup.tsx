import { Fragment, MouseEvent, useState } from "react";

interface Props{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void
}

function ListGroup({items, heading, onSelectItem}: Props) {
  // let items = ["Dhaka", "Khulna", "Rajshai", "Albania", "Berlin"];
  // items = [];
  // let selectedIndex = -1;

  // if(items.length === 0){
  //   return <><h2>List</h2><p>No item Found</p></>
  // }

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  // const message = items.length === 0 ? <p>No Item Found</p>: null;
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No Item Found</p> : null;
  // };

  const [selectedIndex, setselectedIndex] = useState(-1)



  return (
    <>
      <h2>List</h2>
      {items.length === 0 ? <p>No item found</p>: null}
      {/* {message} */}
      {/* {getMessage()} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
