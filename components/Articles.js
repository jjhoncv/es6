import React from 'react';
import ReactDOM from 'react-dom';

class Articles extends React.Component {
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
			<ul>
				{articles}
			</ul>
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

export default Articles