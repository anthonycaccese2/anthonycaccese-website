import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HomeNavbar from '../components/HomeNavbar'
import Aboutme from './Aboutme'
import Projects from './Projects'

function Home() {
  return (
    <div className="App">
        <HomeNavbar></HomeNavbar>
        <header className="App-header" id="home">
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
        </header>
        <Aboutme></Aboutme>
        <FeaturedProjects></FeaturedProjects>
    </div>
  )
}

function FeaturedProjects() {
    return (
        <div className="App">
        <div className="App-header" id='projects'>
        <style >
                {`
            .btn-primary {
            background-color: #38B6FF;
            color: white;
            }

            .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
            }
        `}
      </style>
            <h1>Projects</h1>
            <p>Check out all the projects <Link to="projects"><Button> Here</Button></Link></p>
            
        </div>
    </div>
    )
  }
export default Home