//
//
//
import React from 'react';

import ListTileComp from './listTile1.comp';
import Utils from '../utils/utils';
import ListTile1Comp from './listTile1.comp';

const DoctorAppComp = () => {

    const aDays = Utils.getNextSomeDays(7);
    const aNumPatients = [24,35,68,21,30,20,46];
    
    const renderDays = ()=>{
        var aList = aDays.map(function(day,index){
            return (
                <li key={index}>
                    <ListTile1Comp numPatients={aNumPatients[index]} sDate={day.toDateString()} />
                </li>
            )
        })
        return aList;
    }

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
                            { renderDays() }
                        </ul>
                        
                    </div>
                    
                    <div> &nbsp; </div>
                    <div className="tile">
                        <div className="content">
                                <p className="title">You are doing good.</p>
                                <p className="subtitle">Seems you have a busy week ahead.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DoctorAppComp;