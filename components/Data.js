import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import FrmAdd from './FrmAdd';

import data from "./../store/data.json";
import Article from "./../models/Article";

class Data extends React.Component {
	constructor(props){
		super(props);		
		this.state = {data: data, message:"", type:""};
	}
	
	handleEventAdd(thisFormAdd, event){
		event.preventDefault();		

		new Article({
			firstName: thisFormAdd.refs.firstName.value, 
			lastName : thisFormAdd.refs.lastName.value, 
			emailAddress: thisFormAdd.refs.emailAddress.value
		});
		
		this.setState({message: 'Sending...', type:"info"});
	}

	componentWillUpdate(){
		console.log("Update MyComponent...")
	}

	render(){
		if (this.state.type && this.state.message){
			var status = <p className={'bg-' + this.state.type}>
										{this.state.message}
									 </p>
		}
		return(			
			<div>
				{status}
				<FrmAdd EventAdd={this.handleEventAdd.bind(this)}/>
				<List data={this.state.data}/>			
			</div>
		)
	}
}

export default Data