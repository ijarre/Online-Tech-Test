import React, { Component } from "react";
import { Form, Card, Button, InputGroup, FormControl, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logicSoal from "./logicSoal";

export class SoalSatu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomorKartu: "",
      jawaban: false,
      output: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      nomorKartu: event.target.value,
    });
  };

  handleOutput = (e) => {
    e.preventDefault();
    this.setState({
      jawaban: !this.state.jawaban,
      output: logicSoal(this.state.nomorKartu),
    });
  };

  render() {
    return (
      <>
        <Container>
          <Card className="soalSatu-app">
            <Card.Body class="soalSatu-comp">
              <div className="home" id="home-satu">
                <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                  </svg>
                </Link>
              </div>
              <h1>Nomor Terakhir Kartu Kredit</h1>
              <Form onSubmit={this.handleOutput}>
                <InputGroup className="mb-3">
                  <FormControl type="text" value={this.state.nomorKartu} onChange={this.handleChange} placeholder="input" />

                  <InputGroup.Append>
                    <Button type="submit" variant="outline-secondary">
                      SUBMIT
                    </Button>
                  </InputGroup.Append>
                </InputGroup>

                <Form.Group>
                  <Card>
                    <Card.Body>{this.state.jawaban ? `output: ${this.state.output}` : "output:"}</Card.Body>
                  </Card>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default SoalSatu;
