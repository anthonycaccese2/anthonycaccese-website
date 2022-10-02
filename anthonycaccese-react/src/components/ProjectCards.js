import React from 'react'
import { Container, Image } from 'react-bootstrap'

function ProjectCards({ image, projectName, when, description}) {

  return (
   <Container fluid style={{background:"#545454", color:"white", height: "100%", width: "100%"}}>
        <Image rounded src={"../data/projects"+image} />
        <h1>{projectName}</h1>
        <h3>asfds</h3>
        <h3>{when}</h3>
        <p>{description}</p>
   </Container>
  )
}

export default ProjectCards