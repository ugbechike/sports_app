import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../../Assets/logo.png';
import './footer.css';
import Facebook from '../../Assets/facebook.png';
import Twitter from '../../Assets/twitter.png';
import Instagram from '../../Assets/instagram.png';
import Sub from '../../Assets/sub.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer__wrapper">
                <Container>
                    <Row>
                        <Col xs={12} md={3}>
                            <div>
                                <img className="footer__logo" src={Logo} alt="logo" />
                            </div>
                            <div className="footer__content">
                                <p>Sportive23 is an online platform that curates and publishes football stories frim all around the globe</p>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <ul>
                                <li className="footer_list_title"><p>Links</p></li>
                                <li>About</li>
                                <li>Advertise with us</li>
                                <li>Privacy</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={3}>
                            <p className="footer_list_title">Social</p>
                            <div>
                                <img className="footer__social" src={Facebook} alt="facebook" />
                                <img className="footer__social" src={Twitter} alt="twitter" />
                                <img className="footer__social" src={Instagram} alt="instagram" />
                            </div>
                            <p className="footer_list_title">Download</p>
                            <div>

                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <p className="footer_list_title">Subscribe</p>
                            <div>
                                <p>Subscribe to get our newsletter to get the latest updates straight to your email</p>
                            </div>
                            <input className="footer__sub__input" type="text" placeholder="example@email.com" />
                            <Button className="footer__btn"><img className="footer__sub_img" src={Sub} alt="sub" /></Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;