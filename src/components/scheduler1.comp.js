//
import React from 'react'


function Schedule1(){
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
								<select>
									<option>Dr. John Doe</option>
									<option>Dr. Alexander Fox</option>
									<option>Dr. Daniel Smith</option>
									<option>Dr. Christopher Jones</option>
									<option>Dr. William Davis</option>
								</select>
							</div>
						</div>
					</div>
					<br />
					<div className="field">
						<label className="label">Date</label>
						<div className="control">
							<div className="select is-large">
								<select>
									<option>22 Jan 2020</option>
									<option>23 Jan 2020</option>
									<option>24 Jan 2020</option>
									<option>25 Jan 2020</option>
									<option>26 Jan 2020</option>
									<option>27 Jan 2020</option>
									<option>28 Jan 2020</option>
								</select>
							</div>
						</div>
					</div>
					<br/>
					<div className="field">
						<div className="control">
							<button className="button is-large is-primary">Schedule</button>
						</div>
					</div>
					

				</div>
			</div>

		</div>

		);
}




export default Schedule1;