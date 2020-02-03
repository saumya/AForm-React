//
//
//

import React from 'react';
//
// Morning / Evening
//
const SessionSelectorComp = (props) => {
    return(
        <div className="field">
            <label className="label">When? Morning / Evening</label>
            <div className="control">
                <div className="select is-large">
                    <select onChange={props.handleChange}>
                        <option value="nothing">Choose Timing</option>
                        <option value="morning">Morning</option>
                        <option value="evening">Evening</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
//
export default SessionSelectorComp;
