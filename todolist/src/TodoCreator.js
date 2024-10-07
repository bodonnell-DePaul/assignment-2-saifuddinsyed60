import { Form,Button, Row, Col  } from "react-bootstrap";
import {ToDoCreator1} from './TodoCreator.css'
function ToDoCreator() {
    return (
        <div class="form1">
        <Form>
            <Row className="mb-1">
                <Form.Group className="mb-3" controlId="ToDoItemInput">
                    <Form.Label>ToDo Item</Form.Label>
                    <Form.Control className="w-85" placeholder="Add todo item" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group controlId="dueDateField">
                    <Form.Label>Due Date</Form.Label> <br/>
                    <Form.Control type="date" className="w-85" id="dueDateField" />            
                </Form.Group>
            </Row>

            <Button variant="primary" className="w-100" type="submit">
                Add Todo
            </Button>
        </Form>
        </div>
    );
}
export default ToDoCreator;
