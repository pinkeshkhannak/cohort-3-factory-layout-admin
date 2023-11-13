import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ColoredLine from "./ColoredLine";
import Dropdown from "react-bootstrap/Dropdown";
import "./Settings.css";
import Stack from "react-bootstrap/Stack";
import React, { useState } from "react";

function Settings({ onLayoutNameChange, onFacingDirectionChange, facingDirection, layoutName, onSave }) {

function toCapital(word){
    return word.toLowerCase()[0].toUpperCase() + word.toLowerCase().slice(1)
}
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
                    type="text"
                    className="btn btn-secondary"
                    id="exampleInputEmail1"
                    aria-describedby="layoutName"
                    placeholder="Layout Name"
                    value={layoutName}
                    onChange={onLayoutNameChange}
                  />
                </div>

                <Dropdown>
                  <Dropdown.Toggle variant="btn btn-secondary" id="dropdown-basic-button">
                    {facingDirection ? toCapital(facingDirection) : "Initial Facing Direction"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        onFacingDirectionChange("NORTH");
                      }}
                    >
                      North
                    </Dropdown.Item>

                    <Dropdown.Item
                      onClick={() => {
                        onFacingDirectionChange("EAST");
                      }}
                    >
                      East
                    </Dropdown.Item>

                    <Dropdown.Item
                      onClick={() => {
                        onFacingDirectionChange("SOUTH");
                      }}
                    >
                      South
                    </Dropdown.Item>

                    <Dropdown.Item
                      onClick={() => {
                        onFacingDirectionChange("WEST");
                      }}
                    >
                      West
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Stack>
            </form>
            <br />
            <div className="save-cancel">
              <Button href="Dashboard" variant="dark">
                Cancel
              </Button>
              <button type="button" className="btn btn-primary" onClick={onSave}>
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
