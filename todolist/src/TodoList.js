import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Tab, Row, Col, Nav } from "react-bootstrap";
//import itemData from './itemList.json'
import {todos} from './todoItems.js'

function Scheduler() {

  const [items, setItems] = useState(todos);

  const handleBlur = (index, e) => {
    // Save the description when the contentEditable loses focus
    handleDescriptionChange(index, e.currentTarget.textContent);
  };

  const handleDescriptionChange = (index, newDescription) => {
    const updatedItems = [...items];
    updatedItems[index].description = newDescription;
    setItems(updatedItems);
  };

  const updateDate = (index, newDate) => {
    const updatedItems = [...items];
    updatedItems[index].dueDate = newDate;
    setItems(updatedItems);

  }

  const getColor = (index) => {
    const itemDate = new Date(items[index].dueDate);
    const currentDate = new Date();

    // Calculate the difference in days between the due date and today
    const timeDiff = (itemDate - currentDate) / (1000 * 60 * 60 * 24);
    //1000->miliseconds in 1 second,60->seconds in 1 minute,60->minutes in 1 hour,24->hours in one day

    // Determine the color variant based on the logic provided
    if (timeDiff > 7) {
      return "primary"; // Due date is more than 7 days away
    } else if (timeDiff < 7 && timeDiff >= 4) {
      return "success"; // Due date is within 7 days
    } else if (timeDiff < 4 && timeDiff >= 2) {
      return "warning"; // Due date is within 4 days
    } else if (timeDiff < 2) {
      return "danger"; // Due date is within 2 days or overdue
    } else {
      return "primary"; // Default case if no other criteria match
    }
  };
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <ListGroup>
          <Row>
            <Col sm={3}>
              <Nav className="flex-column">

                {items.map((item, index) => (
                  <ListGroup.Item key={index} eventKey={index} variant={getColor(index)} className="mb-2 w-100">
                    <Nav.Link eventKey={index} href={`#${index}`} >{item.title}</Nav.Link>
                  </ListGroup.Item>
                ))}

              </Nav>
            </Col>
            <Col sm={5}>

              <Tab.Content>
                {items.map((item, index) => (
                  <Tab.Pane eventKey={index}>

                    <div contentEditable onBlur={(e) => handleBlur(index, e)}>

                      {item.description}
                    </div>

                    <input type="date" id="test" value={item.dueDate} onChange={(e) => updateDate(index, e.target.value)} />
                  </Tab.Pane>


                ))}
              </Tab.Content>

            </Col>

          </Row>
        </ListGroup>
      </Tab.Container >
    </div >);

}
export default Scheduler;