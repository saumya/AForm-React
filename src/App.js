import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';

import WelcomeComp from './components/welcome.comp';
import TopMenuComp from "./components/menuTop.comp";
import Scheduler1 from './components/scheduler1.comp';
import DoctorAppComp from './components/doctorApp.comp';

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
	//
	const renderChoosenUI = function(){
		var newComp = null;
		switch (uiName){
			case 'Patient':
				newComp = ( <Scheduler1 name="Demo | " msg='Date & Doctor'/> );
				break;
			case 'Doctor':
				newComp = ( <DoctorAppComp /> );
				break;
			default:
				newComp = ( <WelcomeComp /> );
		}
		return newComp;
	}
	//
	return (
		<div className="App">
			<TopMenuComp onPatientApp={onPatientApp} onDoctorApp={onDoctorApp}  />
			{ renderChoosenUI() } 

		</div>
	);
}

export default App;
