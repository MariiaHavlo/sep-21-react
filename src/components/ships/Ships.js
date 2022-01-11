import React, {useEffect, useState} from 'react';
import Ship from "../Ship/Ship";

const Ships = () => {
    const[ships,setShips]=useState([]);


    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(arrSips=>arrSips.json())
            .then(arrSips=>{
                const shipFilter = arrSips.filter(item=>item.launch_year!=='2020');
                setShips(shipFilter)
                console.log(shipFilter)
            })

    },[])

    return (
        <div>
            {ships.map(arrSips=><Ship key={arrSips.name} mission_name={arrSips.mission_name} launch_year={arrSips.launch_year} mission_patch_small={arrSips.links.mission_patch_small} />)}
        </div>
    );
};

export default Ships;