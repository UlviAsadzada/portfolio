import React, { useEffect } from 'react'
import './scss/home.scss'
import profil from'../images/profil2.jpg'
import CV from '../pdf/CV.pdf'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkTheme, setDefaultTheme } from '../redux/themeSlice'

const Home = () => {


// themeSlice

const theme=useSelector((state)=>state.theme)
const darkMode=useSelector((state)=>state.theme.darkMode)
const dispatch=useDispatch()

useEffect(()=>{
const savedTheme=localStorage.getItem("theme")
savedTheme==="dark"? dispatch(setDarkTheme()): dispatch(setDefaultTheme())
},[])



const handleThemeToggle=()=>{
  if(theme.darkMode){
    dispatch(setDefaultTheme())
    localStorage.setItem("theme","light")
  }
  else{
    dispatch(setDarkTheme())
    localStorage.setItem("theme","dark")
  }
}






  return (
    <>
    {/* home start */}
    <>

    
    <div className="home md:w-11/12 m-auto lg:w-4/6 ">
      <div className="home_boxes">

      
      <div className="home_top" data-aos="fade-down">
        <div className="img_box">
          <img src={profil} alt="" />
        </div>
        <div className="about_text">
          <h2>Ulvi Esedzade</h2>
          <p>Front-end</p>
        </div>
        <div className="about_navs flex justify-between">
        <i class="ri-instagram-line"/>
        <i class="ri-linkedin-box-line"/>
        <i class="ri-github-line"/>
        </div>
      </div>
      <div className="home_center">
        <div className="profil_about">
          <ul className='flex flex-wrap gap-1 justify-between text-center'>
            <li>
            <p>7</p> 
            <span>Years of Work</span>
            </li>
            <li>
            <p>+124</p> 
            <span>Completed Projects</span>
            </li>
            <li>
            <p>7</p> 
            <span>Satisfied Customers</span>
            </li>
          </ul>
       </div>

       <div className="profil_buttons">
        <a download="{}" href={CV}>
       <button class="botao">     
  <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mysvg"><g id="SVGRepo_bgCarrier" stroke-width="0">
    </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
       <g id="Interface / Download"> 
       <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#f1f1f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
       </path>
    </g> </g>
  </svg>

  <span class="texto">Download</span>
      </button>
      </a>
       </div>
      </div>
      
      </div>
      <label className='theme'>
      {
        darkMode?(
    <>
  <input onClick={()=>handleThemeToggle()} class="input" checked="checked" type="checkbox"/>
  <svg width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="icon icon-moon"><circle r="5" cy="12" cx="12"></circle><line y2="3" y1="1" x2="12" x1="12"></line><line y2="23" y1="21" x2="12" x1="12"></line><line y2="5.64" y1="4.22" x2="5.64" x1="4.22"></line><line y2="19.78" y1="18.36" x2="19.78" x1="18.36"></line><line y2="12" y1="12" x2="3" x1="1"></line><line y2="12" y1="12" x2="23" x1="21"></line><line y2="18.36" y1="19.78" x2="5.64" x1="4.22"></line><line y2="4.22" y1="5.64" x2="19.78" x1="18.36"></line></svg>

    </>
        ):(
          <>
          <input onClick={()=>handleThemeToggle()} class="input" checked="checked" type="checkbox"/>
         
          <svg viewBox="0 0 24 24" class="icon icon-moon"><path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path></svg>
            </>
        )
      }
     </label>
    </div>
    </>
    {/* home  finish*/}

    </>
  )
}

export default Home