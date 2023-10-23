import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import React, {useState, useEffect, useRef} from 'react';
import './LayoutConfigurationCard.css';
import ColoredLine from './ColoredLine';
import Legend from './Legend';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function LayoutConfigurationCard() {


const [displayArray, changeArray] = useState([
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
]);

function backgroundChooser(value){
  switch (value) {
    case 0:
      return 'open';
      
    case 1:
      return 'wall';
      
    case 2:
      return 'robot';
     
    case 3:
      return 'end';

    case 4:
      return 'path';

    default:
      return 'open';
      
  }
}

function changeArrayIndex(value, x, y){
  changeArray((prevArray) => {
    const newArray = [...prevArray]; // Create a copy of the original array
    newArray[x][y] = value; // Update the specific index
    return newArray;
  });}



return (
    
        <Card className='shadow-sm simulation-card'>
              <Card.Body>
              
                <Card.Title>Layout Configuration</Card.Title>
                
                  <ColoredLine width ={'100%'}/>
                
                <Legend/>
                
                

                <Container>
                  {displayArray.map((currentArr, i) => 
                  <Row>
                    {currentArr.map((currentItem, j)=>

                    <Col  className='type-picker'> 
                      
                      <Dropdown drop={"down-centered"}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" className={backgroundChooser(currentItem)}></Dropdown.Toggle>
                        <Dropdown.Menu >
                          <Dropdown.Item onClick={()=>{changeArrayIndex(0,i,j)}}><div className='open '></div></Dropdown.Item>
                          <Dropdown.Item onClick={()=>{changeArrayIndex(1,i,j)}}><div className='wall '></div></Dropdown.Item>
                          <Dropdown.Item onClick={()=>{changeArrayIndex(2,i,j)}}><div className='robot '></div></Dropdown.Item>
                          <Dropdown.Item onClick={()=>{changeArrayIndex(3,i,j)}}><div className='end '></div></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                    </Col>)}
                  </Row>
                  )}

                </Container>
                

                
              </Card.Body>
            </Card>

    
)
}
export default LayoutConfigurationCard;