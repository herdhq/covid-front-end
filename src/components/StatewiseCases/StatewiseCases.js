import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Tooltip } from 'react-bootstrap';

class StatewiseCases extends Component {
    constructor() {
        super();
        this.state = {
          states_data : [],
        }
    }

    componentDidMount() {
        axios.get(`http://theherdlabs.com/api/v1/getStateWiseCases`)
            .then(res => {
                const states_data = res.data.data;
                this.setState({ states_data });
            }
        )
    }

    render() {
        return (
            <div id='StatewiseCases'>
                <Row>
                    <Col xs={12}>
                        <h3 style={{paddingLeft:'22px'}}>State-Wise Cases</h3>
                    </Col>
                </Row>  
                <Row style={{marginBottom:'160px', marginTop:'20px'}}>
                    <Col xs={12}>
                        <Accordion defaultActiveKey={1}>
                            {this.state.states_data.map((item, index) => (
                                <Card key={index}>
                                    <Card.Header style={{width:'100%'}}>
                                        <div style={{width:'20%', float:'right', textAlign:'right', display: 'inline-flex', marginRight:'15px'}}>
                                            {item.status === 'affected'? (
                                                <span style={{color:'#ff6666'}}>{'AFFECTED'}</span>
                                            ) : (
                                                <span style={{color:'#009900'}}>{'UNAFFECTED'}</span>
                                            )}
                                        </div>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                            <div>{item.pretty_name}</div>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={index}>
                                    <Card.Body>
                                        <Row>
                                            <Col xs={8} style={{textAlign:'right', backgroundColor:'#dfecdf'}}>
                                                Total Cases
                                            </Col>
                                            <Col xs={4}>{item.total_cases}</Col>
                                        </Row>
                                        <Row>
                                            <Col xs={8} style={{textAlign:'right', backgroundColor:'#bfd9bf'}}>
                                                Indian Cases
                                            </Col>
                                            <Col xs={4}>{item.indian_cases}</Col>
                                        </Row>
                                        <Row>
                                            <Col xs={8} style={{textAlign:'right', backgroundColor:'#9fc69f'}}>
                                                Foriegn Cases
                                            </Col>
                                            <Col xs={4}>{item.foriegn_cases}</Col>
                                        </Row>
                                        <Row>
                                            <Col xs={8} style={{textAlign:'right', backgroundColor:'#80b380'}}>
                                                Discharged Cases
                                            </Col>
                                            <Col xs={4}>{item.discharged_cases}</Col>
                                        </Row>
                                        <Row>
                                            <Col xs={8} style={{textAlign:'right', backgroundColor:'#609f60'}}>
                                                Deaths
                                            </Col>
                                            <Col xs={4}>{item.deaths}</Col>
                                        </Row>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            ))}
                        </Accordion>
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default StatewiseCases;

