import React from 'react';
import  "./scss/header.scss";
const Header = () => {
  return (
    <>
    <header>
     <div className='header_boxes w-11/12 m-auto text-center py-3 flex justify-between'>
      <div className="header_logo">
          <a>Logo</a>
      </div>
      <div className="navs">
          <ul className='flex justify-between'>
               <li><a href="#" className='active'>Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Education</a></li>
               <li><a href="#">Skills</a></li>
               <li><a href="#">Contact</a></li>
          </ul>
      </div>
     </div>
    </header>
    </>
  )
}

export default Header