import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import NextImg from './next.png'

class Notifications extends Component {
    constructor() {
        super();
        this.state = {
            notifications : [],
        }
    }

    componentDidMount() {
        axios.get(`https://theherdlabs.com/api/v1/notifications`)
            .then(res => {
                const notifications = res.data.data;
                this.setState({ notifications });
            }
        )
    }

    render() {
        return (
            <div id='Notifications' style={{marginTop:'30px', marginLeft:'20px', marginRight:'20px'}}>
                <Row>
                    <h3 style={{paddingLeft:'22px'}}>Government Notifications</h3>
                </Row>
                {this.state.notifications.map((item, index) => (
                    <Row>
                        <Col key={index} xs={12}>
                            <Alert variant='dark' onClick={() => (window.open(item.url))}>
                                <Row>
                                    <Col xs={9}>
                                        {item.date}
                                    </Col>
                                    
                                    <Col xs={3}>
                                        <img src={NextImg} alt={'expand'} height={'30px'}/>
                                    </Col>
                                    <Col xs={12}>
                                        {item.title}
                                    </Col>
                                </Row>
                            </Alert>
                        </Col>
                    </Row>
                ))}
            </div>
        );
    }
}

export default Notifications;

