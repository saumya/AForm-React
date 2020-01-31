import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';

import TopMenuComp from "./components/menuTop.comp";
import Scheduler1 from './components/scheduler1.comp';

function App() {
	const [uiName,setUIName] = useState('noUI');

	const onPatientApp = function(){
		console.log('onPatientApp');
		setUIName('Patient');
	};
	const onDoctorApp = function(){
		console.log('onDoctorApp');
		setUIName('Doctor');
	};
	return (
		<div className="App">
			<TopMenuComp onPatientApp={onPatientApp} onDoctorApp={onDoctorApp}  />
			{ /* <Scheduler1 name="Demo | " msg='Date & Doctor'/>  */ }
			{
				(uiName !== 'noUI') 
				? 
				 (
					(uiName==='Doctor')
					?
					<div>Doctor</div>
					:
					<Scheduler1 name="Demo | " msg='Date & Doctor'/>
				 )
				: 
				<div>no ui</div> 
			} 

		</div>
	);
}

export default App;
