import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DATA from './constants'; 
import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <div style={{position:'relative',bottom:'0',backgroundColor:'#000000',width:'100vw',textAlign:'center'}}>
                <div style={{paddingTop:'10px', paddingBottom:'50px' ,fontSize:'18px',fontWeight:400, color:'#ffffff'}}>
                    Powered By | THE HERD LABS
                    <div style={{backgroundColor:'#343a40', padding:'10px', margin:'20px', fontSize:'12px', color:'#cccccc'}}>
                        <h3>Sources :-</h3>
                        <Row style={{padding:'10px', textDecoration:'none'}}>
        
                            {DATA.map((item, index) => (
                                <Col xs={6} key={index}>
                                    <a href={item.link} style={{color:'#cccccc'}}>{item.name}</a>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

