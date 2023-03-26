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

   //Update Array in React
  const [customers, setCustomer] = useState(['Bipon', 'Sajib'])

  const handleClick = () => {
    // Add
    //setCustomer([...customers, 'Fahim'])
   
    // Remove
    //setCustomer(customers.filter(customer => customer !=='Bipon'))

    // Update
    setCustomer(customers.map(customer => customer === 'Bipon' ? 'Bipon Biswas': customer))
    console.log(...customers)
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