import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ColoredLine from './ColoredLine';
import Dropdown from 'react-bootstrap/Dropdown';
import './Settings.css';
import Stack from 'react-bootstrap/Stack';


function Settings({ currentPage = 'dashboard' }) {
  


return (
  <Card className='settings'>
   <div className="card">

  <div className="card-body">
  <Stack gap={3}>
    <h5 className="card-title">Settings</h5>
    <ColoredLine width={"100%"}/>

    <form>

  <div>
    <input type="name" className="btn btn-secondary" id="exampleInputEmail1" aria-describedby="layoutName" placeholder="Layout Name"/>
  </div>

  <p></p>

  <Dropdown>

      <Dropdown.Toggle variant="btn btn-secondary" id="dropdown-basic-button" >
        Initial Facing Direction
      </Dropdown.Toggle>

      <Dropdown.Menu>

      <Dropdown.Item>Facing North</Dropdown.Item>
        <Dropdown.Item>Facing East</Dropdown.Item>
        <Dropdown.Item>Facing South</Dropdown.Item>
        <Dropdown.Item>Facing West</Dropdown.Item>
      </Dropdown.Menu>

      </Dropdown>
  </form>
  <p></p>
  <div className="save-cancel" >
    <button type="button" className="btn btn-secondary">Cancel</button>
    <button type="button" className="btn btn-primary">Save</button>
  </div>
  </Stack>
  </div>
  
</div> 
  </Card>


  )

}

export default Settings;