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
							{
								/*
								<option value="Dr. John Doe">Dr. John Doe</option>
								<option value="Dr. Alexander Fox">Dr. Alexander Fox</option>
								<option value="Dr. Daniel Smith">Dr. Daniel Smith</option>
								<option value="Dr. Christopher Jones">Dr. Christopher Jones</option>
								<option value="Dr. William Davis">Dr. William Davis</option>
								*/
							}
						</select>
					</div>
				</div>
			</div>
		);
}//DoctorSelector
export default DoctorSelector;