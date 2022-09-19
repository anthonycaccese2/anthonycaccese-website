import React, { useState } from 'react';
import { Card, Container, Stack } from 'react-bootstrap'
import CustomNavbar from '../components/HomeNavbar'
import ProjectsNavbar from '../components/ProjectsNavbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Projects() {
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'VEMI', value: '1' },
        { name: 'School', value: '2' },
        { name: 'Swipe Pitch', value: '3' },
        { name: 'Personal', value: '4' },
      ];
  return (
    <div className='App'>
        <ProjectsNavbar></ProjectsNavbar>

        <div style={{background:"#545454", color:"white"}}>
            <h1>Projects</h1>
            <p>Here is a brief descriptor</p>
            <Container>
                <ButtonGroup style={{width:"100%"}}>
                    {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
            </Container>
        </div>
    </div>
  )
}

export default Projects