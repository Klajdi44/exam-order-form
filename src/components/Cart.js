import React, { useContext } from 'react';
import { OrderContext } from './OrderContext';
import img from '../images/beerimg-b.png';

function Cart(props) {
  // eslint-disable-next-line
  const [orderObj, setOrderObj] = useContext(OrderContext);

  const amount = orderObj.reduce((acc, value) => {
    return acc + value.amount;
  }, 0);
  console.log(amount);

  return (
    <div className='cart'>
      <img onClick={() => window.scrollTo(0, 10000)} src={img} alt='beer' />
      <h2>{amount}</h2>
    </div>
  );
}

export default Cart;
