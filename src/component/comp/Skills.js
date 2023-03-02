import React from 'react'
import {
    Link,
} from "react-router-dom";
import './skills.css'
import java from '../../img/java.png';
import css from '../../img/css-3.png';
import html from '../../img/html-5.png';
import js from '../../img/java-script.png';
import php from '../../img/php.png';
import android from '../../img/android.png';
import react from '../../img/react.png';
import node from '../../img/node-js.png';
import mern from '../../img/mern.png';
import sql from '../../img/sql-server.png';
 
export default function Skills() {
    return (
        <>
            <section className='section'>
                <div className="skill">
                <h1>My Learnings</h1>
                <p>I learned so many things <br />and still learning</p>
                    <div className="skill_me">


                        <div className="imgDisplay">
                            <img src={java} alt="" />
                        </div>
                        <div className="imgDisplay">
                            <img src={html} alt="" />
                        </div>
                        <div className="imgDisplay">
                            <img src={css} alt="" />
                        </div>
                        <div className="imgDisplay">
                            <img src={js} alt="" />
                        </div>
                        <div className="imgDisplay">
                            <img src={react} alt="" />
                        </div>
                        <div className="imgDisplay">
                            <img src={node} alt="" />
                        </div>
                        <div className="imgDisplay">
                            <img src={php} alt="" />
                        </div>
                        <div className="imgDisplay">
                            <img src={sql} alt="" />
                        </div>
                        <div className="imgDisplay">
                            <img src={android} alt="" />
                        </div>
                        <div className="imgDisplay">
                            <img src={mern} alt="" />
                        </div>


                    </div>
                    <div className="back">
                        <Link className='link' to="/about"><i className="fa-solid fa-arrow-left"></i> About</Link>
                    </div>
                    {/* <div className="forward_project">
                        <Link className='link' to="/">MySkills <i className="fa-solid fa-arrow-right"></i></Link>
                    </div> */}
                </div>
            </section>
        </>
    )
}
