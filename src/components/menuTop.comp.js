//
// menuTop.comp
//

import React from 'react';

const MenuComp = (props) => {
    return(
        <div className="container">
            <div className="columns is-mobile is-centered">
                <div className="column is-half">
                    <h1 className="title"> Demo </h1>
                    <h2 className="subtitle"> Experience the applications. </h2>
                    <div className="buttons">
                        <button className="button is-dark" onClick={props.onPatientApp}> Patient </button>
                        <button className="button is-dark" onClick={props.onDoctorApp}> Doctor </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuComp