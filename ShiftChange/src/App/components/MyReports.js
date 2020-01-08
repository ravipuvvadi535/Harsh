import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import API from "../../api";

class MyReports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DailySafetyTopic: "",
      SafetyFlashes: ""
    };
  }
  // * Handle button click
  handleChange = event => {
    console.log(event.target.value);
    //this.setState({ [event.target.name]: event.target.value });
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // * Submit form to API. POST
  handleSubmit = event => {
    event.preventDefault();
    API.post(
      "shiftreport",
      {
        Id: "1",
        ReportName: "SF0112182019",
        DailySafetyTopic: this.refs.DailySafetyTopic.value,
        SafetyFlashes: this.refs.SafetyFlashes.value
      },
      { headers: { "Content-Type": "application/json" } }
    )
      .then(response => {
        //this.props.history.push("/");
        console.log(response.data);
      })
      .catch(err => console.log(err));
  };

  //* Get data from API. GET
  componentDidMount() {
    API.get("shiftreport/1").then(res => {
      const report = res.data;
      this.setState({ DailySafetyTopic: report.DailySafetyTopic, SafetyFlashes: report.SafetyFlashes });
      console.log(report);
    });
  }

  // * Render form
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Aux>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    Shift Safety
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Daily Safety</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="DailySafetyTopic"
                          ref="DailySafetyTopic"
                          value={this.state.DailySafetyTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>

                      <label htmlFor="basic-url">Safety Flashes</label>
                      <InputGroup className="mb-3">
                        <Form.Control as="textarea" rows="3" name="SafetyFlashes" ref="SafetyFlashes" value={this.state.SafetyFlashes} onChange={this.handleChange} />
                      </InputGroup>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    LMRAs (Last Minute Risk Assessment)
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Area and Job</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="AreaandJobTopic"
                          ref="AreaandJobTopic"
                          value={this.state.AreaandJobTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <label htmlFor="basic-url">Go-Arc safety</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="GoArcsafetyTopic"
                          ref="GoArcsafetyTopic"
                          value={this.state.GoArcsafetyTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    Handing over work
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Daily Activities</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="DailyActivitiesTopic"
                          ref="DailyActivitiesTopic"
                          value={this.state.DailyActivitiesTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    Completed
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Activities</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="CompletedActivitiesTopic"
                          ref="CompletedActivitiesTopic"
                          value={this.state.CompletedActivitiesTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    Next Shift
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Operator Instructions</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="OperatorInstructionsTopic"
                          ref="OperatorInstructionsTopic"
                          value={this.state.OperatorInstructionsTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    SOPs
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Marked up</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="MarkedupTopic"
                          ref="MarkedupTopic"
                          value={this.state.MarkedupTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    Operating Targets
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Console Operator Constraints</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="ConsoleOperatorConstraintsTopic"
                          ref="ConsoleOperatorConstraintsTopic"
                          value={this.state.ConsoleOperatorConstraintsTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <label htmlFor="basic-url">Production Supervisors Constraints</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="ProductionSupervisorsConstraintsTopic"
                          ref="ProductionSupervisorsConstraintsTopic"
                          value={this.state.ProductionSupervisorsConstraintsTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <label htmlFor="basic-url">Information to Outside Operators</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="InformationtoOutsideOperatorsTopic"
                          ref="InformationtoOutsideOperatorsTopic"
                          value={this.state.InformationtoOutsideOperatorsTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    Display Lab data / Sample results
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Pulled from Pi</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="PulledfromPiTopic"
                          ref="PulledfromPiTopic"
                          value={this.state.PulledfromPiTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <label htmlFor="basic-url">Pre-determined Ranges</label>
                      <Form.Group>
                        <Form.Check
                          custom
                          type="radio"
                          label="What is on spec?"
                          name="PredeterminedRanges"
                          id="PredeterminedRanges1"
                        />
                        <Form.Check
                          custom
                          type="radio"
                          label="What is trending off spec or nearly off spec?"
                          name="PredeterminedRanges"
                          id="PredeterminedRanges2"
                        />
                        <Form.Check
                          custom
                          type="radio"
                          label="Consider actual specifications vs. manufacturing specifications"
                          name="PredeterminedRanges"
                          id="PredeterminedRanges3"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">
                    Dual Pumps Running
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <label htmlFor="basic-url">Console Operator Constraints</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="ConsoleOperatorConstraintsTopic"
                          ref="ConsoleOperatorConstraintsTopic"
                          value={this.state.ConsoleOperatorConstraintsTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <label htmlFor="basic-url">Production Supervisors Constraints</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="ProductionSupervisorsConstraintsTopic"
                          ref="ProductionSupervisorsConstraintsTopic"
                          value={this.state.ProductionSupervisorsConstraintsTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <label htmlFor="basic-url">Information to Outside Operators</label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          as="textarea"
                          rows="3"
                          name="InformationtoOutsideOperatorsTopic"
                          ref="InformationtoOutsideOperatorsTopic"
                          value={this.state.InformationtoOutsideOperatorsTopic}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Button type="submit">Submit</Button>
                  <Button type="button">Cancel</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Aux>
      </Form>
    );
  }
}

export default MyReports;
