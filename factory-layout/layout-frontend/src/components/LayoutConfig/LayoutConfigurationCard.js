import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import React, { useState, useEffect, useRef } from "react";
import "./LayoutConfigurationCard.css";
import ColoredLine from "../ColordLineComponent/ColoredLine.js";
import Legend from "../LegendComponent/Legend.js";
import Dropdown from "react-bootstrap/Dropdown";

import { useSelector, useDispatch } from "react-redux";
import { changeArrayIndex } from "./LayoutConfigurationCardSlice.js";

function LayoutConfigurationCard() {
  const array = useSelector((state) => state.LayoutConfigurationCard.displayArray);
  const dispatch = useDispatch();

  function backgroundChooser(value) {
    switch (value) {
      case 0:
        return "open";

      case 1:
        return "wall";

      case 2:
        return "robot";

      case 3:
        return "end";

      case 4:
        return "path";

      default:
        return "open";
    }
  }

  return (
    <Card className="shadow-sm simulation-card">
      <Card.Body>
        <Card.Title>Layout Configuration</Card.Title>

        <ColoredLine width={"100%"} />

        <Legend />

        <Container>
          {array.map((currentArr, i) => (
            <Row>
              {currentArr.map((currentItem, j) => (
                <Col className="type-picker">
                  <Dropdown drop={"down-centered"}>
                    <Dropdown.Toggle
                      data-testid={"dd-button" + j + i}
                      variant="secondary"
                      id="dropdown-basic"
                      className={backgroundChooser(currentItem)}
                    >
                      {" "}
                    </Dropdown.Toggle>
                    <Dropdown.Menu data-testid={"dd-menu" + j + i}>
                      <Dropdown.Item
                        onClick={() => {
                          dispatch(changeArrayIndex({ value: 0, x: i, y: j }));
                        }}
                      >
                        <div className="open "></div>
                      </Dropdown.Item>
                      <Dropdown.Item
                        data-testid={"wall"}
                        onClick={() => {
                          dispatch(changeArrayIndex({ value: 1, x: i, y: j }));
                        }}
                      >
                        <div className="wall "></div>
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          dispatch(changeArrayIndex({ value: 2, x: i, y: j }));
                        }}
                      >
                        <div className="robot "></div>
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          dispatch(changeArrayIndex({ value: 3, x: i, y: j }));
                        }}
                      >
                        <div className="end "></div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              ))}
            </Row>
          ))}
        </Container>
      </Card.Body>
    </Card>
  );
}
export default LayoutConfigurationCard;
