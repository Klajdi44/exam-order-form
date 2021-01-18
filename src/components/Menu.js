import React, { useContext, useState } from 'react';
import MenuCard from './MenuCard';
// import MenuOrder from './MenuOrder';
import SideBar from './SideBar';
import BarInfo from './BarInfo';
import Cart from './Cart';
import { OrderContext } from './OrderContext';

function Menu(props) {
  // eslint-disable-next-line
  const [orderObj, setOrderObj] = useContext(OrderContext);
  const [isBarOpened] = useState(
    new Date().getHours() > 22
      ? false
      : new Date().getHours() < 6
      ? false
      : true
  );

  function updateCategory(e) {
    props.setCategory(e.target.innerText);
  }

  const filteredCategories = [];
  props.allBeers.forEach(availableBeer => {
    if (filteredCategories.indexOf(availableBeer.category) < 0) {
      filteredCategories.push(availableBeer.category);
    }
  });
  // console.log(isBarOpened);
  return (
    <article className='menu-wrapper'>
      <div className='menu'>
        <BarInfo apiData={props.apiData} isBarOpened={isBarOpened} />
        <div className='filters-wrapper'>
          <span>Filter by</span>
          <button
            className='filters'
            disabled={props.category === 'All'}
            onClick={updateCategory}
          >
            All
          </button>
          {filteredCategories.map(beerCategory => {
            return (
              <button
                key={beerCategory}
                className='filters'
                disabled={beerCategory === props.category}
                onClick={updateCategory}
              >
                {beerCategory}
              </button>
            );
          })}
        </div>
        <h1>Our Beer selection</h1>

        <MenuCard filteredBeers={props.filteredBeers} />
        <h1 className='unavailable-beer-heading'>
          {' '}
          Currently unavailable beers
        </h1>
        <MenuCard unavailableBeers={props.unavailableBeers} />
      </div>
      <Cart />
      <SideBar isBarOpened={isBarOpened} setPage={props.setPage} />
    </article>
  );
}

export default Menu;
