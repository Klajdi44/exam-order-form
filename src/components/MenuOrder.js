import React, { useContext } from 'react';
import { OrderContext } from './OrderContext';

function MenuOrder(props) {
	const [orderObj, setOrderObj] = useContext(OrderContext);

	const oneOrder = orderObj.find(o => o.name === props.name);

	function addBeer() {
		const nextOrder = orderObj.map(order => {
			if (order.name === props.name && order.amount !== 99) {
				order.amount = order.amount + 1;
				order.price = order.price + 50;
			}
			return order;
		})

		setOrderObj(nextOrder);

	}

	function removeBeer() {
		const prevOrder = orderObj.map(order => {

			if (order.name === props.name && order.amount !== 0) {
				order.amount = order.amount - 1;
				order.price = order.price - 50;

			}
			return order;
		})

		setOrderObj(prevOrder);

	}

	function test(e) {

		const nextOrder = orderObj.map(order => {
			if (order.name === props.name) {
				order.amount = Number(e.target.value);
				order.price = order.amount * 50;
			}
			return order;
		})

		setOrderObj(nextOrder);
	}

	return (
		<div className="menu-order">
			<h3>{props.showCheckoutPrice ? oneOrder?.price + 'DKK' : 50 + 'DKK'}</h3>
			<button onClick={removeBeer}>-</button>
			<input className="order-amount" maxLength='2' pattern="^[0-9]*$" onInput={test} type='tel' value={oneOrder?.amount || 0} />
			<button onClick={addBeer} >+</button>
		</div >
	);
}

export default MenuOrder;