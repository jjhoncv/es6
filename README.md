#react-fundamentals
For install dependencies necesaries:

* sudo npm install react react-dom --save
* sudo npm install babel-loader babel-core babel-preset-es2015 babel-preset-react
* sudo npm install babel webpack-dev-server -g

For run project:

* npm start

States:

* Access to components through referencies (refs).
* En el caso de slider con ref="red", en cada update del componente, busca su referencia actual mediante "this.refs.red", y para acceder al input slider de el, lo hace "this.refs.red.inp"