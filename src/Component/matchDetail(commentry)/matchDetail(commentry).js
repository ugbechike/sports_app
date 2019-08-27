import React, { Component } from 'react';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import LiveScore from '../liveScore/liveScore';
import LiveMatchStats from '../LiveMatchStats/LiveMatchStats';
import LineUp from '../LineUp/LineUp';
import Chats from '../Chats/Chats';
import Commentry from '../Commentry/Commentry';
import MatchHighLights from '../featuredGame(highlights)/featuredGame(highlights)';
import './matchDetail(commentry).css';


class MatchDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          key: 'Commentry',
        };
      }

    render() {
        return (
            <div>
                <Navigation />
                <div className='live__score'>
                <LiveScore />
                </div>
                <Container className="MatchDetail__wrapper">
                    <Row className="MatchDetail__body">
                        <Col md={7}>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={this.state.key}
                                onSelect={key => this.setState({ key })}
                            >
                                <Tab eventKey="Commentry" title="Commentry">
                                   <Commentry/>
                                </Tab>
                                <Tab eventKey="Chat" title="Chat">
                                   <Chats/>
                                </Tab>
                                <Tab eventKey="Lineup" title="Lineup">
                                   <LineUp/>
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md={5}>
                            <LiveMatchStats />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default MatchDetail;