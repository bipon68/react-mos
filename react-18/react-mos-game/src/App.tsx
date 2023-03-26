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

   //Update Nested object in React
  const [customer, setCustomer] = useState({
    name: 'Bipon',
    address: {
      city: 'Dhaka',
      zipCode: 9600
    }
  })

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: {...customer, ...customer.address, zipCode: 9000}
    })
  }


  return <div>
      {/* <BsFillCalendar2EventFill color="red" size="40"/> */}
      {/* <Like onClick={() => console.log('Clicked')} /> */}
      {/* <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/> */}
        {/* {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
        <Button  onClick={() => setAlertVisible(true)}>My Button</Button> */}
      {customer.address.zipCode}
      <Button color="primary"  onClick={handleClick} >Button</Button>

    </div>
}

export default App;