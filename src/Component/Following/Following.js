import React, { Component } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import Arsenal from '../../Assets/arsenal.png'
import './Following.css'



class Following extends Component {
    render() {
        return (
            <Container>
                <Row >
                    <Col xs={12} md={6} className="top_teams">
                    Following
                    </Col>
                </Row>
                <hr />
                <Row>
                <Col xs={12} md={12}>
                        <div className="following__image-wrapper arsenal">
                            <img className="following__image" src={Arsenal} alt="arsenal"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Following;