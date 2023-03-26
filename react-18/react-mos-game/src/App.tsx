import { useState } from "react";
import Alert from "./components/Alert";

import ListGroup from "./components/ListGroup";
import Message from "./Message";
import {BsFillCalendar2EventFill} from 'react-icons/bs'
import Like from "./components/Like";

// import Bootstrap CSS
import  '../node_modules/bootstrap/dist/css/bootstrap.css'
import Button from "./Button";

function App(){

  let items = ["Dhaka", "Khulna", "Rajshai", "Albania", "Berlin"];
  //  items = [];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  const [alertVisible, setAlertVisible] = useState(false);

   //Updating Arrays of Object in React
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false}
  ])

  const handleClick = () => {

    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true}: bug))
    console.log(...bugs)
  }


  return <div>
      {/* <BsFillCalendar2EventFill color="red" size="40"/> */}
      {/* <Like onClick={() => console.log('Clicked')} /> */}
      {/* <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/> */}
        {/* {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
        <Button  onClick={() => setAlertVisible(true)}>My Button</Button> */}

      <Button color="primary"  onClick={handleClick} >Button</Button>

    </div>
}

export default App;