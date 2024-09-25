import React from 'react'

const Homepage=()=> {
  return (
    <div>
      <div className="relative w-full h-screen bg-gradient-to-t">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1669021454145-49146869b916?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwcnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-pink-300">Welcome</h1>
          <p className="text-xl text-pink-200 text-center mt-2">Full Stack Developer</p>
        </div>

        {/* Menu */}
        
      </div>
    </div>
    </div>
  )
}
 
export default Homepage;
