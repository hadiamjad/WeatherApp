import React from "react";


class Form extends React.Component{
	render()
	{
		return(
			<div>
			    <form onSubmit={this.props.getWeather}>
			    <input type="text" className="form-group form-control" name="city" placeholder="City" />
			    <input type="text" className="form-group log-status form-control" name="country" placeholder="Country" />
			    <button className="log-btn">Search</button>
			    </form>
		    </div>
			);
	}
};

export default Form;