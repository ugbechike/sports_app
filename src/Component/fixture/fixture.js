import React, { Component } from 'react';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import { Row, Col, Container } from "react-bootstrap";
import Ads from '../Ads/Ads';
import FeaturedGame from "../featuredGames/featuredGames";
import Calendar from 'react-calendar';
import './fixture.css'


class Fixture extends Component {
    state = {
        date: new Date(),
      }


    onChange = date => this.setState({ date })

    render() {
        console.log('props from fixture', this.props)
        return (
            <div>
                <Navigation />
                <Container  className="fixture__post-margin" >
                <Ads />
                <Row className="fixture__body">
                    <Col md={8}>
                        <FeaturedGame/>
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

export default Fixture;