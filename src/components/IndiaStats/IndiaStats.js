import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class IndiaStats extends Component {
    constructor() {
        super();
        this.state = {
          statsOf: {},
          statsUf: {}
        }
    }

    componentDidMount() {
        axios.get(`http://theherdlabs.com/api/v1/overview`)
            .then(res => {
                const statsOf = res.data.data[0];
                const statsUf = res.data.data[1];
                this.setState({ statsOf, statsUf });
            }
        )
    }

    render() {
        return (
            <div id='IndiaStats' style={{marginTop:'30px', marginLeft:'20px', marginRight:'20px'}}>
                <Row>
                    <Col xs={8}>
                        <h3 style={{paddingLeft:'22px'}}>Corona Cases in India</h3>
                    </Col>
                    <Col xs={4} style={{float:'right', fontSize:'12px', textAlign:'right'}}>
                        <p>Official - <span style={{backgroundColor:'#009900', padding:'2px 8px', marginLeft:'5px'}}></span></p>
                        <p>Unofficial - <span style={{backgroundColor:'#ff6666', padding:'2px 8px', marginLeft:'5px'}}></span></p>
                    </Col>
                </Row>
                <Row>
                    {/* TOTAL CASES CARD */}
                    <Col xs={12} md={6} lg={6} style={{ marginBottom:'20px' }}>
                        <Card style={{cursor:'pointer', boxShadow:'2px 2px 4px 4px #d9d9d9'}}>
                            <Card.Body>
                                <Card.Title>Total Cases</Card.Title>
                                <div style={{display:'flex', width:'50%', float:'right',fontSize:'26px'}}>
                                    <div style={{color:'#009900', paddingRight:'10px'}}>
                                        {this.state.statsOf.total_cases}
                                    </div>
                                    <div>/</div>
                                    <div style={{color:'#ff6666', paddingLeft:'10px'}}>{this.state.statsUf.total_cases}</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* DEATH CARD */}
                    <Col xs={12} md={6} lg={6}>
                        <Card style={{cursor:'pointer', boxShadow:'2px 2px 4px 4px #d9d9d9'}}>
                            <Card.Body>
                                <Card.Title>Deaths</Card.Title>
                                <div style={{display:'flex', width:'50%', float:'right',fontSize:'26px'}}>
                                    <div style={{color:'#009900', paddingRight:'10px'}}>{this.state.statsOf.deaths}</div>
                                    <div>/</div>
                                    <div style={{color:'#ff6666', paddingLeft:'10px'}}>{this.state.statsUf.deaths}</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                {/* </Row>
                <Row style={{margin:0}}> */}
                    <Col xs={12} md={6} lg={3}>
                        <Card style={{cursor:'pointer', boxShadow:'2px 2px 4px 4px #d9d9d9'}}>
                            <Card.Body>
                                <Card.Title>Indian Cases</Card.Title>
                                <div style={{display:'flex', width:'50%', float:'right',fontSize:'26px'}}>
                                    <div style={{color:'#009900', paddingRight:'10px'}}>{this.state.statsOf.indian_cases}</div>
                                    <div>/</div>
                                    <div style={{color:'#ff6666', paddingLeft:'10px'}}>{this.state.statsUf.indian_cases}</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card style={{cursor:'pointer', boxShadow:'2px 2px 4px 4px #d9d9d9'}}>
                            <Card.Body>
                                <Card.Title>Foriegn Cases</Card.Title>
                                <div style={{display:'flex', width:'50%', float:'right',fontSize:'26px'}}>
                                    <div style={{color:'#009900', paddingRight:'10px'}}>{this.state.statsOf.foriegn_cases}</div>
                                    <div>/</div>
                                    <div style={{color:'#ff6666', paddingLeft:'10px'}}>{this.state.statsUf.foriegn_cases}</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card style={{cursor:'pointer', boxShadow:'2px 2px 4px 4px #d9d9d9'}}>
                            <Card.Body>
                                <Card.Title>Discharge Cases</Card.Title>
                                <div style={{display:'flex', width:'50%', float:'right',fontSize:'26px'}}>
                                    <div style={{color:'#009900', paddingRight:'10px'}}>{this.state.statsOf.discharged_cases}</div>
                                    <div>/</div>
                                    <div style={{color:'#ff6666', paddingLeft:'10px'}}>{this.state.statsUf.discharged_cases}</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card style={{cursor:'pointer', marginBottom:'100px', boxShadow:'2px 2px 4px 4px #d9d9d9'}}>
                            <Card.Body>
                                <Card.Title>Hospitalized Cases</Card.Title>
                                <div style={{display:'flex', width:'50%', float:'right',fontSize:'26px'}}>
                                    <div style={{color:'#009900', paddingRight:'10px'}}>{this.state.statsOf.total_cases - this.state.statsOf.discharged_cases}</div>
                                    <div>/</div>
                                    <div style={{color:'#ff6666', paddingLeft:'10px'}}>{this.state.statsUf.total_cases - this.state.statsUf.discharged_cases}</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default IndiaStats;

