import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../../src/App.css'

export default function Header(){
    useEffect(() => {
    const body = document.querySelector('body')
    const header = document.createElement('header')

    body.appendChild(header)
    header.classList.add('App-header')

  })
//   return header
}