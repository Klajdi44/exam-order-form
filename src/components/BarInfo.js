const BarInfo = props => {

  return (
    <div className='barInfo'>
      <div>
        <h1>
          Welcome to{' '}
          {props.apiData[1].bar.name === 'FooBar'
            ? 'Foobar'
            : props.apiData[1].bar.name}
        </h1>
        <p>
          The best bar in town where you can find a wide variety of unique
          mouthwatering beers.
        </p>
      </div>
      <div>
        <p>We are currently</p>
        <h2>
          {/* {new Date().getHours() > 23
            ? 'Closed'
            : new Date().getHours() < 6
            ? 'Closed'
            : 'Opened'} */}

          {props.isBarOpened ? 'Opened' : 'Closed'}
        </h2>
        <br />

        <p>
          {' '}
          {props.isBarOpened
            ? props.apiData[1].bar.closingTime === '22:00:00'
              ? 'Closing at 10PM'
              : 'Closing at' + props.apiData[1].bar.closingTime
            : 'Opening at 7 AM'}
        </p>
      </div>
    </div>
  );
};

export default BarInfo;
