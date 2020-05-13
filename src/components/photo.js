import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Photo(){
    const [photoData, setPhotoData] = useState({})

    useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=5Ky4E0MEw0xJdYWNLCAVPvj8OuJUGgmOLdpjNjZC`)
    .then(response => {
        const nasaData = response.data
      console.log(nasaData)
      setPhotoData(nasaData)
      console.log(photoData)
      console.log(response.data.url)
      const body = document.querySelector('body')
      const h2 = document.createElement('h2')
      const img = document.createElement('img')

      body.appendChild(img)
      body.appendChild(h2)
      h2.text = nasaData.title
      console.log(nasaData.title)
      img.src = nasaData.url

    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
      <div>
          <h2></h2>
          <img></img>
      </div>
      
  )

}