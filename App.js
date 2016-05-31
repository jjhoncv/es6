import React from 'react';
import ReactDOM from 'react-dom';

import Articles from './components/Articles'

class List extends React.Component {
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
			<section>
				<Articles data={this.state.data}/>
			</section>
		)
	}
}

export default List