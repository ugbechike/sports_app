import React, { Component } from 'react';
// import CompMatches from '../CompFixtures/CompFixtures';
import '../LatestPostScreen/LatestPost.css';
import { Container, Row, Col} from 'react-bootstrap';

class DynamicNews extends Component {

    state = {
        sideContent: [
            { id: "1", image: "", content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "2", image: "", content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "3", image: "", content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
            { id: "4", image: "", content: "Klopp in Serie A? Liverpool boss opens up on Napoli job offer", time: "9 hours ago" },
        ],
        

        timer: "9 hours ago"
    }


    renderDynamicNews = () => {
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
        return(
            <Container>
                <Row className="latest__container">
                    <Col xs={12} md={12} className="latest__aside">
                        {this.renderDynamicNews()}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DynamicNews;