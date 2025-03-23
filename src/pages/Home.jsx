import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bg from '../assets/bg.jpg'


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen flex justify-center items-center bg-cover bg-center" 
           style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 custom-blur"></div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to SweetDiv</h1>
          <p className="text-lg ">Empower your sweets business with a custom website and app,
            offering no commission fees,<br/> full control over your customer data,
            and a seamless ordering experience. Let your customers enjoy their favorite sweets with ease,<br/>
            while you manage everything on your terms.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
