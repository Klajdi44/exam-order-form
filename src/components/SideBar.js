import React, { useContext } from 'react';
import MenuOrder from './MenuOrder';
import { OrderContext } from './OrderContext';

function SideBar(props) {
  // eslint-disable-next-line
  const [orderObj, setOrderObj] = useContext(OrderContext);

  return (
    <div className='order'>
      <h1>Your Order</h1>
      <div className='order-grid'>
        <div className='order-cards'>
          <ul>
            {orderObj.map(order => {
              if (order.amount > 0) {
                return (
                  <li key={order.name + Math.random()}>
                    <h1>{order.name}</h1>
                    <MenuOrder showCheckoutPrice={true} name={order.name} />
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
        <div className='order-price'>
          <div className='overall-price'>
            <h1>Total</h1>
            <span>
              {orderObj.reduce((acc, value) => {
                return acc + value.price;
              }, 0)}
              DKK
            </span>
            <br />
          </div>

          <button
            disabled={!props.isBarOpened}
            onClick={() =>
              orderObj.map(beer =>
                props.isBarOpened && beer.price > 0
                  ? props.setPage('formPage')
                  : null
              )
            }
          >
            {' '}
            {props.isBarOpened ? 'Proceed To Checkout' : 'Bar is closed'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
