//
import React from 'react';
//

const DoctorSelector = function(props){
	return(
			<div className="field">
				<label className="label">Doctor</label>
				<div className="control">
					<div className="select is-large">
						<select onChange={props.handleChange}>
							<option value="nothing">Choose Doctor</option>
							{
								props.aDoctors.map(function(item){
									var aa = <option key={item} value={item}>{item}</option>;
									return aa;
								})
							}
						</select>
					</div>
				</div>
			</div>
		);
}//DoctorSelector
export default DoctorSelector;