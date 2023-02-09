import React, { useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'
import csvFile from '../data/projects/projects.csv';
import { readString } from 'react-papaparse';
import ProjectCards from './ProjectCards';
import HomeNavbar from './Navbars/HomeNavbar';
import ProjectsNavbar from './Navbars/ProjectsNavbar';

function ProjectPage() {
    // const { location } = useLocation();
    const { id } = useParams();
    // const { image, projectName, when, description } = location.state;

    const [data, setData] = useState([]);
    // var data;
    useEffect(() => {
        (async () => {
            parseFile();
        })();
    }, []);

    const parseFile = () => {
        readString(csvFile, papaConfig);
    }
    const papaConfig = {
        complete: (results, file) => {
            console.log('Parsing complete:', results, file);
            // data = results.data;
            setData(results.data);
        },
        download: true,
        error: (error, file) => {
            console.log('Error while parsing:', error, file);
        },
    };

    // console.log(image)
    // const pageName = projectName.replace(/ /g, '')
    return (
        <div className="App">
            <ProjectsNavbar></ProjectsNavbar>
            {/* <Container fluid style={{ background: "#545454", color: "white", height: "100%", width: "100%" }}> */}
            {data.map((results) => {
                console.log("In put data ", results[2]);
                var projectName = results[2].replace(/ /g, '');
                // const pageName = results[2].replace(/ /g, '')
                if (projectName == id) {
                    var image = results[1]
                    projectName = results[2]
                    var when = results[3]
                    var description = results[4]
                    return (
                        // <Container fluid style={{ background: "#545454", color: "white", height: "100%", width: "100%", padding: "10" }}>
                        //  <Container fluid style={{ background: "#545454", color: "white", height: "100%", width: "50%" }}>
                        // </Container> 
                        <div className="App-projectPage" style={{ background: "#545454", color: "white", height: "100%", width: "100%", }}>
                            <Image rounded src={"../images/" + image} alt={image} width="35%" style={{ float: "left", }} />
                            <h1 style={{ fontSize: "100px" }}>{projectName}</h1>
                            <h3>{when}</h3>
                            <p style={{ fontSize: "30px", paddingTop: "30px", justifyContent: "" }}>{description}</p>
                        </div>
                        // </Container>
                    )
                } else {
                    // console.log("Didnt work: ", results[0], radios[radioValue - 1].name);
                }
            })}
            {
            /* <Container fluid style={{ background: "#545454", color: "white", height: "100%", width: "50%" }}>
                <Image rounded src={"./images/" + image} alt={image} width="100%" />
                <h1>{projectName}</h1>
                <h3>{when}</h3>
            </Container> */}
            {/* </Container > */}

        </div >
    )
}

export default ProjectPage