import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ColoredLine from './ColoredLine';
import Dropdown from 'react-bootstrap/Dropdown';
import './Settings.css';


function Settings({ currentPage = 'dashboard' }) {
  


return (
  <Card className='settings'>
   <div class="card">

  <div class="card-body">

    <h5 class="card-title">Settings</h5>
    <ColoredLine />
<p></p>
    <form>

  <div>
    <input type="name" class="btn btn-light" id="exampleInputEmail1" aria-describedby="layoutName" placeholder="Layout Name"/>
  </div>

  <p></p>

  <Dropdown>

      <Dropdown.Toggle variant="btn btn-light" id="dropdown-basic-button" >
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
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary">Cancel</button>
  </div>
  <div class="btn-group mr-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-primary">Save</button>
  </div>
  
  </div>
  
</div> 
  </Card>


  )

}

export default Settings;