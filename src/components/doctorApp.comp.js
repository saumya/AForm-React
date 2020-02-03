//
//
//
import React from 'react';

import Utils from '../utils/utils';
import ListTile1Comp from './listTile1.comp';

const DoctorAppComp = () => {

    const numNextDays = 7;
    const aDays = Utils.getNextSomeDays( numNextDays );
    //const aNumPatients = Utils.getSomeRandomNumbers( numNextDays );
    //
    const aMorningPatients = Utils.getSomeRandomNumbers(numNextDays);
    const aEveningPatients = Utils.getSomeRandomNumbers(numNextDays);
    
    const renderDays = ()=>{
        var aList = aDays.map(function(day,index){
            const nM = aMorningPatients[index];
            const nE = aEveningPatients[index];

            return (
                <li key={index}>
                    <ListTile1Comp numMorningPatients={nM} numEveningPatients={nE} sDate={day.toDateString()} />
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