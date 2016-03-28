require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react'
import ReactDOM from 'react-dom'

export class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return ( <div>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"))
