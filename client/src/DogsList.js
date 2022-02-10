import axios from 'axios'
import React, { useState, useEffect } from 'react'

function DogsList() {
  const [dogsList, setDogsList] = useState([])
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios('http://localhost:3001/dogs')
      setDogsList(data)
    }

    fetchData()
  }, [])

  return (
    <section>
      <h1>Friends list </h1>
      <ul>
        {dogsList.map(dog => (
          <li>
            {dog.name}, {dog.breed} {dog.sex}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DogsList
