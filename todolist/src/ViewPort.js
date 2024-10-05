import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoList from "./TodoList";
import './ViewPort.css';
import ToDoCreator from "./ToDoCreator";

function ViewPort(){
    return (
        <Container>
            <Row>
                <Col><h1>Assignment 2: Syed's ToDo List   </h1></Col>
            </Row>
            <br/><br/>
            <Row>
                <Col xs={4}><ToDoCreator></ToDoCreator></Col>
                <Col xs={8}><TodoList></TodoList></Col>
            </Row>
        </Container>
    );
}
export default ViewPort;