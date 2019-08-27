import React, { Component } from 'react';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import LineUp from '../LineUp/LineUp';
import '../matchDetail(commentry)/matchDetail(commentry).css';
import DynamicNews from '../DynamicNews(team)/DynamicNews(team)';
import CompMatches from '../CompFixtures(team)/CompFixtures(team)';
import DynamicFixtures from '../DynamicFixtures/DynamicFixtures';
import Calendar from 'react-calendar';
import MatchTable from '../MatchTable/MatchTable';
import TopScorer from '../TopScorer/TopScorer';
import uefa from '../../Assets/uefa.png';
import './DynamicComp(teams).css';
import TopEarners from '../TopEarners/TopEarners';
import EarnersInfo from '../EarnersInfo/EarnersInfo';




class DynamicCompTeams extends Component {
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
                    <div className="match_details_header">
                        <img className="details_image_uefa" src={uefa} alt="uefa"/>
                        <h2>Chelsea</h2>
                    </div>
                    <Row className="MatchDetail__body">
                        <Col md={7}>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={this.state.key}
                                onSelect={key => this.setState({ key })}
                            >
                                <Tab eventKey="News" title="LATEST NEWS">
                                    <DynamicNews />
                                </Tab>
                                <Tab eventKey="Fixtures" title="FIXTURES">
                                    <DynamicFixtures />
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md={5}>
                            <Tabs activeKey={this.state.key}
                                onSelect={key => this.setState({ key })}>
                                <div eventKey="News">
                                    <CompMatches />
                                </div>
                                <div eventKey="Fixtures">
                                    <Calendar
                                        onChange={this.onChange}
                                        value={this.state.date}
                                    />
                                </div>
                                <div eventKey="Table">
                                    <TopScorer />
                                </div>
                                <div eventKey="Earners">
                                    <EarnersInfo />
                                </div>
                            </Tabs>

                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default DynamicCompTeams;