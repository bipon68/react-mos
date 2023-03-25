import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";
import {BsFillCalendar2EventFill} from 'react-icons/bs'



function App(){

  let items = ["Dhaka", "Khulna", "Rajshai", "Albania", "Berlin"];
  //  items = [];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  const [alertVisible, setAlertVisible] = useState(false);

  return <div>
      <BsFillCalendar2EventFill color="red" size="40"/>
      <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
        {/* {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
        <Button  onClick={() => setAlertVisible(true)}>My Button</Button> */}
    </div>
}

export default App;