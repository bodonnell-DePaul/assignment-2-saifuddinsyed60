import { Form,Button, Row, Col  } from "react-bootstrap";

function ToDoCreator() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="ToDoItemInput">
                    <Form.Label>ToDo Item</Form.Label>
                    <Form.Control placeholder="Add todo item" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group controlId="dueDateInput">
                    <Form.Label>Due Date</Form.Label>
                    <input type="date" id="dueDateField" />                 
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Add Todo
            </Button>
        </Form>
    );
}
export default ToDoCreator;