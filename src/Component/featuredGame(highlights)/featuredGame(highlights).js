import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './featuredGame(highlights).css';
import Image from '../../Assets/Image-Shape.png';
import { NavLink } from 'react-router-dom';


class MatchHighLights extends Component {
   
    render() {
        return (
            <div>
                <div className="navigate">
                    <NavLink to="/fixtures"><span>FIXTURES</span></NavLink>
                    <NavLink to="/highlights"><span>HIGHLIGHTS</span></NavLink>
                </div>
                <h4>6th, December, 2018</h4>

                <div className="fixture__league">
                    Premier League
                </div>
                <Row>
                    <Col md={6}>
                        <div> <img src={Image} className="match_highlight__img"/></div>
                        <p>
                            Liverpool vs Manchester United 3-1 Goals & Highlights (First Half) 16/12/2018 
                        </p>
                    </Col>
                    <Col md={6}>
                        <div> <img src={Image} className="match_highlight__img"/></div>
                        <p>
                            Liverpool vs Manchester United 3-1 Goals & Highlights (First Half) 16/12/2018 
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MatchHighLights;
                  
                   