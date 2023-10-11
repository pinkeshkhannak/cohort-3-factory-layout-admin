import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ColoredLine from './ColoredLine';
import { MdSpaceDashboard ,MdOutlineRule  } from "react-icons/md";
import { BsFillPieChartFill, BsTools } from "react-icons/bs";
import {RiRobot2Fill} from "react-icons/ri"
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

import './Sidebar.css'


import React, {useState, useEffect, useRef} from 'react';
function SideBar() {






return (
    
  <Card className='side-bar ' bg='dark' text='light' >
    <div>
      <Card.Title><RiRobot2Fill/>&#20;&#20;Capstone Project</Card.Title>
      <ColoredLine color='white'/>
      <Button ><MdSpaceDashboard/>&#20;&#20;Dashboard</Button>
      <Button variant="dark"><BsTools/>&#20;&#20;Simulation</Button>
      <Button variant="dark"><BsFillPieChartFill/>&#20;&#20;Reports</Button>
    </div>

    <div>
      <ColoredLine color='white'/>
      <Button variant="dark" >Signout</Button>
    </div>
  </Card>

    
)
}
export default SideBar;