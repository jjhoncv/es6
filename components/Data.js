import React from 'react';
import ReactDOM from 'react-dom';

import List from './components/List';
import FrmAdd from './components/FrmAdd';

class Data extends React.Component {
	constructor(){
		super();
		this.url = "http://www.json-generator.com/api/json/get/bGEnWJASsy?indent=2";
		this.state = {data: []};
	}
	
  componentDidMount() {
		this.loadAjax();
	}

	loadAjax(){		
		fetch(this.url).then((response) => response.json()).then((persons) => {
			this.setState({data: persons});
		})
	}

	render(){
		return(			
			<FrmAdd/>
			<List data={this.state.data}/>			
		)
	}
}

export default Data