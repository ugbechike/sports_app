import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import predict from '../../Assets/predict.png'
import './EarnersInfo.css'

class EarnersInfo extends Component {
    render() {
        return (
            <div>
                <div className="earnes__ads">
                    <p>Start Predicting Adverts</p>
                </div>
                 
                <div className="earners_total_point">
                <Row>
                    <Col xs={12} md={12}>
                        <Row className="align_earners">
                            <Col xs={6} md={6}>
                                <p>Games Predicted</p>
                            </Col>
                            <Col xs={6} md={6} className="align__point">
                                <p>32</p>
                            </Col>
                            <Col xs={6} md={6}>
                                <p>Total Points</p>
                            </Col>
                            <Col xs={6} md={6} className="align__point">
                                <p>70</p>
                            </Col>
                            <Col xs={6} md={6}>
                                <p>Position</p>
                            </Col>
                            <Col xs={6} md={6} className="align__point">
                                <p>20th</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </div>

                <div className="upcoming__predictions">
                    <div className="earn__content">
                        <h4>Upcoming Predictions</h4>
                    </div>
                    <hr className="earn_line" />
                    <Row className="align_earners">
                        <Col xs={6} md={8}>
                            <div className="remove_margin_p">
                                <p>Manchester United - Arsenal</p>
                                <div><small>12:30pm, GMT+1</small></div> 
                                <div><small>SATURDAY, 15TH APRIL</small></div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="prediction__cover">
                                <div className="predict_image">
                                    <img  src={predict} alt="predict" />
                                    <div><span>1</span></div>
                                </div>
                                <div className="predict_image">
                                    <img  src={predict} alt="predict" />
                                    <div><span>x</span></div>
                                </div>
                                <div className="predict_image">
                                    <img  src={predict} alt="predict" />
                                    <div><span>2</span></div>
                                </div>
                            </div>
                        </Col>
                        
                        <Col xs={6} md={8}>
                            <div className="remove_margin_p">
                                <p>Chelsea - Watford</p>
                                <div><small>12:30pm, GMT+1</small></div> 
                                <div><small>SATURDAY, 15TH APRIL</small></div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="prediction__cover">
                                <div className="predict_image">
                                    <img  src={predict} alt="predict" />
                                    <div><span>1</span></div>
                                </div>
                                <div className="predict_image">
                                    <img src={predict} alt="predict" />
                                    <div><span>x</span></div>
                                </div>
                                <div className="predict_image">
                                    <img  src={predict} alt="predict" />
                                    <div><span>2</span></div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={6} md={8}>
                            <div className="remove_margin_p">
                                <p>Manchester United - Arsenal</p>
                               <div><small>12:30pm, GMT+1</small></div> 
                                <div><small>SATURDAY, 15TH APRIL</small></div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="prediction__cover">
                                <div className="predict_image">
                                    <img  src={predict} alt="predict" />
                                    <div><span>1</span></div>
                                </div>
                                <div className="predict_image" >
                                    <img src={predict} alt="predict" />
                                    <div><span>x</span></div>
                                </div>
                                <div className="predict_image" >
                                    <img src={predict} alt="predict" />
                                    <div><span>2</span></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default EarnersInfo;