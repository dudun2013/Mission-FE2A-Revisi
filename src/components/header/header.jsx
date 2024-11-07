import React from 'react'
import  './header.css'
import { assets } from '../../assets/assets'


const Header = () => {
  return (
    <main className='header-top'>
        <div className='container'>
            <div className='logo'>
                <img src={assets.logo} alt='' />
            </div>
            <div className='abi'>
                <img src={assets.abi} alt='' />
            </div>
        </div>
        <div className='header'>
            <div className='header-contents'>
                <h4>Video Learning Platform</h4>
                <h1>Video Belajar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima optio dolorem facilis non possimus! Doloremque ipsam quae placeat, laudantium ducimus at sed labore rerum dolorum, libero incidunt cupiditate repudiandae voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum accusamus, ab, reprehenderit explicabo consequatur et eligendi blanditiis aspernatur ea officiis tenetur ut non quam quibusdam est minima voluptate. Harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum accusamus, ab, reprehenderit explicabo consequatur et eligendi blanditiis aspernatur ea officiis tenetur ut non quam quibusdam est minima voluptate. Harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum accusamus, ab, reprehenderit explicabo consequatur et eligendi blanditiis aspernatur ea officiis tenetur ut non quam quibusdam est minima voluptate. Harum...</p>
            </div>
            <div className='picture'>
                <img src={assets.phone} alt='Phone'/>
            </div>
        </div>
    </main>
  )
}

export default Header