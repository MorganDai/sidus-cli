import React from 'react';
import { createStore } from 'redux';
import counter from './reducers';
<% if (processor === 'Sass') { %> import './App.scss';<% }
%><% if (processor === 'Less') { %> import './App.less';<% }
%><% if (processor === 'Stylus') { %> import './App.styl';<% }
%><% if (!processor) { %> import './App.css';<% } %>

const store = createStore(counter);

const App = () => {

	const [val, setVal] = React.useState(store.getState());
	const reGetVal = () => {
		setVal(store.getState());
	};

	return (
		<div className="sidus-container">
			<h2>Welcome to Sidus!</h2>
			<hr />
			<h3>{val}</h3>
			<button onClick={() => {store.dispatch({ type: 'INCREMENT' }); reGetVal()}}>点击增加</button>
			<button onClick={() => {store.dispatch({ type: 'DECREMENT' }); reGetVal()}}>点击增加</button>
		</div>
	)
}

export default App;
