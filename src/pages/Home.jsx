import React from 'react'
import './scss/home.scss'
import img1 from "../images/about1.png"
const Home = () => {
  return (
    <>
    <div className="home_sec1">
      <div className="home_boxes w-11/12 m-auto  md:flex gap-20">
      <div className="box1">
        <h1>Hi,I'm <span>Ulvi Esedzade</span></h1>
        <div className="text-animate">
        <h3>Frontend Developer</h3>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ut recusandae magni molestiae, sequi obcaecati. At nisi deserunt nulla ducimus, molestiae sapiente aperiam animi illo voluptatibus .
        </p>
        <div className="btn-box">
          <button className='btn'>click</button>
          <button className='btn'>click</button>
        </div>
      </div>
      <div className="box2 h-80">
        <img src={img1} alt="" />
      </div>
      </div>
    </div>
    </>
  )
}

export default Home