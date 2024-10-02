import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import itemData from './itemList.json'

function Scheduler() {

  const [items, setItems] = useState(itemData); 

  const handleBlur = (index, e) => {
    // Save the description when the contentEditable loses focus
    handleDescriptionChange(index, e.currentTarget.textContent);
  };

  const handleDescriptionChange = (index, newDescription) => {
    const updatedItems = [...items];
    updatedItems[index].description = newDescription;
    setItems(updatedItems);
  };

  const updateDate=(index,newDate)=> {
    const updatedItems=[...items];
    updatedItems[index].dueDate=newDate;
    setItems(updatedItems);

  }
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <ListGroup>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {items.map((item, index) => (
                  <Nav.Item>
                    <Nav.Link eventKey={index}>{item.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
         
              <Tab.Content>
                {items.map((item, index) => (
                  <Tab.Pane eventKey={index}>
                    <ListGroup.Item eventKey={index} variant="primary">
                    <div contentEditable onBlur={(e) => handleBlur(index, e)}>
                  
                      {item.description}
                      </div>
                    </ListGroup.Item>
                    <input type="date" id="test" value={item.dueDate} onChange={(e)=>updateDate(index,e.target.value)} />
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