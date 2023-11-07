import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ColoredLine from "./ColoredLine";
import Dropdown from "react-bootstrap/Dropdown";
import "./Settings.css";
import Stack from "react-bootstrap/Stack";
import React, { useState } from "react";
import LayoutConfigurationCard from "./LayoutConfigurationCard";

function Settings() {
    const [layoutName, setLayoutName] = useState("");
    const [facingDirection, setFacingDirection] = useState(null);

  // Function to handle changes in layout name
  const handleLayoutNameChange = (e) => {
    setLayoutName(e.target.value);
  };

  // Function to handle changes in facing direction
  const handleFacingDirectionChange = (direction) => {
    setFacingDirection(direction);
  };

    const handleSaveLayout = () => {
      const layoutData = {
        layoutName,
        facingDirection,
        displayArray: [],
      };

      fetch("/api/layouts/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(layoutData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Layout saved successfully", data);
        })
        .catch((error) => {
          console.error("Error saving layout", error);
        });
    };

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
                <input type="text" className="btn btn-secondary" id="exampleInputEmail1" aria-describedby="layoutName" placeholder="Layout Name" value={layoutName} onChange={handleLayoutNameChange} />
              </div>


                
              <Dropdown>
                <Dropdown.Toggle variant="btn btn-secondary" id="dropdown-basic-button" >
                  {(facingDirection)?facingDirection:"Initial Facing Direction"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                  onClick={() => {
                     handleFacingDirectionChange("North");
                  }}
                  >North</Dropdown.Item>

                  <Dropdown.Item
                  onClick={() => {
                     handleFacingDirectionChange("East");
                                    }}
                  >East</Dropdown.Item>

                  <Dropdown.Item
                  onClick={() => {
                     handleFacingDirectionChange("South");
                                    }}
                  >South</Dropdown.Item>

                  <Dropdown.Item
                  onClick={() => {
                      handleFacingDirectionChange("West");
                                    }}
                  >West</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              </Stack>
            </form>
            <br/>
            <div className="save-cancel">
              <Button href="Dashboard" variant="dark">
                Cancel

              </Button>
              <button type="button" className="btn btn-primary" >
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