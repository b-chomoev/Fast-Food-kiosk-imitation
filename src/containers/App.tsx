import './App.css';
import {ItemsMenu, OrderedItems} from "../types";
import MenuItems from '../components/MenuItems/MenuItems';
import Hamburger from '../assets/hamburger.png';
import Cheeseburger from '../assets/cheeseburger.png';
import Fries from '../assets/fries.png';
import Coffee from '../assets/coffee.png';
import Tea from '../assets/tea.png';
import Cola from '../assets/cola.png';
import {useState} from "react";
import OrderDetails from "../components/OrderedItems/OrderedItems";

const App = () => {
  const Items: ItemsMenu[] = [
    {id: ((Date.now() + Math.random().toString(36)) + 1), name: 'Hamburger', price: 80, image: Hamburger},
    {id: ((Date.now() + Math.random().toString(36)) + 2), name: 'Cheeseburger', price: 90, image: Cheeseburger},
    {id: ((Date.now() + Math.random().toString(36)) + 3), name: 'Fries', price: 45, image: Fries},
    {id: ((Date.now() + Math.random().toString(36)) + 4), name: 'Coffee', price: 70, image: Coffee},
    {id: ((Date.now() + Math.random().toString(36)) + 5), name: 'Tea', price: 50, image: Tea},
    {id: ((Date.now() + Math.random().toString(36)) + 6), name: 'Cola', price: 40, image: Cola},
  ];

  const [orders, setOrders] = useState<OrderedItems[]>([]);
  const handleItemClick = (itemName: string, price: number) => {
    const realOrder = orders.find((order) => order.name === itemName);
    if (realOrder) {
      const updatedOrders = orders.map((order) =>
        order.name === itemName
          ? { ...order, count: order.count + 1, price: order.price + price }
          : order
      );
      setOrders(updatedOrders);
    } else {
      const newOrder = { id: Date.now().toString(), name: itemName, count: 1, price: price };
      setOrders([...orders, newOrder]);
    }
  };

  const getTotalSum = () => {
    return orders.reduce((total, order) => {
      return total + order.price;
    }, 0);
  };

  const removeItem = (id: string | undefined) => {
    if (id) {
      setOrders(prevState => prevState.filter(item => item.id !== id));
    }
  };

  const itemButton = Items.map((item) => (
    <MenuItems key={item.id} item={item} handleItemClick={handleItemClick} />
  ));

  const orderedItems = orders.map((order) => (
    <OrderDetails key={order.id} order={order} removeItem={removeItem} />
  ));

  return (
    <div className="appStyle">
      <div className='mainMenu'>
        <div className='OrderedItems'>
          <h2 className='textInfo'>Order details:</h2>
          {orders.length > 0 ? <h2>Total price: {getTotalSum()} KGS </h2> :
            <p className='ordered-text'>You are welcome to make an order from the Menu!</p>}
          {orderedItems}
        </div>
        <div className='MenuItems'>
          <h2 className='menu-title'>Add items: </h2>
          <div className='gridContainer'>
            {itemButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;