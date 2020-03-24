import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

class ContagionGraph extends Component {
    render() {
        return (
            <div id='ContagionGraph' style={{marginTop:'30px', marginLeft:'20px', marginRight:'20px'}}>
                <Row>
                    <Col xs={12}></Col>
                </Row>
                {/* <div style={{height:'1300px'}}>
                {'Contagion Graph'}
                <div style={{height:'700px'}}>
                    <iframe src='https://cluster.covid19india.org/' width={'100%'} height={'100%'}></iframe>
                </div>
                </div> */}
            </div>
        );
    }
}