import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./components/SideBarComponent/SideBar.js";
import Settings from "./components/SettingsCard/Settings.js";
import LayoutConfigurationCard from "./components/LayoutConfig/LayoutConfigurationCard.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const handleSave = () => {
    // const layoutData = {
    //   name: layoutName,
    //   direction: facingDirection,
    //   arrays: displayArray,
    // };
    // console.log(layoutData);
    // fetch("/api/layouts/save", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(layoutData),
    // }).then((response) => console.log(response));
  };
  return (
    <Container fluid={true} className="page">
      <style type="text/css">
        {`
        .btn-primary {
        
            --bs-btn-bg: #7749f8;
            --bs-btn-hover-bg: #6f44e4;
            --bs-btn-active-bg: #613dc5;

            --bs-btn-border-color: #7749f8 ;
            --bs-btn-hover-border-color: #6f44e4 ;
            --bs-btn-active-border-color: #613dc5 ;
        }

        .btn-secondary {
            --bs-btn-color: #6c757d;
            --bs-btn-hover-color: #6c757d;
            --bs-btn-active-color: #6c757d;

            --bs-btn-bg: #fff;
            --bs-btn-hover-bg: #fff;
            --bs-btn-active-bg: #fff;


            --bs-btn-border-color: #dee2e6;
            --bs-btn-hover-border-color: #6c757d;
            --bs-btn-active-border-color: #6c757d;

        }
        
        `}
      </style>

      <Row>
        <Col sm={2} style={{ padding: "0" }}>
          <SideBar currentPage="dashboard" />
        </Col>

        <Col sm={10}>
          <Container fluid={true} className="main-container">
            <Row className="w100p display-flex">
              <Col sm={8}>
                <LayoutConfigurationCard />
              </Col>

              <Col sm={4}>
                <Settings onSave={handleSave} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
