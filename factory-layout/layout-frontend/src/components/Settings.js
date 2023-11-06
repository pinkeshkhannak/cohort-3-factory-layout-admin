import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ColoredLine from "./ColoredLine";
import Dropdown from "react-bootstrap/Dropdown";
import "./Settings.css";
import Stack from "react-bootstrap/Stack";

function Settings({ currentPage = "dashboard" }) {
  return (
    <Card className="settings">
      <div className="card">
        <div className="card-body">
          <Stack gap={3}>
            <h5 className="card-title">Settings</h5>
            <ColoredLine width={"100%"} />

            <form>
              <Stack gap={3}>
                <div>
                  <input
                    type="name"
                    className="btn btn-secondary"
                    id="exampleInputEmail1"
                    aria-describedby="layoutName"
                    placeholder="Layout Name"
                  />
                </div>

                <Dropdown>
                  <Dropdown.Toggle variant="btn btn-secondary">Initial Facing Direction</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Facing North</Dropdown.Item>
                    <Dropdown.Item>Facing East</Dropdown.Item>
                    <Dropdown.Item>Facing South</Dropdown.Item>
                    <Dropdown.Item>Facing West</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Stack>
            </form>

            <div className="save-cancel">
              <Button href="Dashboard" variant="dark">
                Cancel
              </Button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </Stack>
        </div>
      </div>
    </Card>
  );
}

export default Settings;
