import React from 'react'
import './project.css'
import img from '../../img/eight.jpg'


export default function Projects() {


  return (
    <>
      <section className='section'>
        <div className='projects'>
          <h2>My Projects</h2>
          <div className="scroll_projects">

            <div className="project_map portfolio">
              <h6>Portfolio</h6>
            </div>

            <div className="project_map news_nation">
              <h6>News</h6>
              <a href="https://github.com/bringMeThanos007/News_Nation" target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
            <div className="project_map food_nation">
              <h6>Food Recipe</h6>
              <a href="https://github.com/bringMeThanos007/Cuisine-Kitchen" target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
            <div className="project_map trip">
              <h6>Budget trip</h6>
            </div>
            <div className="project_map qulab">
              <h6>Frontend</h6>
              <a href="https://github.com/bringMeThanos007/Assignment" target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
            <div className="project_map miwak">
              <h6>Miwak-Android</h6>
            </div>
            <div className="project_map ttt">
              <h6>Tik Tak Toe -Android</h6>
            </div>
          </div>


        </div>
      </section>

    </>
  )
}
