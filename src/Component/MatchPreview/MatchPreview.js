import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../Assets/logo.png';
import Instagram from '../../Assets/instagram.png';
import Facebook from '../../Assets/facebook.png';
import Twitter from '../../Assets/twitter.png';
import ImageShape from '../../Assets/Image-Shape.png';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import '../NewsContent/NewsContent.css';

class MatchPreview extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Container>
                    <div className="news__container">
                        <div className="news__content-wrapper">
                            <div className="news__text">
                                <h1>Chelsea condemn alleged anti-Semitic chanting from fans</h1>
                            </div>
                            <img className="news__logo" src={Logo} alt="logo" />
                            <div>
                                <span>Dec 13, 2018</span>
                            </div>
                        </div>
                        <div>
                            <div className="news__card_preview">
                                <img className="news__card-img" src={ImageShape} alt="card" />
                            </div>
                        </div>
                    </div>

                    <Row>
                        <Col xs={12} md={6} className="news__club">
                            <div className="news__club-content">Chelsea</div>
                            <div className="news__club-content">EPL</div>
                            <div className="news__club-content">Transfer</div>
                        </Col>
                        <Col xs={12} md={6} className="seemore__posts">
                            <div><img className="news__social" src={Instagram} alt="whatsapp" />
                            <img className="news__social" src={Twitter} alt="twitter" />
                            <img className="news__social" src={Facebook} alt="facebook" />
                            <img className="news__social" src={Facebook} alt="google+" /></div>
                        </Col>
                    </Row>
                    <hr  className="hr_line"/>
                    <Row  className="content__news-wrapper">
                        <Col xs={12} md={4}>
                            <div className="news__extra">
                                <div >
                                    <img className="news__image_card" src={ImageShape} alt="image" />
                                </div>
                                <div className="news__extra-content">
                                    <span>Klopp in Serie A? Liverpool boss opens up on Napoli job offer</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="news__extra">
                                <div >
                                    <img className="news__image_card" src={ImageShape} alt="image" />
                                </div>
                                <div className="news__extra-content">
                                    <span>Klopp in Serie A? Liverpool boss opens up on Napoli job offer</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="news__extra">
                                <div >
                                    <img className="news__image_card" src={ImageShape} alt="image" />
                                </div>
                                <div className="news__extra-content">
                                    <span>Klopp in Serie A? Liverpool boss opens up on Napoli job offer</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default MatchPreview;