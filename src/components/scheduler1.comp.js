//
import React, { useState, useEffect } from 'react'
//
import DoctorSelector from './doctorSelector.comp';
import DateSelector from './dateSelector.comp';

function Schedule1(props){
	//
	const [docName,setDocName] = useState('nothing');
	const [myDate,setMyDate] = useState('nothing');
	const [isScheduleFixed,setScheduleFixed] = useState(false);
	const [isAllFilled,setAllFormFilled] = useState(true);
	//
	const aDates = ['26 Jan 2020','27 Jan 2020','28 Jan 2020','29 Jan 2020','30 Jan 2020','31 Jan 2020','01 Feb 2020'];
	const aDoctors = ['Dr. John Doe', 'Dr. Alexander Fox', 'Dr. Daniel Smith', 'Dr. Christopher Jones', 'Dr. William Davis'];
	//
	//
	//useEffect( ()=>{  } );
	//useEffect(function(){});
	//
	useEffect( function(){
		console.log('useEffect');

		// hide the information message
		if(isScheduleFixed){
			setTimeout(function(){
				setScheduleFixed(false);
			},2000);
		}
		//
	} );// useEffect
	//
	const handleChangeDr = (event)=>{
		console.log('handleChangeDr');
		console.log( event.target.value );
		setDocName( event.target.value );

		setScheduleFixed(false);
	}
	const handleChangeDate = (event)=>{
		console.log('handleChangeDate');
		console.log( event.target.value );
		setMyDate( event.target.value );

		setScheduleFixed(false);
	}
	//
	const onScheduleClick = ()=>{
		console.log('onScheduleClick');
		console.log('docName',docName);
		console.log('myDate',myDate);
		if( (docName==='nothing') || (myDate==='nothing') ){
			setAllFormFilled(false);
		}else{
			setScheduleFixed(true);
			setAllFormFilled(true);
		}
	}
	//
	const showSuccessSchedule = ()=>{
		return(
			<article className="message is-success">
			  <div className="message-body">
			    Appointment fixed.
			  </div>
			</article>
			);
	}
	const showAlertToFillAllForms = ()=>{
		return(
			<article className="message is-danger">
			  <div className="message-body">
			    Please choose both of your preference.
			  </div>
			</article>
			);
	}

	//
	return(

		<div className="container">

			<div className="columns is-mobile is-centered">
				<div className="column is-half">

					<h1 className="title">Schedule</h1>
					<h2 className="subtitle">Fix a day with your doctor.</h2>
					<p>{props.name} {props.msg}</p>
					<DoctorSelector aDoctors={aDoctors} handleChange={handleChangeDr} />
					<br />
					<DateSelector aDates={aDates} handleChange={handleChangeDate} />
					<br/>
					<div className="field">
						<div className="control">
							<button className="button is-large is-primary" onClick={onScheduleClick}>Schedule</button>
						</div>
					</div>
					
				</div>
			</div>

			{ ( isScheduleFixed ? showSuccessSchedule() : null ) }
			{ ( isAllFilled ? null : showAlertToFillAllForms() ) }
			

		</div>

		);// return
}




export default Schedule1;