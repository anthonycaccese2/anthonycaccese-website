import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HomeNavbar from '../components/Navbars/HomeNavbar'
import Aboutme from './Aboutme'
import Projects from './Projects'
import Contact from './Contact'

function Home() {
  return (
    <div className="App">
      <HomeNavbar></HomeNavbar>
      <header className="App-header" id="home">
        <h1>
          Currently Under Construction
        </h1>
        <p>
          This website was built in react
        </p>
      </header>
      <Aboutme></Aboutme>
      <Projects></Projects>
      <Contact></Contact>
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