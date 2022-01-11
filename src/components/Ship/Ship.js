import React from 'react';

const Ship = (props) => {
    const{mission_name,launch_year,mission_patch_small}=props;
    return (
        <div className="Ship">
            <div className="shipName">
                <h4>{mission_name}</h4>
                <h4>{launch_year}</h4>
            </div>


            <div className="imgShip">
            <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    );
};

export default Ship;