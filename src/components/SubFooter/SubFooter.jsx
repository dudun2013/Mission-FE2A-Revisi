import React, { useState } from "react";
import "./SubFooter.css";

export default function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <div className="container-subfooter">
      <div className="content">
        <div className="text">
          <h2>Mau Belajar Lebih Banyak?</h2>
          <p>
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan
            penawaran spesial dari program-program terbaik
            hariesok.id
          </p>
        </div>
        <div className="input-button">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="Masukkan Emailmu"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input"
          />
          <button type="submit" className="button">
            Subscribe
          </button>
          
        </form>
        </div>
      </div>
    </div>
  );
}

/*
import React from 'react'
import './SubFooter.css'


const SubFooter = () => {
  return (
    <div className='subfooter'>
        <div className='subfooter-contents'>
            <h2>Mau Belajar Lebih Banyak</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime omnis ullam eius unde laborum voluptatem iusto quis voluptates aperiam et a provident, cupiditate ut magni voluptate quisquam quam, accusamus officiis. </p>
            <button>View Video</button>
        </div>
    </div>
    )
}

export default SubFooter



import React from 'react'
import './subFooter.css'
const subFooter = () => {
  return (
    <div className='subfooter'>
        <div className='subfooter-contents'>
            <h2></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime omnis ullam eius unde laborum voluptatem iusto quis voluptates aperiam et a provident, cupiditate ut magni voluptate quisquam quam, accusamus officiis. </p>
            <button>View Video</button>
        </div>
    </div>
  )
}

export default subFooter








import React from 'react'
import './SubFooter.css'


const SubFooter = () => {
  return (
    <div className='subfooter'>
        <div className='subfooter-contents'>
            <h2>Mau Belajar Lebih Banyak</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime omnis ullam eius unde laborum voluptatem iusto quis voluptates aperiam et a provident, cupiditate ut magni voluptate quisquam quam, accusamus officiis. </p>
            <button>View Video</button>
        </div>
    </div>
    )
}

export default SubFooter




import React from 'react'
import './subFooter.css'
const subFooter = () => {
  return (
    <div className='subfooter'>
        <div className='subfooter-contents'>
            <h2></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime omnis ullam eius unde laborum voluptatem iusto quis voluptates aperiam et a provident, cupiditate ut magni voluptate quisquam quam, accusamus officiis. </p>
            <button>View Video</button>
        </div>
    </div>
  )
}

export default subFooter
*/