import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import SoalSatu from "../components/soal-1/soal-1";

import TodoApp from "../components/todo-2-ed/TodoApp";

function Home() {
  return (
    <>
      {
        <Container className="home-app">
          {/* <Row>
            <Col>
              <Card className="logic">
                <Card.Body>
                  <b>SOAL LOGIC 1</b>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <b>TO-DO APPS</b>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
          <SoalSatu />

          <TodoApp />
        </Container>
      }
    </>
  );
}

export default Home;
