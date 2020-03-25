import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

class ContagionGraph extends Component {
    constructor() {
        super();
        this.state = {
          graph_data: {},
        }
    }

    componentDidMount() {
        axios.get(`https://theherdlabs.com/api/v1/graph`)
            .then(res => {
                const graph_data = res.data.data;
                this.setState({ graph_data, graph_data });
                console.log(graph_data);
            }
        )
    }

    render() {
        return (
            <div id='ContagionGraph' style={{marginTop:'30px', marginLeft:'20px', marginRight:'20px'}}>
                <Row>
                    <Col xs={12}>
                        <h3 style={{paddingLeft:'5px'}}>Corona Cases in India</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{height:'750px'}}>
                            {'Contagion Graph'}
                            <div style={{height:'700px'}}>
                                <iframe src='https://cluster.covid19india.org/' width={'100%'} height={'100%'}></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}