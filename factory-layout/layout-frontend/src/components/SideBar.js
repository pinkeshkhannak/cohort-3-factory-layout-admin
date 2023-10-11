import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ColoredLine from './ColoredLine';
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillPieChartFill, BsTools } from "react-icons/bs";
import { RiRobot2Fill } from "react-icons/ri";

import './Sidebar.css';

import React from 'react';

function SideBar() {
  return (
    <Card className='side-bar' bg='dark' text='light'>
      <div>
        <Card.Title><RiRobot2Fill style={{fontSize: '20px' }}/> Capstone Project</Card.Title>
        <ColoredLine color='white' />
        <Button className="icon-button"><MdSpaceDashboard style={{ fontSize: '25px' }} />Dashboard</Button>
        <Button className="icon-button"><BsFillPieChartFill style={{ fontSize: '25px' }} />Reports</Button>
        <Button className="icon-button"><BsTools style={{ fontSize: '25px' }} />Simulation</Button>
      </div>

      <div>
        <ColoredLine color='white' />
        <Button variant="dark">Sign Out</Button>
      </div>
    </Card>
  );
}

export default SideBar;
