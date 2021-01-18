import React from 'react';

function Filter(props) {
  const filteredCategories = [];

  props.allBeers.forEach(availableBeer => {
    if (filteredCategories.indexOf(availableBeer.category) < 0) {
      filteredCategories.push(availableBeer.category);
    }
  });

  function updateCategory(e) {
    props.setCategory(e.target.innerText);
  }

  return (
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
  );
}

export default Filter;
