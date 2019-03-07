

import React from 'react'


const Display = (props) =>{
    return (
        <div >
            <p data-testid = 'balls' >Balls: {props.balls}</p>
            <p data-testid = 'strikes'>Strikes: {props.strikes}</p>
        </div>
    )
}

export default Display