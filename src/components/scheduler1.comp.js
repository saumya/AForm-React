//
import React, { useState, useEffect } from 'react'


function Schedule1(){
	//
	const [docName,setDocName] = useState('nothing');
	const [myDate,setMyDate] = useState('nothing');
	const [isScheduleFixed,setScheduleFixed] = useState(false);
	const [isAllFilled,setAllFormFilled] = useState(true);
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

					<div className="field">
						<label className="label">Doctor</label>
						<div className="control">
							<div className="select is-large">
								<select onChange={handleChangeDr}>
									<option value="nothing">Choose Doctor</option>
									<option value="Dr. John Doe">Dr. John Doe</option>
									<option value="Dr. Alexander Fox">Dr. Alexander Fox</option>
									<option value="Dr. Daniel Smith">Dr. Daniel Smith</option>
									<option value="Dr. Christopher Jones">Dr. Christopher Jones</option>
									<option value="Dr. William Davis">Dr. William Davis</option>
								</select>
							</div>
						</div>
					</div>
					<br />
					<div className="field">
						<label className="label">Date</label>
						<div className="control">
							<div className="select is-large">
								<select onChange={handleChangeDate}>
									<option value="nothing">Choose Date</option>
									<option value="22 Jan 2020">22 Jan 2020</option>
									<option value="23 Jan 2020">23 Jan 2020</option>
									<option value="24 Jan 2020">24 Jan 2020</option>
									<option value="25 Jan 2020">25 Jan 2020</option>
									<option value="26 Jan 2020">26 Jan 2020</option>
									<option value="27 Jan 2020">27 Jan 2020</option>
									<option value="28 Jan 2020">28 Jan 2020</option>
								</select>
							</div>
						</div>
					</div>
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