import React from 'react';
import ReactDOM from 'react-dom';

class FrmEdit extends React.Component {
	constructor(){
		super();
		this.state = {}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();
		//this.setState({action:"edit"})
	}

	onSubmit(){

	}

	render(){				
		return(
			<div className="row">
				<h4>Edit Person</h4>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label for="firstName">First Name</label>
						<input type="text" className="form-control" id="firstName" placeholder="First Name"/>
					</div>
					<div className="form-group">
						<label for="lastName">Last Name</label>
						<input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
					</div>
					<div className="form-group">
						<label for="emailAddress">Email address</label>
						<input type="email" className="form-control" id="emailAddress" placeholder="Email"/>
					</div>
					<button type="submit" onClick={this.handleClick} className="btn btn-default">Submit</button>
				</form>
			</div>
		)
	}
}

export default FrmEdit