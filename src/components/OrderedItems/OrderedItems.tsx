import { FC } from "react";

interface OrderItemProps {
  order: {
    id?: string;
    name: string;
    count: number;
    price: number;
  };
  removeItem: (id: string | undefined, price: number) => void;
}

const OrderDetails: FC<OrderItemProps> = ({ order, removeItem }) => {
  return (
    <div key={order.id} className="orderDetailsMenu">
      <button className="removeBtn" onClick={() => removeItem(order.id, order.price)}>Delete</button>
      <p className="orderItems">
        <span>{order.name}</span> <span>x{order.count}</span> <strong>{order.price} KGS</strong>
      </p>
    </div>
  );
};
export default OrderDetails;