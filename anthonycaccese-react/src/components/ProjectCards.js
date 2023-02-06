import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProjectCards({ image, projectName, when, description }) {
  console.log(image)
  const pageName = "/projects/" + projectName.replace(/ /g, '')
  return (
    <Container fluid style={{ background: "#545454", color: "white", height: "100%", width: "100%", padding: "10" }}>
      <Link to={{ pathname: pageName, state: { image: image, projectName: projectName, when: when, description: description } }}>
        <Container fluid style={{ background: "#545454", color: "white", height: "100%", width: "50%" }}>
          <Image rounded src={"./images/" + image} alt={image} width="100%" />
          <h1>{projectName}</h1>
          <h3>{when}</h3>
        </Container>
      </Link>
    </Container>
  )
}

export default ProjectCards