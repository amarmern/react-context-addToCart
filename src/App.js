import './App.css';
import Cart from './component/Cart';
import Item from './component/Item';

function App() {
  return (
    <div className="App">
      <Item name="Mackbook" price={100000} />
      <Item name="Pendrive" price={4000} />
      <Item name="Mobile" price={35000} />
      <Cart />
    </div>
  );
}

export default App;
