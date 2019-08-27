import React, { Component } from 'react';
import Navigation from '../Menu/Nav';
// import TopTeam from '../TopTeam/TopTeam';
import Footer from '../Menu/footer';
import './LatestPost.css';
import { Container, Row, Col} from 'react-bootstrap';
import Matches from '../Matches/Matches';
import Ads from '../Ads/Ads';
import ImageShape from '../../Assets/Image-Shape.png'




class LatestPost extends Component {
    state = {
        sideContent: [
            { id: "1", image:  <img className="post__image_main" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image:  <img className="post__image_main" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image:  <img className="post__image_main" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image:  <img className="post__image_main" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
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
            <div>
                <Navigation />
                <Container className="latest__post-margin">
                    <Ads />
                    <Row className="latest__container">
                        <Col xs={12} md={6} className="latest__aside">
                            <Row>
                                <Col xs={6} md={12}>Latest Posts</Col>
                            </Row>
                            <hr />
                            {this.renderPosts()}
                            <div className="latest__align">Load More</div>
                        </Col>
                        <Col xs={12} md={6}>
                            <Matches />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} >
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }


    // render() {
    //     return (
    //         <div>
    //             <Navigation />
    //             <div className="latest__post-margin">
    //             <TopTeam/>
    //             </div>
    //             <Footer />
    //         </div>
    //     );
    // }
}

export default LatestPost;