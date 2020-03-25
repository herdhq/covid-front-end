import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class StatewiseCases extends Component {
    constructor() {
        super();
        this.state = {
          states_data : [],
        }
    }

    componentDidMount() {
        axios.get(`https://theherdlabs.com/api/v1/getStateWiseCases`)
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
                <Row style={{marginBottom:'50px', marginTop:'20px'}}>
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
                                    <Card.Body style={{backgroundColor:'#343a40'}}>
                                        <Row>
                                            <Col xs={12} lg={12} style={{textAlign:'center', padding:'20px', backgroundColor:'#dfecdf'}}>
                                                Total Cases - {item.total_cases}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} lg={3} style={{textAlign:'center', padding:'20px', backgroundColor:'#bfd9bf'}}>
                                                Indian Cases - {item.indian_cases}
                                            </Col>
                                            <Col xs={6} lg={3} style={{textAlign:'center', padding:'20px', backgroundColor:'#9fc69f'}}>
                                                Foriegn Cases - {item.foriegn_cases}
                                            </Col>
                                            <Col xs={6} lg={3} style={{textAlign:'center', padding:'20px', backgroundColor:'#80b380'}}>
                                                Discharged Cases - {item.discharged_cases}
                                            </Col>
                                            <Col xs={6} lg={3} style={{textAlign:'center', padding:'20px', backgroundColor:'#609f60'}}>
                                                Deaths - {item.deaths}
                                            </Col>
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

