import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
	constructor(){
		super();		
	}

	renderArticles(articles){	
		if(articles.length > 0){
			return articles.map((article, index)=> (
				<Article key={index} article={article} />
			))
		}else return []
	}	

	render(){		
		var articles = this.renderArticles(this.props.data);
		return(
			<div className="row">
				<h4>List Persons</h4>
				<table className="table table-striped">
					<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email Address</th></tr></thead>
					<tbody>
						{articles}
					</tbody>
				</table>
			</div>
		)
	}
}

const Article = ({article}) => {
	return(
		<tr>
			<th>{article.id}</th>
			<td>{article.name}</td>
			<td>{article.name}</td>
			<td>{article.name}</td>
		</tr>
	)
}

export default List