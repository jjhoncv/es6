import data from "./../store/data.json";
import Articles from "./Articles";
import fs from 'fs';

class Article {
	constructor(article) {
		this.urlFile = "./../store/data.json";
		this.articles = data;
		this.firstName = article.firstName;
		this.lastName = article.lastName;
		this.emailAddress = article.emailAddress;
		this.add();
	}

	add(){
		this.articles.push({
			id 	 		: this.articles.length,
			name 	  : this.firstName,
			lastname: this.lastName,
			email 	: this.emailAddress
		})
		this.save();
	}

	save(){
		console.log(fs);		
		/*fs.writeFile(this.urlFile, "a", function (err) {
			if (err) return console.log(err);
			console.log('update file');
		});		*/
	}
}

export default Article