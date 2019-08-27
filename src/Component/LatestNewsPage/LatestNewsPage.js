import React, { Component } from 'react';
import './LatestNewsPage.css';
import {  Row, Col} from 'react-bootstrap';
import ImageShape from '../../Assets/Image-Shape.png'




class LatestNewsPage extends Component {
    state = {
        sideContent: [
            { id: "1", image: <img className="post__image" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image: <img className="post__image" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image: <img className="post__image" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "1", image: <img className="post__image" src={ImageShape} alt ="clubs"/>, content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
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
                    <Row>
                        <Col xs={12} md={12} >
                            {this.renderPosts()}
                            <div className="latest__align">Load More</div>
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default LatestNewsPage;