import React from "react";

import Title from "./components/title.js"
import Form from "./components/form.js"
import Weather from "./components/weather.js"

const API_KEY = "95d3ba3bce96beb2024cfd9b4e22c434";


class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		icon: undefined,
		error: undefined
	}
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();
		if (country && city && data.cod !== "404"){
			console.log(data);
		    this.setState(
			{
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				icon: data.weather[0].icon,
				error: ""
			});
		}else{
			this.setState(
			{
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				icon: undefined,
				error: "Please enter the correct input values."
			});

		}
	}
	render(){
		return(
		
		<div>
			<div className="login-form">
				<h1><Title /></h1>
				<div>
					<Form getWeather={this.getWeather} />	
				</div>
			</div>
			<div className="output-form">
			<Weather  
				temperature={this.state.temperature}
				city={this.state.city}
				country={this.state.country}
				humidity={this.state.humidity}
				description={this.state.description}
				icon={this.state.icon}
				error={this.state.error}
			/>
			</div>
		</div>
	 );
	}
};

export default App;





