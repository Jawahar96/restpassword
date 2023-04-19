import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { env } from './config';

function Userview() {
  const params = useParams()
  console.log(params);
  const [searchparams, setSearchParams] = useSearchParams()
  console.log(...searchparams);

  const [userData, setSetData] = useState({})

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {

      let user = await axios.get(`${env.api}/user/${params.id}`)
      setSetData(user.data)
    } catch (error) {

    }
  }


  return (

    <div>
      <h2>{userData.name}</h2>
      <h2>{userData.position}</h2>
      <h2>{userData.office}</h2>
      <h2>{userData.age}</h2>
      <h2>{userData.startdate}</h2>
      <h2>{userData.salary}</h2>
      <h2>{userData.company}</h2>
    </div>
  )
}

export default Userview