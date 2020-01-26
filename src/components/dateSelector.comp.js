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
							{
								props.aDates.map(function(item){
									var aa = <option key={item} value={item}>{item}</option>;
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
