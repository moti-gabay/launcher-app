import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLauncherById } from '../../api/api';

function LaunchterDatailsPage() {
  const { id } = useParams();
  const [launcher, setLauncher] = useState({});

  useEffect(() => {
    const getById = async () => {
      const data = await getLauncherById(id);
      setLauncher(data)
    }
    getById()
    console.log(launcher);

  }, [])

  return (
    <div>
      <h1>Launchter Datails</h1>
      <div>
        <p>Name: {launcher.name}</p>
        <p>City: {launcher.city}</p>
        <p>Rocket Type: {launcher.rocketType}</p>
        <p>Latitude: {launcher.latitude}</p>
        <p>Longitude: {launcher.longitude}</p>
      </div>
    </div>
  )
}

export default LaunchterDatailsPage
