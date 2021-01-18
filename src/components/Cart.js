import React, { useContext } from 'react';
import { OrderContext } from './OrderContext';
import img from '../images/beerimg-b.png';

function Cart(props) {
  // eslint-disable-next-line
  const [orderObj, setOrderObj] = useContext(OrderContext);

  const amount = orderObj.reduce((acc, value) => {
    return acc + value.amount;
  }, 0);

  return (
    <div className='cart'>
      <div onClick={() => window.scrollTo(0, 10000)}>
        <img src={img} alt='beer' />
        <h2 className={amount > 0 ? 'cart-show' : null}> {amount}</h2>
      </div>
    </div>
  );
}

export default Cart;
