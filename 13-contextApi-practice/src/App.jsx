import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';

function App() {

  return (
   <div>
    <Item itemName = "Acer Laptop" price = {63000}/>
    <Item itemName = "Redmi note 14 SE" price = {14000}/>
    <Item itemName = "Evofox keyboard" price = {1500}/>
    <br />
    <hr />
    <Cart/>
   </div>
  );
};

export default App;