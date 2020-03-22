import React, { Component } from 'react';
import MENU_TAGS from './constants'
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from 'react-bootstrap';
import logo from './coronavirus.png'

class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    render() {
        // const {state, healthcare, news, notifications} = this.props;
        return (
            <Container fluid>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
                    <Navbar.Brand href="#home"><img src={logo} alt={'LOGO'} width={'50px'}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {MENU_TAGS.map((item, index) => (
                                <div key={index}>
                                    <Nav.Link href={item.link}>{item.tag}</Nav.Link>
                                </div>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default Header;