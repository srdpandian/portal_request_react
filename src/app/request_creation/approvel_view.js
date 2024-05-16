import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

import { Col, Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const ApprovalView = () => {
  const [reason, setReason] = useState("0");
  const [validated, setValidated] = useState(false);

  function handleChange(e) {
    console.log(e.target.value);
    setReason(e.target.value);
  }
  

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <Card>
        <Card.Header style={{ backgroundColor: "grey" }}>Approval</Card.Header>
        <Card.Body>
          <Table striped bordered>
            <tbody>
              <tr>
                <td
                  colSpan={5}
                  style={{
                    backgroundColor: "#00b7eb",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  View
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  Reference Number
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Mark
                </td>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Feasibility Study
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Jacob
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Requirement Type
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Project Title
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Project Department Name
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Tentative Start Date{" "}
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Current Process
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Tentative End Date
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Proposed Process{" "}
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Priority
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Select 4FP{" "}
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Actual Start Date
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Outcome
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Actual End Date
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Document
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
                <td
                  style={{
                    backgroundColor: "#ffe4e1",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Raised By{" "}
                </td>
                <td colSpan={2} style={{ backgroundColor: "white" }}>
                  Larry the Bird
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header style={{ backgroundColor: "grey" }}>History</Card.Header>
        <Card.Body>
          <Table striped bordered>
            <thead>
              <tr style={{ backgroundColor: "#ffe4cd" }}>
                <th>SL.No</th>
                <th>Comments</th>
                <th>Status</th>
                <th>Updated By</th>
                <th>Updated Date</th>
              </tr>
              <tr>
                <td>1</td>
                <td>testing</td>
                <td>
                  <center>
                    <span
                      className="label lable-primary"
                      style={{ backgroundColor: "skyblue", color: "white" }}
                    >
                      submitted
                    </span>
                  </center>
                </td>
                <td>ramesh</td>
                <td>2023-01-03</td>
              </tr>
            </thead>
          </Table>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col xs lg={2} style={{ marginTop: "10px" }}>
                Status:
              </Col>
              <Col xs lg={1}>
                <div class="form-check">
                  <input
                    style={{backgroundColor:'pink'}}
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="optradio"
                    value="1"
                    onChange={handleChange}
                  />
                  Yes<label class="form-check-label" for="radio1"></label>
                </div>
              </Col>
              <Col xs lg={1}>
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio2"
                    name="optradio"
                    value="2"
                    onChange={handleChange}
                  />
                  No<label class="form-check-label" for="radio2"></label>
                </div>
              </Col>
              <Col xs lg={2}>
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio3"
                    name="optradio"
                    value="3"
                    onChange={handleChange}
                  />
                  Re-Route<label class="form-check-label" for="radio3"></label>
                </div>
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col xs lg={3}>
                <Form.Group>Project Developer:</Form.Group>
              </Col>
              <Col xs lg={3}>
                <Form.Group>
                  <Form.Control as="select">
                    <option>Please Select developer</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Control>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col xs lg={3}>
                <Form.Group>Development Days:</Form.Group>
              </Col>
              <Col xs lg={3}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    id=""
                    type="text"
                    placeholder="name@example.com"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col xs lg={3}>
                <Form.Group>Tentative Start Date:</Form.Group>
              </Col>
              <Col xs lg={3}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="date" placeholder="name@example.com" />
                </Form.Group>
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col xs lg={3}>
                <Form.Group>Tentative End Date:</Form.Group>
              </Col>
              <Col xs lg={3}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="date" placeholder="name@example.com" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs lg={3}>
                <Form.Group>Comments:</Form.Group>
              </Col>
              <Col xs lg={3}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    required
                    as="textarea"
                    rows={4}
                    placeholder="name@example.com"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Submit form</Button>
          </Form>
        </Card.Body>
      </Card>
      
    </div>
  );
};
export default ApprovalView;
