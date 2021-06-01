import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {
        <Container className="home-app">
          <h1>Projects</h1>
          <Row>
            <Col>
              <Card className="logic">
                <Card.Body>
                  <Link to="/lastnumber">
                    {" "}
                    <b>Guess the last number</b>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Link to="/todo">
                    <b>To-do Apps</b>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
}

export default Home;
