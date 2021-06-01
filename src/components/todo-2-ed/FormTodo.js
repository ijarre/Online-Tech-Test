import React from "react";
import { InputGroup, FormControl, Form, Row, Col, Button } from "react-bootstrap";

function FormTodo({ setInputText, setTodos, todos, inputText, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!inputText || /^\s*$/.test(inputText)) {
      return;
    }

    setTodos([...todos, { text: inputText, completed: false, id: Math.floor(Math.random() * 10000) }]);

    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <Row>
      <Col md={9}>
        <InputGroup>
          <FormControl value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
          <InputGroup.Append>
            <Button variant="primary" type="submit" onClick={submitTodoHandler}>
              +
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
      <Col md={3}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select" className="select" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </Row>
  );
}

export default FormTodo;
