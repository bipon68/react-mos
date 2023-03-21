import { Fragment } from "react";

function ListGroup() {
  let items = ["Dhaka", "Khulna", "Rajshai", "Albania", "Berlin"];
  items = [];


//   if(items.length === 0){
//       return <><h2>List</h2><p>No item found</p></>
//   }

// const message = items.length === 0 ? <p>No Item Found</p>: null;
const getMessage = () => {
    return items.length === 0 ? <p>No Item Found</p>: null;
}

  return (
    <>
      <h2>List</h2>
      {items.length === 0 ? <p>No Item Found</p>: null}
      {/* {message} */}
      {/* {getMessage()} */}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
