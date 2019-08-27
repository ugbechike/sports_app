import React, { Component } from 'react';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import Ads from '../Ads/Ads';
import LatestNewsPage from '../LatestNewsPage/LatestNewsPage';
import TwitterEmbedd from '../TwitterEmbbed/TwitterEmbedd';
import DoneDeal from '../DoneDeal/DoneDeal'

class Transfer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'News',
            date: new Date(),
        };
    }
    render() {
        return (
            <div>
                <Navigation />
                <Container style={{ marginTop: '7em' }} className="MatchDetail__wrapper">
                    <Ads />
                    <Row className="MatchDetail__body">
                        <Col md={7}>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={this.state.key}
                                onSelect={key => this.setState({ key })}
                            >
                                <Tab eventKey="News" title="LATEST">
                                   <LatestNewsPage />
                                </Tab>
                                <Tab eventKey="Team" title="MY TEAM">
                                   {/* <Chats/> */}
                                </Tab>
                                <Tab eventKey="Deal" title="DONE DEAL">
                                    <DoneDeal />
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md={5}>
                        <TwitterEmbedd />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Transfer;