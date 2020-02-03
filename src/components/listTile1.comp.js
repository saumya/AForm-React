//
//
//

import React from 'react'

const ListTile1Comp = (props) => {
    return(
        <div className="box">
            <div className="content">
                <p className="title"> { props.numMorningPatients+props.numEveningPatients } </p>
                <p className="subtitle">{props.sDate}</p>
                
                <div className='is-size-5'> Morning <span className='has-text-grey-light is-size-3'>{props.numMorningPatients}</span> </div>
                <div className='is-size-5'> Evening <span className='has-text-grey-light is-size-3'>{props.numEveningPatients}</span> </div>
            </div>
        </div>
    )
}

export default ListTile1Comp;