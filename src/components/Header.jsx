import React from 'react'

export default function Header() {
  return (
    <header className="py-8">
    <div className="container mx-auto">
        <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home">
                {/* <img src={Logo} alt="" /> */}
            </a>

            {/* Button */}
            <button className="btn btn-sm" >
            <a  href={'./morad_boumazough.pdf'} download > Downlownd CV</a>
            </button>
            
        </div>
    </div>
</header>
  )
}
