import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Message from "./Message";


function App(){

  let items = ["Dhaka", "Khulna", "Rajshai", "Albania", "Berlin"];
  //  items = [];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return <div>
      {/* <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/> */}
        <Alert>Hello <span>World</span></Alert>
    </div>
}

export default App;