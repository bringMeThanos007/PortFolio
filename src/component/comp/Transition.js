import React, { useEffect } from 'react'
import '../comp/transition.css'
import two from '../../img/two.png';
import four from '../../img/four.png';
import five from '../../img/five.png';
import sun from '../../img/sun.png';
import { useLocation } from 'react-router-dom';

const Transition = () => {
  const code = "<coder>"
  const coder = "</coder>";
  let loc = useLocation();
  // useEffect(()=>{
  //     if(loc === "/"){
  //       const circle = document.querySelector('.circle');
  //       circle.style.display = "block"
  //       console.log(loc)
  //     }
  // },[])
  // all transition
  const play = () => {
    const sun = document.querySelector('#sun')
    const two = document.querySelector('#two')
    const four = document.querySelector('#four')
    const five = document.querySelector('#five')
    const text = document.querySelector('.text')
    const circle = document.querySelector('.circle')
    const end_circle = document.querySelector('.end-circle')
    const play = document.querySelector('.btn_play')
    play.style.transform = "translateY(-2000%)";
    circle.style.display = "block"
    end_circle.style.display = "block"
    text.style.transform = "translateX(0)"
    sun.style.top = "5%"
    two.style.transform = "translateY(10%)"
    four.style.transform = "translateY(12%)"
    five.style.transform = "translateY(10%)"
  }
  return (
    <>

      <section className='section'>
        <div className='tranistion' >
          <img src={two} alt="" id='two' />
          <img src={four} alt="" id='four' />
          <img src={five} alt="" id='five' />
          <img  src={sun} alt="" id='sun' />
          <h1 className='text'><small >{code}</small><br />
            Hi, I'm Aman Dalvi <br />
            <small>{coder}</small>
          </h1>
          <button className='btn_play' onClick={play}><i className="fa-solid fa-play"></i> PLAY</button>
        </div>
      </section>

    </>
  )
}

export default Transition
