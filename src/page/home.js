import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SoalSatu from "../components/soal-1/soal-1";

import TodoApp from "../components/todo-2-ed/TodoApp";

function Home() {
  return (
    <>
      {
        <Container className="home-app">
          <h1>Online Test</h1>
          <Row>
            <Col>
              <Card className="logic">
                <Card.Body>
                  <Link to="/soal-satu">
                    {" "}
                    <b>SOAL LOGIC 1</b>
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
                    <b>TO-DO APPS</b>
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
