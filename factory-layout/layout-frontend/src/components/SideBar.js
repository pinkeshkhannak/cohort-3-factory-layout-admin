import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ColoredLine from './ColoredLine';
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillPieChartFill, BsTools } from "react-icons/bs";
import { RiRobot2Fill } from "react-icons/ri";
import './Sidebar.css';

function SideBar() {
  const [selectedButton, setSelectedButton] = useState('dashboard');

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const isButtonSelected = (buttonId) => selectedButton === buttonId;

  return (
    <Card className='side-bar' bg='dark' text='light'>
      <div>
        <Card.Title><RiRobot2Fill />Capstone Project</Card.Title>
        <ColoredLine color='white' />

        <Button
          onClick={() => handleButtonClick('dashboard')}
          variant={isButtonSelected('dashboard') ? 'primary' : 'dark'}>
        <MdSpaceDashboard viewBox="3 2 19 19" />Dashboard
        </Button>

        <Button
          onClick={() => handleButtonClick('simulation')}
          variant={isButtonSelected('simulation') ? 'primary' : 'dark'}>
          <BsTools />Simulation
        </Button>

        <Button
          onClick={() => handleButtonClick('reports')}
          variant={isButtonSelected('reports') ? 'primary' : 'dark'}>
          <BsFillPieChartFill />Reports
        </Button>
      </div>

      <div>
        <ColoredLine />
        <Button variant="dark">Sign Out</Button>
      </div>
    </Card>
  );
}

export default SideBar;

