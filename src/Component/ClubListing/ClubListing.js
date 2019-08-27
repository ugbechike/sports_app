import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';
import Arsenal from '../../Assets/arsenal.png'
import Chelsea from '../../Assets/chelsea.png'
import Juvey from '../../Assets/juvey.png'
import Barca from '../../Assets/barca.png'
import Napoli from '../../Assets/napoli.png'
import Mancity from '../../Assets/mancity.png'
import './ClubListing.css';

class Clubs extends Component {
    render() {
        return (
            <Container>
                <Row >
                    <Col xs={6} md={6} className="top_teams">
                    Top Teams
                    </Col>
                    <Col xs={6} md={6} className="seemore__posts">
                    SEE MORE &gt;
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={6} md={2}>
                        <div className="club__image-wrapper arsenal">
                            <img className="club__image" src={Arsenal} alt="arsenal"/>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="club__image-wrapper chelsea">
                            <img className="club__image" src={Chelsea} alt="chelsea"/>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="club__image-wrapper juvey">
                            <img className="club__image" src={Juvey} alt="juvey"/>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="club__image-wrapper napoli">
                            <img className="club__image" src={Napoli} alt="napoli"/>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="club__image-wrapper barca">
                            <img className="club__image" src={Barca} alt="barca"/>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="club__image-wrapper mancity">
                            <img className="club__image" src={Mancity} alt="mancity"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Clubs;