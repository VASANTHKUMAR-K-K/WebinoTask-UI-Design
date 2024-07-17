import React from 'react'
import FoodImg from '../assets/FoodieLogo.png'


export default function Header() {
  return (
    <nav class="shadow navbar p-2 mb-5 bg-body-tertiary rounded">
    <div class="container-fluid">
    <img className='NavbarImg' src={FoodImg} alt="Food display" />
        <button class="btn btn-danger rounded-pill" type="submit">Join the Waitlist</button>
    </div>
  </nav>
  )
}
