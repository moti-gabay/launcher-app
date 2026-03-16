import React, { useEffect, useState } from 'react'
import { useLauncherStore } from '../../store/store.js'
import LauncherItem from '../../components/LauncherItem/LauncherItem.jsx';
import { rocketTypesOptions } from '../AddLauncherPage/AddLauncherPage.jsx';

function HomePage() {
  const { launchers, feachLaunchers } = useLauncherStore()
  const [filtered, setFiltered] = useState([])
  const [searchCity, setSearchCity] = useState('')
  const [searchRocket, setSearchRocket] = useState('')

  const makeFilter = () => {
    let fil = filtered.filter((l) => {
      return l.city.toLowerCase().includes(searchCity.toLocaleLowerCase() || l.rocketType.toLocaleLowerCase() === searchRocket.toLocaleLowerCase())})
    setFiltered(fil)
    console.log(fil);

  }


  useEffect(() => {
    feachLaunchers();
    setFiltered(launchers)
  }, [launchers])
  return (
    <div>
      <h1>HomePage</h1>
      <label >Search By City</label>
      <input onChange={(e) => setSearchCity(e.target.value)} type="text" />
      <label >
        Filter By Rockt Type
        <select onChange={(e) => setSearchRocket(e.target.value)}>
          {rocketTypesOptions.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </label>
      <button onClick={makeFilter}>Filter</button>
      <div>
        {filtered.map((l) => <LauncherItem key={l._id}
          info={l} />)}
      </div>
    </div>
  )
}

export default HomePage
