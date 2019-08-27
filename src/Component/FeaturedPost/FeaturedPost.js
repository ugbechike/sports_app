import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../Assets/logo.png';
import './FeaturedPost.css';
import ClubImage from '../../Assets/klopp.jpg';
import ImageShape from '../../Assets/Image-Shape.png'

class FeaturedPost extends Component {
    state = {
        sideContent: [
            { id: "1", image: <img className="post__image" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image: <img className="post__image" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image: <img className="post__image" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image: <img className="post__image" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
        ],

        timer: "9 hours ago"
    }

    renderContent = () => {
        let { sideContent } = this.state
        return (
            sideContent.map((value, index) => (
                <div key={index} className="image__posts">
                      <div className="post__side__image">
                      {value.image}
                      </div>  
                    <div className="post__side__card">
                        <p>{value.content}</p>
                        <span className="post__time">{value.time}</span>
                    </div>
                </div>
            ))
        )
    }

    render() {
        let { timer } = this.state
        return (
            <Container>
                <Row className="post__wrapper">
                    <Col xs={12} md={8}>
                        <div className="Post__card">
                            <div className="post__card__image">
                                <img className="clubImage" src={ClubImage} alt="image" />
                            </div>
                            <div className="post__card__content">
                                <div className="post__card__title">
                                    <p>
                                        Klopp in Serie A? Liverpool boss opens up on Napoli job offer
                                </p>
                                </div>
                                <Row className="poster__logo__timer">
                                    <Col xs={6} md={10}>
                                        <img className="poster__logo" src={Logo} alt="logo" />
                                    </Col>
                                    <Col xs={6} md={2}>
                                        <p className="poster__timer">{timer}
                                        </p></Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} >
                        {this.renderContent()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FeaturedPost;