import React, { useState } from 'react'
import { addNewLauncher } from '../../api/api.js';

export const rocketTypesOptions = ['Shahab3','Fetah110','Radwan','Kheibar'];
function AddLauncherPage() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [rocketType, setRocketType] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newLauncher = {
            name, city, rocketType, latitude, longitude
        }
        const res = await addNewLauncher(newLauncher);
        if(res.acknowledged){
            alert("launcher added successfuly")
        }
    }
    return (
        <div>
            <h1>Add New Launcher</h1>
            <form onSubmit={handleSubmit}>

                <label >
                    Name
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name...' />
                </label>
                <label >
                    City
                    <input onChange={(e) => setCity(e.target.value)} type="text" placeholder='City...' />
                </label>
                <label >
                    Rocket Type
                    <select onChange={(e) => setRocketType(e.target.value)}>
                       {rocketTypesOptions.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </label>
                <label >
                    Latitude
                    <input onChange={(e) => setLatitude(e.target.value)} type="number" placeholder='latitude...' />
                </label>
                <label >
                    Longitude
                    <input onChange={(e) => setLongitude(e.target.value)} type="number" placeholder='longitude...' />
                </label>

                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default AddLauncherPage
