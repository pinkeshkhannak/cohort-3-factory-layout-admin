import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ColoredLine from './ColoredLine';
import { MdSpaceDashboard   } from "react-icons/md";
import { BsFillPieChartFill, BsTools } from "react-icons/bs";
import {RiRobot2Fill} from "react-icons/ri"


import './Sidebar.css'


import React, {useState, useEffect, useRef} from 'react';
function SideBar() {






return (

  <Card className='side-bar ' bg='dark' text='light' >
    <div>
      <Card.Title><RiRobot2Fill/>Capstone Project</Card.Title>
      <ColoredLine color='white'/>
      <Button ><MdSpaceDashboard viewBox="3 2 19 19" />Dashboard</Button>
      <Button  variant="dark"><BsTools/>Simulation</Button>
      <Button  variant="dark"><BsFillPieChartFill/>Reports</Button>
    </div>

    <div>
      <ColoredLine />
      <Button variant="dark" >Sign Out</Button>
    </div>
  </Card>


)
}
export default SideBar;
