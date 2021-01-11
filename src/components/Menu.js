import React, { useContext, useState } from "react";
import MenuCard from "./MenuCard";
import MenuOrder from "./MenuOrder";
import BarInfo from "./BarInfo";
import { OrderContext } from "./OrderContext";

function Menu(props) {
  // eslint-disable-next-line
  const [orderObj, setOrderObj] = useContext(OrderContext);
  const [isBarOpened] = useState(new Date().getHours() > 21 ? false : new Date().getHours() < 6 ? false : true)

  function updateCategory(e) {
    props.setCategory(e.target.innerText);
  }

  const filteredCategories = [];
  props.allBeers.forEach((availableBeer) => {
    if (filteredCategories.indexOf(availableBeer.category) < 0) {
      filteredCategories.push(availableBeer.category);
    }
  });
  console.log(isBarOpened);
  return (
    <article className="menu-wrapper">
      <div className="menu">
        <BarInfo
          apiData={props.apiData}
        />
        <div className="filters-wrapper">
          <span>Filter by</span>
          <button className="filters" disabled={props.category === "All"} onClick={updateCategory}>
            All
          </button>
          {filteredCategories.map((beerCategory) => {
            return (
              <button key={beerCategory}
                className="filters"
                disabled={beerCategory === props.category}
                onClick={updateCategory}>
                {beerCategory}
              </button>
            );
          })}
        </div>
        <h1>Our Beer selection</h1>

        <MenuCard filteredBeers={props.filteredBeers} />
        <h1 className="unavailable-beer-heading"> Currently unavailable beers</h1>
        <MenuCard unavailableBeers={props.unavailableBeers} />

      </div>

      <div className="order">
        <h1>Your Order</h1>
        <div className="order-grid">
          <div className="order-cards">
            <ul>
              {orderObj.map((order) => {
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
          <div className="order-price">
            <div className="overall-price">
              <h1>Total</h1>
              <span>
                {orderObj.reduce((acc, value) => {
                  return acc + value.price;
                }, 0)}
                DKK
              </span>
              <br />
            </div>

            <button onClick={() => orderObj.map((beer) => (beer.price > 0 && isBarOpened ? props.setPage("formPage") : null))}> {isBarOpened ? 'Proceed To Checkout' : 'Bar is closed'}</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Menu;
