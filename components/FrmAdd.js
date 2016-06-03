import React from 'react';
import ReactDOM from 'react-dom';

class FrmAdd extends React.Component {
	constructor(){
		super();		
	}

	render(){		
		/*var articles = this.renderArticles(this.props.data);*/
		return(
			<div className="row">
				<h4>Add Person</h4>
				<form>
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
				</form>
			</div>
		)
	}
}

const Article = ({article}) => {
	return(
		<li key={article.id}>
			<p>{article.name}</p>
		</li>
	)
}

export default FrmAdd