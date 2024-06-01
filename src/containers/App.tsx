import './App.css';
import {ItemsMenu} from '../types';
import MenuItems from '../components/MenuItems/MenuItems';
import Hamburger from '../assets/hamburger.png';
import Cheeseburger from '../assets/cheeseburger.png';
import Fries from '../assets/fries.png';
import Coffee from '../assets/coffee.png';
import Tea from '../assets/tea.png';
import Cola from '../assets/cola.png';

const App = () => {
  const Items: ItemsMenu[] = [
    {id: ((Date.now() + Math.random().toString(36)) + 1), name: 'Hamburger', price: 80, image: Hamburger},
    {id: ((Date.now() + Math.random().toString(36)) + 2), name: 'Cheeseburger', price: 90, image: Cheeseburger},
    {id: ((Date.now() + Math.random().toString(36)) + 3), name: 'Fries', price: 45, image: Fries},
    {id: ((Date.now() + Math.random().toString(36)) + 4), name: 'Coffee', price: 70, image: Coffee},
    {id: ((Date.now() + Math.random().toString(36)) + 5), name: 'Tea', price: 50, image: Tea},
    {id: ((Date.now() + Math.random().toString(36)) + 6), name: 'Cola', price: 40, image: Cola},
  ];

  const itemButton = Items.map((item) => (
    <MenuItems key={item.id} item={item}/>
  ));

  return (
    <div className="appStyle">
      <div className='mainMenu'>
        <div className='OrderedItems'>
          <p className='textInfo'>Order details:</p>
          <p>Please make some order!</p>
        </div>
        <div className='MenuItems'>
          <strong>Add items: </strong>
          <div className='gridContainer'>
            {itemButton}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;