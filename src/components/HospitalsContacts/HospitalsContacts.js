import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

class StatewiseCases extends Component {
    constructor() {
        super();
        this.state = {
          hospitals_data : [],
        }
    }

    componentDidMount() {
        axios.get(`https://theherdlabs.com/api/v1/healthcare`)
            .then(res => {
                const hospitals_data = res.data.data;
                this.setState({ hospitals_data });
            }
        )
    }

    render() {
        return (
            <div id='HospitalsContacts'>
                <Row>
                    <Col xs={12}>
                        <h3 style={{paddingLeft:'22px'}}>Hospitals & Contacts</h3>
                    </Col>
                </Row>  
                <Row style={{marginBottom:'160px', marginTop:'20px', padding:'15px'}}>
                    <Table responsive striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>States / UTs</th>
                                <th>Total Hospitals</th>
                                <th>Total Beds</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.hospitals_data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.pretty_name}</td>
                                    <td>{item.total_hospitals}</td>
                                    <td>{item.total_beds}</td>
                                    <td>{item.contact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </div>
        );
    }
}

export default StatewiseCases;

