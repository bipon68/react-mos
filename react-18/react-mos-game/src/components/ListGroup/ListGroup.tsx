import { Fragment, MouseEvent, useState } from "react";
import './ListGroup.css'
import styled from 'styled-components';

interface Props{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void
}
interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${props => props.active ? 'blue' : 'none'}
`;

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
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
