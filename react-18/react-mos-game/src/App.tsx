import { useState, useRef } from "react";
import Alert from "./components/Alert";

import ListGroup from "./components/ListGroup";
import Message from "./Message";
import {BsFillCalendar2EventFill} from 'react-icons/bs'
import Like from "./components/Like";

import produce from 'immer';

// import Bootstrap CSS
// import  '../node_modules/bootstrap/dist/css/bootstrap.css'

import Button from "./Button";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./Form";
import { useEffect } from "react";
import ProductList from "./components/ProductList";


const countInitial = () => {
  console.log('Run function')
  return 4
}

function App(){

  // Why I choose useState hook
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue');

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)

  }
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
  }


  

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

  // const handleClick = () => {

  //   // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true}: bug))
  //   setBugs(produce(draft => {
  //     const bug = draft.find(bug => bug.id === 1);
  //     if(bug) bug.fixed = true;
  //   }))
  //   console.log(...bugs)
  // }

  // Sharing State between Components
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2']);

  // exercise : Updating state
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'Bipon'
    }
  })
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepeeroni',
    toppings: ['Mushroom']
  })
  const [cart, setCart] = useState({
    discount : 1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product 2', quantity: 1},
    ]
  })

  const handleClick = () => {
    setGame({...game, player: {...game.player, name: 'Sajib'}})
    setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1}: item )})
    console.log(setGame)
    console.log(setPizza)
    console.log(setCart)
  }

  // const ref = useRef<HTMLInputElement>(null);

  // afterRender
  // useEffect(() => {
  //   if(ref.current) ref.current.focus();
  // })
  // useEffect(() => {
  //   document.title = 'My React App'
  // })


const [category, setCategory] = useState('')

  return <div>
      {/* <BsFillCalendar2EventFill color="red" size="40"/> */}
      {/* <Like onClick={() => console.log('Clicked')} /> */}
      {/* <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/> */}
        {/* {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
        <Button  onClick={() => setAlertVisible(true)}>My Button</Button> */}
    {/* {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p>)} */}
      {/* <Button color="primary"  onClick={handleClick} >Button</Button>

      <NavBar cartItemsCount={cartItems.length}/>
      <Cart onClear={() => setCartItems([])} cartItems={cartItems}/> */}

      {/* <ExpandableText >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum excepturi amet adipisci nisi ut sapiente dolor est officiis qui error incidunt, mollitia, facilis rerum libero suscipit pariatur nihil facere debitis nesciunt odit fugit dignissimos. Aliquam suscipit, dolor dolore optio est placeat beatae inventore ipsam eius exercitationem hic esse maiores nisi perspiciatis dolores, quasi nulla numquam asperiores, sint delectus voluptas! Ipsam impedit asperiores modi quas, voluptate repudiandae ab architecto maxime! Pariatur, voluptatum. Repudiandae assumenda, consectetur ipsum amet dolorum aliquid placeat aspernatur optio molestias debitis, ad nobis expedita labore. Autem praesentium similique earum deserunt maiores, repudiandae inventore ipsa ex laudantium iusto itaque?</ExpandableText> */}

      {/* <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button> */}

      {/* <Form /> */}

      {/* <input type="text" className="form-control"/> */}
      <select  className="from-select" onChange={(event) => setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Tools">Tools</option>
        <option value="Pen">Pen</option>
      </select>
 
      <ProductList  category={category}/>
    </div>
}

export default App;