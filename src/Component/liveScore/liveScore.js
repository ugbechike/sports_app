import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './liveScore.css';
import ManCityIcon from '../../Assets/man_c.svg';
import EvertonIcon from '../../Assets/everton.svg';

class LiveScore extends Component {
    render() {
        return (
            <Container className="live__score__container">
                <Row className="live__score__wrapper">
                    <Col md={6}>
                        <div className="home__team">
                            <img src={ManCityIcon} />
                            <div>
                                <h2>Manchester City</h2>
                                <span>G de Jesus (22, 50),R Sterling (69)</span>
                            </div>
                        </div>

                        <div className="away__team">
                            <img src={EvertonIcon} />
                            <div>
                                <h2>Everton</h2>
                                <span>D Calvert-Lewin (65)</span>
                            </div>
                        </div>
                    </Col>
                    
                    <Col className='match__detail__div' md={6}>
                        <div className="score__board">
                            <div>3</div>
                            <div>1</div>
                        </div>

                        <div className="match__detail">
                            <h4>Premier League</h4>
                            <p>12:30pm, GMT+1 Saturday, 15th December Etihad Stadium</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LiveScore;