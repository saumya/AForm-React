//
import React from 'react';
//
// props.sDates : An Array of Date Objects
//
const DateSelector = function(props){
	return(
			<div className="field">
				<label className="label">Date</label>
				<div className="control">
					<div className="select is-large">
						<select onChange={props.handleChange}>
							<option value="nothing">Choose Date</option>
							{
								props.aDates.map(function(item,index){
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
