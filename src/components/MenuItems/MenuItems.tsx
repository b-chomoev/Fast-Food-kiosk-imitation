import {FC} from 'react';
import {ItemsMenu} from '../../types';

interface AddItemsProps {
  item: ItemsMenu;
}

const AddItems: FC<AddItemsProps> = ({ item}) => {
  return (
    <div className="addItemsMenu">
      <button
        className="itemBtn" key={item.id}>
        <img className="btnImage" src={item.image} alt=""/>
        {item.name}
        <p className="costItem"> {item.price} KGS </p>
      </button>
    </div>
  );
};

export default AddItems;
