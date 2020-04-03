import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ContagionGraph extends Component {
    render() {
        return (
            <div id='ContagionGraph' style={{marginLeft:'20px', marginRight:'20px'}}>
                <Row>
                    <Col xs={12}>
                        <h3 style={{paddingLeft:'5px'}}>Total Tests Performed</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{height:'750px'}}>
                            <div style={{height:'700px'}}>
                                <iframe src="https://ourworldindata.org/grapher/full-list-total-tests-for-covid-19" width={'100%'} height={'100%'}></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ContagionGraph