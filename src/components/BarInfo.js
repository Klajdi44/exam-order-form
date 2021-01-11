
const BarInfo = (props) => {
	return (
		<div className="barInfo">
			<div>
				<h1>Welcome to {props.apiData[1].bar.name === 'FooBar' ? 'Foobar' : 'FooBar'}</h1>
				<p>Here you can choose a wide variety of unique  mouthwatering beers.</p>
			</div>
			<div>
				<p>We are currently</p>
				<h2>  {new Date().getHours() > 21 ? 'Closed' : new Date().getHours() < 6 ? 'Closed' : 'Opened'}</h2>
			</div>
		</div>
	);
};

export default BarInfo;