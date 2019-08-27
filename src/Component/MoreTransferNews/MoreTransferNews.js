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

class MoreTransferNews extends Component {
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
                            <div className="news__card">
                                <img className="news__card-img" src={ImageShape} alt="card" />
                            </div>
                            <div className="news__content">
                                <p>
                                    Chelsea have condemned the fans who allegedly sung an anti-Semitic song during their 2-2 draw away to Vidi in the Europa League on Thursday. The incident comes less than a week after Manchester City forward Raheem Sterling was allegedly racially abused in a Premier League match at Stamford Bridge. Four people were suspended from attending the club's matches pending further investigations into that matter and Chelsea swiftly denounced the incident in Hungary. "Anti-Semitism and any other kind of race-related or religious hatred is abhorrent to this club and the overwhelming majority of our fans," said a Chelsea spokesperson. "It has no place at Chelsea or in any of our communities. We have stated this loud and clear on many occasions from the owner, the board, coaches and players. "Any individuals that can't summon the brainpower to comprehend this simple message and are found to have shamed the club by using anti-Semitic or racist words or actions will face the strongest possible action from the club." Blues boss Maurizio Sarri, who this week slammed the Sterling abuse as "disgusting", said he was unable to understand the song when asked to comment by reporters after full-time. Chelsea had already sealed top spot in Europa League Group L prior to the Vidi draw and return to domestic duties in a trip to Brighton and Hove Albion on Sunday.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Row>
                        <Col xs={6} md={6} className="news__club">
                            <div className="news__club-content">Chelsea</div>
                            <div className="news__club-content">EPL</div>
                            <div className="news__club-content">Transfer</div>
                        </Col>
                        <Col xs={6} md={6} className="seemore__posts">
                            <div><img className="news__social" src={Instagram} alt="whatsapp" />
                            <img className="news__social" src={Twitter} alt="twitter" />
                            <img className="news__social" src={Facebook} alt="facebook" />
                            <img className="news__social" src={Facebook} alt="google+" /></div>
                        </Col>
                    </Row>
                    <hr  className="hr_line"/>
                    <Row  className="content__news-wrapper">
                        <Col xs={6} md={4}>
                            <div className="news__extra">
                                <div >
                                    <img className="news__image_card" src={ImageShape} alt="image" />
                                </div>
                                <div className="news__extra-content">
                                    <span>Klopp in Serie A? Liverpool boss opens up on Napoli job offer</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className="news__extra">
                                <div >
                                    <img className="news__image_card" src={ImageShape} alt="image" />
                                </div>
                                <div className="news__extra-content">
                                    <span>Klopp in Serie A? Liverpool boss opens up on Napoli job offer</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
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

export default MoreTransferNews;