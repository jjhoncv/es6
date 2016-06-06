import React from 'react';
import ReactDOM from 'react-dom';

class FrmAdd extends React.Component {
	constructor(){
		super();		
	}

	handleClick(e){
		e.preventDefault();
		//this.setState({action:"edit"})
	}

	onSubmitHandle(event){
		this.props.EventAdd(this, event)
	}

	render(){		
		/*var articles = this.renderArticles(this.props.data);*/
		return(
			<div className="row">
				<h4>Add Person</h4>
				<form onSubmit={(event)=>this.onSubmitHandle(event)}>
					<div className="form-group">
						<label for="firstName">First Name</label>
						<input type="text" className="form-control" ref="firstName" id="firstName" placeholder="First Name"/>
					</div>
					<div className="form-group">
						<label for="lastName">Last Name</label>
						<input type="text" className="form-control" ref="lastName" id="lastName" placeholder="Last Name"/>
					</div>
					<div className="form-group">
						<label for="emailAddress">Email address</label>
						<input type="email" className="form-control" ref="emailAddress" id="emailAddress" placeholder="Email"/>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		)
	}
}

export default FrmAdd