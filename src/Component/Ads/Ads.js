import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Ads.css';

class Ads extends Component {
    render() {
        return (
            <Container>
                <Row className="ads_wrapper">
                    <Col xs={6} md={12}>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Ads;