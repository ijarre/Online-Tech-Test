import React, { Component } from "react";
import { Form, Card, Button, InputGroup, FormControl, Container } from "react-bootstrap";
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
