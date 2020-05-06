import React from 'react';<% if (processor === 'Sass') { %>
import './App.scss';<% } %><% if (processor === 'Less') { %>
import './App.less';<% } %><% if (processor === 'Stylus') { %>
import './App.styl';<% } %><% if (!processor) { %>
import './App.css';<% } %>

class App extends React.Component {
	render() {
		return (
			<div className="sidus-container">
				<h2>Welcome to Sidus!</h2>
			</div>
		)
	}
}

export default App;
