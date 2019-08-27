import React, { Component } from 'react';
import TopLeagues from '../TopLeagues/TopLeagues';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import Ads from '../Ads/Ads';
import Following from '../Following/Following';
import International from '../International/International';
import Axios from 'axios';
import { BASE_API } from '../../api';
import { Row, Col } from 'react-bootstrap';




class Competition extends Component {

    render() {
        return (
            <Row style={{ padding: 0, margin: 0 }}>
                <Col style={{ padding: 0, margin: 0 }}>
                    <Navigation />
                    <Ads />
                    <TopLeagues />
                    <Following />
                    <International />
                    <Footer />
                </Col>
            </Row>
        );
    }
}

export default Competition;