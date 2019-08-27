import React, { Component } from 'react';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import { Row, Col, Container } from "react-bootstrap";
import Ads from '../Ads/Ads';
import MatchHighLight from "../featuredGame(highlights)/featuredGame(highlights)";
import Calendar from 'react-calendar';
import './highlights.css';


class HighLights extends Component {
    state = {
        date: new Date(),
      }


    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <Navigation />
                <Container className="highlights__wrapper">
                <Ads />
                <Row className="highlights__body">
                    <Col md={8}>
                        <MatchHighLight/>
                    </Col>
                    <Col md={4}>
                        <div>
                        <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                        />
                        </div>
                    </Col>
                </Row>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default HighLights;