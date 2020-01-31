//
//
//
import React from 'react';

const DoctorAppComp = () => {
    return(
        <div className="container">
            <div className="columns is-mobile is-centered">
                <div className="column is-half">
                    <h1 className="title">My Work</h1>
                    <h2 className="subtitle">Shows business for a week.</h2>
                    <p>
                        Displays the Schedule for the day. How many patients have to be checked in a day.
                    </p>
                    <div>
                        <ul>
                            <li>
                                <div className="box">
                                    <div className="content">
                                            <p className="title">32</p>
                                            <p className="subtitle">Sat day</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box">
                                    <div className="content">
                                            <p className="title">32</p>
                                            <p className="subtitle">Sat day</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box">
                                    <div className="content">
                                            <p className="title">32</p>
                                            <p className="subtitle">Sat day</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorAppComp;