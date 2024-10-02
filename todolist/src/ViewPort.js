import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToDoItems from "./Scheduler";
import './ViewPort.css';
import ToDoCreator from "./ToDoCreator";

function ViewPort(){
    return (
        <Container>
            <Row>
                <Col><h1>Assignment 2: Syed's ToDo List   </h1></Col>
            </Row>
            <br></br> <br></br>
            <Row>
                <Col><ToDoCreator></ToDoCreator></Col>
                <Col><ToDoItems></ToDoItems></Col>
            </Row>
        </Container>
    );
}
export default ViewPort;