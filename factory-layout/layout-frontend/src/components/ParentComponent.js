import React, { useState } from "react";
import Settings from "./Settings";
import LayoutConfigurationCard from "./LayoutConfigurationCard";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ParentComponent() {
  const [layoutName, setLayoutName] = useState("");
  const [facingDirection, setFacingDirection] = useState(null);

  const [displayArray, changeArray] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const handleLayoutNameChange = (e) => {
    setLayoutName(e.target.value);
  };

  const handleFacingDirectionChange = (direction) => {
    setFacingDirection(direction);
  };

  function changeArrayIndex(value, x, y) {
    changeArray((prevArray) => {
      const newArray = [...prevArray]; // Create a copy of the original array
      newArray[x][y] = value; // Update the specific index
      return newArray;
    });
  }

const handleSave = () => {
  const layoutData = {
    name: layoutName,
    direction: facingDirection,
    cells: displayArray.map((row, rowIndex) =>
      row.map((cellState, columnIndex) => ({
        column_index: columnIndex,
        row_index: rowIndex,
        cell_state: cellState,
      }))
    ),
  };

  fetch("/api/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(layoutData),
  })
    .then((response) => response.json())

    .then((data) => {
      console.log("Layout configuration saved:", data);
    })
    .catch((error) => {
      console.error("Error saving layout configuration:", error);
    });
};

  return (
    <Container fluid={true} className="main-container">
      <Row className="w100p display-flex">
        <Col sm={8}>
          <LayoutConfigurationCard onCellDataChange={changeArrayIndex} array={displayArray} />
        </Col>

        <Col sm={4}>
          <Settings
            onLayoutNameChange={handleLayoutNameChange}
            onFacingDirectionChange={handleFacingDirectionChange}
            facingDirection={facingDirection}
            layoutName={layoutName}
            onSave={handleSave}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ParentComponent;
