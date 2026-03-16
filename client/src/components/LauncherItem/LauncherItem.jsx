import React from 'react'
import { Link } from 'react-router-dom'
import { useLauncherStore } from '../../store/store';

function LauncherItem(props) {
    const {deleteLuancher} = useLauncherStore()
    const { name,_id,rocketType,city,latitude,longitude } = props.info;

   
    return (
        <div>
            <p>Name: {name}</p>
            <p>rocketType: {rocketType}</p>
            <p>city: {city}</p>
            <p>latitude: {latitude}</p>
            <p>longitude: {longitude}</p>
            <Link to={`/LaunchterDatailsPage/${_id}`} >view detailes</Link>
            <button onClick={()=>deleteLuancher(_id)}>DELETE</button>
        </div>
    )
}

export default LauncherItem
