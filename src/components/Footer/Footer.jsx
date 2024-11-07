import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='alamat-footer'>
            <img src={assets.logo} alt='logo Perusahaan' style={{borderRadius: '10%', width: '150px', height: '40px'}} />
            <h4>Video Kencana Film</h4>
            <h5>Alamat  :</h5>
            <p>Jalan Encep Kartasasmita No 007 Cimahi</p>
            <p>Jawa barat  || No Kontak : 08112226506</p>
        </div>

        <div className="navbar-footer">
            <div className="navbar-category">
                <a href="#"><strong>Kategori</strong></a>
                <a href="#">Digital & Teknologi</a>
                <a href="#">Pemasaran</a>
                <a href="#">Management Bisnis</a>
                <a href="#">Pengembangan Diri</a>
                <a href="#">Desain</a>
            </div>
            <div className="navbar-perusahaan">
                
                <a href=""><strong>Perusahaan</strong></a>
                <a href="#">Tentang Kami</a>
                <a href="#">FAQ</a>
                <a href="#">Kebijakan Privasi</a>
                <a href="#">Ketentuan Layanan</a>
                <a href="#">Bantuan</a>
                
            </div>
            <div className="navbar-tentang">
                
                <a href=""><strong>Komunitas</strong></a>
                <a href="#">Tips Sukses</a>
                <a href="#">Blog</a>
                <a href="#">Pesan dan Saran</a>
                <a href="#">Pusat Bantuan</a>
                <a href="#">Sosial Media</a>
                
            </div>



        </div>

    </div>


)
}

export default Footer




/**

    <div className="footer">
        <div className="alamat-footer">
            <img align="left" src ="./logo.jpeg" alt="logo Perusahaan" style="border-radius:10%; width:50px;height:40px" />
            <h4 className="title-footer">Video Kencana Film </h4>
            <p className="alamat-footer">Alamat :<br>Jalan Encep Kartasasmita No 007 Cimahi</br>Jawa barat  || No Kontak : 08112226506</p>
        </div>




        <div className="navbar-footer">
            <div className="navbar-kategori">
                <ul>
                <a href="#">Kategori</a>
                <a href="#">Digital & Teknologi</a></li>
                <li><a href="#">Pemasaran</a></li>
                <li><a href="#">Management Bisnis</a></li>
                <li><a href="#">Pengembangan Diri</a></li>
                <li><a href="#">Desain</a></li>
                </ul>
            </div>
            <div className="navbar-perusahaan">
                <ul>
                <a href="#">Perusahaan</a>
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Kebijakan Privasi</a></li>
                <li><a href="#">Ketentuan Layanan</a></li>
                <li><a href="#">Bantuan</a></li>
                </ul>
            </div>
            <div className="navbar-tentang">
                <ul>
                <a href="#">Komunitas</a>
                <li><a href="#">Tips Sukses</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pesan dan Saran</a></li>
                <li><a href="#">Pusat Bantuan</a></li>
                <li><a href="#">Sosial Media</a></li>
                </ul>
            </div>
        </div>
</div>

*/