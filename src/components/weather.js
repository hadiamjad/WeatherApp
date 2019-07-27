import React from "react";


class Weather extends React.Component{
	render()
	{
		const x= `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`;
		return(
			<div>
			     <h2>The weather update for your region:</h2>
				{this.props.city && this.props.country && <p>Location: {this.props.city},{this.props.country}</p>}
			    {this.props.city && this.props.country &&<p>Temperature: {this.props.temperature}</p>}
				{this.props.city && this.props.country &&<p>Humidity: {this.props.humidity}</p>}
				{this.props.city && this.props.country &&<p>Condition: {this.props.description}</p>}
				{this.props.city && this.props.country &&<img src={x}></img>}
				{this.props.error && <p>{this.props.error}</p>}
			</div>
			);
	}
};

export default Weather;