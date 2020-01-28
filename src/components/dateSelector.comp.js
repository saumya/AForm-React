//
import React from 'react';
//
// props.sDates : An Array of Date Objects
//
const DateSelector = function(props){

	console.log('DateSelector : props :',props);
	console.log('DateSelector : props.nextNumDays :',props.nextNumDays);

	/*
	const allMonths = () => {
		return(['January','February','March','April','May','June','July','August', 'September', 'October', 'November', 'December']);
	}
	const allDaysOfAllMonths= () => {
		return([31,28,31,30,31,30,31,31,30,31,30,31]);
	}
	*/

	const getNextDay = (aDay,afterNumDays) => {
		//console.log( aDay.getDate(), ':', allMonths()[aDay.getMonth()] );
		var newDay = new Date();
		newDay.setDate( aDay.getDate() + afterNumDays );
		return newDay;
	}

	//
	// returns the next number of days
	//
	const getNextSomeDays = ( numDays ) => {
		//console.log('getNext7days');
		//console.log('------------------ getNext7days -------------');
		const today = new Date();
		//console.log( 'today', today );
		//console.log( allMonths() );
		//console.log( today.getDate(), ':', allMonths()[today.getMonth()] );
		var  i = 1;
		var allDays = [];
		for( i; i<=numDays; i++){
			allDays.push( getNextDay( today, i) );
			//console.log ( getNextDay(today,i) );
		}
		//console.log( allDays );
		return allDays;
	}

	const allDaysToRender = getNextSomeDays( props.nextNumDays );

	return(
			<div className="field">
				<label className="label">Date</label>
				<div className="control">
					<div className="select is-large">
						<select onChange={props.handleChange}>
							<option value="nothing">Choose Date</option>
							{
								//props.aDates.map(function(item,index){
								allDaysToRender.map(function(item,index){
									var aa = <option key={index} value={ item.toDateString() }>{ item.toDateString() }</option>;
									return aa
								})
							}
						</select>
					</div>
				</div>
			</div>
		);
}//DateSelector
export default DateSelector;
