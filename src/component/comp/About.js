import React from 'react'
import './about.css'
import { Link } from "react-router-dom";
import cv from '../../img/CV.pdf';
import cod from '../../img/cod.png';
import sui from '../../img/sui.png';
import code from '../../img/code.png'
const About = () => {
    const openBack = "{";
    const closeBack = "}";
    return (
        <>
            <section className='section'>
                <div className="about">
                <h2>About Me</h2>
                    <div className="about_me">
                        <div className="cod">
                            <img src={code} alt=""  style={{height:"60px",width:"60px"}}/>
                        </div>
                        <div className="sui">
                            <img src={sui} alt=""  style={{height:"60px",width:"60px"}}/>
                        </div>
                        <div className="code">
                            <img src={cod} alt=""  style={{height:"60px",width:"60px"}}/>
                        </div>
                        <h2 className='openBack'>	{openBack} </h2>
                        <h6 className='about_para'>Hello. I'm Aman Dalvi and I'm currently an engineering student.
                            I am a hard working ,multi-talented
                            human and Bringing forth a motivated attitude.  <br />
                            <br />
                            Most of my time I design and
                            build digital products.
                            You can also call me a programmer, full-stack developer ,
                            UI, UX designer or by any other market defined function-title.
                            I'm also a multi-disciplinary maker  in wide range of UI,UX design  full-stack developer, Android Developer,
                            footballer, gamer and more. <br />
                            <br />
                            I don’t like to define myself by the work I’ve done. I define myself
                            by the work I want to do. Skills can be taught, personality is
                            inherent. I prefer to keep learning, continue challenging myself,
                            and do interesting things that matter. <br />
                            <br />
                             <a className='download' href={cv} download={cv}>Download résumé</a>
                        </h6>
                        <h2 className='closeBack'>{closeBack}</h2>
                        
                    </div>
                    
                    {/* <div className="back">
                        <Link className='link' to="/"><i class="fa-solid fa-backward"></i> Home</Link>
                    </div> */}
                    <div className="forward_project">
                        <Link className='link' to="/skills">MySkills <i class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
