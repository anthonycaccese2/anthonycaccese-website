import React, { useEffect, useState } from 'react';
import { Card, Container, Stack } from 'react-bootstrap'
import ProjectsNavbar from '../components/Navbars/ProjectsNavbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import csvFile from '../data/projects/projects.csv';
import { readString } from 'react-papaparse';
import ProjectCards from '../components/ProjectCards';

function Projects() {
    const [radioValue, setRadioValue] = useState('1');
    const [data, setData] = useState([]);
    // var data;
    const radios = [
        { name: 'VEMI', value: '1' },
        { name: 'School', value: '2' },
        { name: 'Swipe Pitch', value: '3' },
        { name: 'Personal', value: '4' },
      ];
    useEffect( () => {
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
      
  return (
    <div className='App' style={{background:"#545454", color:"white"}}>
        <ProjectsNavbar></ProjectsNavbar>
        
        <ButtonGroup style={{width:"100%", backgroundColor: "#00B1E1" }}>
                {radios.map((radio, idx) => (
                <ToggleButton
                    variant="primary"
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    color = "#545454"
                    // style={{background:"#38B6FF", borderColor: "#38B6FF", pas color:"white"}}
                >
                    {radio.name}
                </ToggleButton>
                ))}
        </ButtonGroup>
                    
        <Stack className='App-projects' direction='verticle' gap={3}>
            {data.map((results) => {
                // console.log("In put data ",data);
                if (results[0] == radios[radioValue-1].name){
                    return (
                        <ProjectCards image={results[1]} projectName={results[2]} when={results[3]} description={results[4]}/>
                    )
                } else {
                    console.log("Didnt work: ", results[0], radios[radioValue-1].name);
                }
            })}
        </Stack>
    </div>
  )
}

export default Projects