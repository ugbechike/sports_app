import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TopTeam.css';
import Matches from '../Matches/Matches';
import { Link } from 'react-router-dom';
import ImageShape from '../../Assets/Image-Shape.png'




class TopTeam extends Component {
    state = {
        sideContent: [
            { id: "1", image: <img className="post__image_main" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image: <img className="post__image_main" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image: <img className="post__image_main" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image: <img className="post__image_main" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
        ],

        timer: "9 hours ago"
    }


    renderPosts = () => {
        let { sideContent } = this.state
        return (
            sideContent.map((value, index) => (
                <Row key={index} >
                    <Col xs={6} md={4} className="post__image-wrapper">
                        {value.image}
                    </Col>
                    <Col xs={6} md={8} className="latest-post__card">
                        <p>{value.content}</p>
                        <span className="latest-post__time">{value.time}</span>
                    </Col>
                </Row>
            ))
        )
    }



    render() {
        return (
            <Container>
                <Row className="latest__container">
                    <Col xs={12} md={6} className="latest__aside">
                        <Row>
                            <Col xs={6} md={6}>Latest Posts</Col>
                            <Col xs={6} md={6} className="seemore__posts"><Link to='/latest'>SEE MORE &gt;</Link></Col>
                        </Row>
                        <hr />
                        {this.renderPosts()}
                    </Col>
                    <Col xs={12} md={6}>
                        <Matches fixture={this.props.fixture}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TopTeam;