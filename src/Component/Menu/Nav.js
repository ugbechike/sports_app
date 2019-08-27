import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Container, Button, Image, Row, Col} from 'react-bootstrap';
import './Nav.css';
import Logo from '../../Assets/logo.png';

class Navigation extends Component {
    state={}

    componentDidMount(){
        var userdetail = {
            name: localStorage.getItem("name"),
            icon: localStorage.getItem("usericon")
        }
        console.log("-------------------------------------",userdetail)
        this.setState({
            username:userdetail.name,
            usericon:userdetail.icon
        })

    }

    render() {
        let {username, usericon} = this.state
        return (
            <Row>
                <Col>
                <Navbar bg="light" expand="lg">
                    <Container>
                <Navbar.Brand><Link to="/home"><img className="logo" src={Logo} alt="logo"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav><NavLink to="/home">News</NavLink></Nav>
                        <Nav><NavLink to="/fixtures">Fixtures</NavLink></Nav>
                        <Nav><NavLink to="/competitions">Competitions</NavLink></Nav>
                        {/* <Nav><NavLink to="/teams">Teams</NavLink></Nav> */}
                        <Nav><NavLink to="/transfer">Transfer</NavLink></Nav>
                    </Nav>
                    <Image width={40} roundedCircle style={{marginRight:"5px"}} src={usericon}/> Hi {username}
                </Navbar.Collapse>
            </Container>
            </Navbar>
                </Col>
            </Row>
        );
    }
}

export default Navigation;