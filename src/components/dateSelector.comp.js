//
import React from 'react';
//

const DateSelector = function(props){
	return(
			<div className="field">
				<label className="label">Date</label>
				<div className="control">
					<div className="select is-large">
						<select onChange={props.handleChange}>
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
		);
}//DateSelector
export default DateSelector;
