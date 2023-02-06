import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

function ProjectPage() {
    const { location } = useLocation();
    const { image, projectName, when, description } = location.state;

    console.log(image)
    const pageName = projectName.replace(/ /g, '')
    return (
        <Container fluid style={{ background: "#545454", color: "white", height: "100%", width: "100%", padding: "10" }}>
            <Container fluid style={{ background: "#545454", color: "white", height: "100%", width: "50%" }}>
                <Image rounded src={"./images/" + image} alt={image} width="100%" />
                <h1>{projectName}</h1>
                <h3>{when}</h3>
            </Container>
        </Container>
    )
}

export default ProjectPage