//
//
//

import React from 'react'

const ListTile1Comp = (props) => {
    return(
        <div className="box">
            <div className="content">
                <p className="title">Patients {props.numPatients}</p>
                <p className="subtitle">{props.sDate}</p>
            </div>
        </div>
    )
}

export default ListTile1Comp;