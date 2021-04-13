import React, { Component } from "react";
import { Form, Card, Button } from "react-bootstrap";
import logicSoal from "../components/logicSoal";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
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
        <Form onSubmit={this.handleOutput}>
          <Form.Control type="text" value={this.state.nomorKartu} onChange={this.handleChange} placeholder="input"></Form.Control>
          <Card>
            <Card.Body>{this.state.jawaban ? `output: ${this.state.output}` : "output:"}</Card.Body>
          </Card>
          <Button type="submit">SUBMIT</Button>
        </Form>
      </>
    );
  }
}

export default SoalSatu;
