import React, { Component } from 'react';
import './LineUp.css'
import { Row, Col } from 'react-bootstrap';
import Pitch from '../../Assets/pitch.png';
import ProfileIcon from '../../Assets/profile__icon.svg';



class LineUp extends Component{





    render(){
        return(
            <div>
                <Row>
                    <Col className="line__up__top" md={12}>
                        <div className='line__up__teams'>
                            <div className="line__up__home">
                                <span>Manchester City</span>
                                <span>(4-1-4-1)</span>
                            </div>

                            <div className="line__up__away">
                                <span>Everton</span>
                                <span>(4-1-4-1)</span>
                            </div>
                        </div>

                        <div className="line__up__pitch">
                            {/* <img src={Pitch}/> */}
                        </div>
                    </Col>
                </Row>

                <Row>
                    {/* THIS IS FOR THE HOME TEAM LINEUP SIDE */}
                    <Col md={6}>
                        <div className='lineup__headers'>lineup</div>
                        <div className="team__squard">
                            <img src={ProfileIcon}/>
                            <span>20</span>
                            <p>Ederson Moraes</p>
                        </div>
                    </Col>
                    {/* END HERE */}

                    {/* THIS IS FOR THE AWAY TEAM LINEUP SIDE */}
                    <Col md={6}>
                        <div className='lineup__headers'>lineup</div>
                        <div className="team__squard">
                            <img src={ProfileIcon}/>
                            <span>20</span>
                            <p>Ederson Moraes</p>
                        </div>
                    </Col>
                    {/* ENDS HERE */}
                </Row>

                <Row>
                    {/* THIS IS FOR THE HOME TEAM LINEUP SIDE */}
                    <Col md={6}>
                        <div className='lineup__headers'>Substitutes</div>
                        <div className="team__squard">
                            <img src={ProfileIcon}/>
                            <span>20</span>
                            <p>Ederson Moraes</p>
                        </div>
                    </Col>
                    {/* END HERE */}

                    {/* THIS IS FOR THE AWAY TEAM LINEUP SIDE */}
                    <Col md={6}>
                        <div className='lineup__headers'>Substitutes</div>
                        <div className="team__squard">
                            <img src={ProfileIcon}/>
                            <span>20</span>
                            <p>Ederson Moraes</p>
                        </div>
                    </Col>
                    {/* END HERE */}
                </Row>

                <Row>
                    {/* THIS IS FOR THE HOME TEAM LINEUP SIDE */}
                    <Col md={6}>
                        <div className='lineup__headers'>Manager</div>
                        <div className="team__squard">
                            <img src={ProfileIcon}/>
                            <span>20</span>
                            <p>Ederson Moraes</p>
                        </div>
                    </Col>
                    {/* END HERE */}

                    {/* THIS IS FOR THE AWAY TEAM LINEUP SIDE */}
                    <Col md={6}>
                        <div className='lineup__headers'>Manager</div>
                        <div className="team__squard">
                            <img src={ProfileIcon}/>
                            <span>20</span>
                            <p>Ederson Moraes</p>
                        </div>
                    </Col>
                    {/* END HERE */}

                </Row>
            </div>
        );
    }
} 

export default LineUp