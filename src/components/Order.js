import React, { useContext, useEffect, useState } from 'react';
import Form from './Form';
import Menu from './Menu';
import Confirmation from './Confirmation';

import { OrderContext } from './OrderContext';

function Order(props) {
  const [page, setPage] = useState('orderPage');
  const [confirmationP, setConfirmationP] = useState('');
  const [category, setCategory] = useState('All');

  //Whole object with beers, their descriptions etc
  const beersFromList = props.apiData[0];
  //arr that has all the names of beers that on tap.
  const beersFromTap = props.apiData[1].taps.map(beer => beer.beer);
  const filteredBeers = beersFromList.filter(beers =>
    beersFromTap.includes(beers.name)
  );

  const unavailableBeers = beersFromList.filter(
    beers => !beersFromTap.includes(beers.name)
  );
  let clickFilterBeers = filteredBeers.filter(
    beer => beer.category === category
  );

  if (category === 'All') {
    clickFilterBeers = filteredBeers;
  }

  // eslint-disable-next-line
  const [orderObj, setOrderObj] = useContext(OrderContext);

  useEffect(() => {
    const orders = filteredBeers.map(tap => {
      return { name: tap.name, amount: 0, price: 0 };
    });
    setOrderObj(orders);
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {page === 'orderPage' ? (
        <Menu
          setPage={setPage}
          setCategory={setCategory}
          category={category}
          apiData={props.apiData}
          filteredBeers={clickFilterBeers}
          allBeers={filteredBeers}
          unavailableBeers={unavailableBeers}
        />
      ) : null}
      {page === 'formPage' ? (
        <Form setPage={setPage} setConfirmationP={setConfirmationP} />
      ) : null}
      {page === 'confirmationPage' ? (
        <Confirmation
          setCategory={setCategory}
          confirmationP={confirmationP}
          setPage={setPage}
        />
      ) : null}
    </section>
  );
}

export default Order;
