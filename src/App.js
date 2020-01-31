import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Scheduler1 from './components/scheduler1.comp';

function App() {
  return (
    <div className="App">

    	<div className="container">
    		<div className="columns is-mobile is-centered">
    			<div className="column is-half">
    				<h1 className="title"> Demo </h1>
    				<h2 className="subtitle"> Experience the applications. </h2>
    				<div className="buttons">
    					<button className="button is-dark"> Patient </button>
    					<button className="button is-dark"> Doctor </button>
    				</div>
    			</div>
    		</div>
    	</div>
	    
      <Scheduler1 name="Demo | " msg='Date & Doctor'/>
    </div>
  );
}

export default App;
