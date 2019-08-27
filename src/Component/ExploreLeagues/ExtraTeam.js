import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ExtraTeam.css';
import Juvey from '../../Assets/juvey.png'
import Barca from '../../Assets/barca.png'
import Napoli from '../../Assets/napoli.png'
import Mancity from '../../Assets/mancity.png';
import Search from '../Search/Search';
import {Link } from 'react-router-dom';



class ExtraTeam extends Component {

    state = {
        clubs : [
            {id: '1', image: <img className="clubs__images" src={Juvey} alt=""/>, club: "Barclays Premier League", arrow: <span>&gt;</span>},
            {id: '2', image: <img className="clubs__images" src={Barca} alt=""/>, club: "UEFA Champions League", arrow: <span>&gt;</span>},
            {id: '3', image: <img className="clubs__images" src={Napoli} alt=""/>, club: "FA Cup", arrow: <span>&gt;</span>},
            {id: '4', image: <img className="clubs__images" src={Mancity} alt=""/>, club: "Manchester United", arrow: <span>&gt;</span>},
            {id: '5', image: <img className="clubs__images" src={Napoli} alt=""/>, club: "West Ham United", arrow: <span>&gt;</span>},
            {id: '6', image: <img className="clubs__images" src={Barca} alt=""/>, club: "Fulham", arrow: <span>&gt;</span>},
        ],

        otherClubs : [
            {image: <img className="clubs__images" src={Juvey} alt=""/>, club: "Europa League"},
            {image: <img className="clubs__images" src={Barca} alt=""/>, club: "UEFA Champions League"},
            {image: <img className="clubs__images" src={Napoli} alt=""/>, club: "Europa Cup"},
            {image: <img className="clubs__images" src={Mancity} alt=""/>, club: "Barclays Premier League"},
            {image: <img className="clubs__images" src={Napoli} alt=""/>, club: "West Ham United"},
            {image: <img className="clubs__images" src={Barca} alt=""/>, club: "Fulham"},
        ]
    }

    renderLeague = () => {
        let {clubs} = this.state
    
        return (
        clubs.map((value, index) => (
            <Link to = {`/comp-news/:${value.id}`}>
            <Row key={index} className="international">
            
                <Col xs={6} md = {6} >
                {value.image}{value.club}
                </Col>
    
                <Col xs={6} md = {6} className="arrows" >
                {value.arrow}
                </Col>
            </Row>
            </Link>
        ))
        )
    }

    renderOtherClubs = () => {
        let {otherClubs} = this.state
    
        return (
            otherClubs.map((value, index) => (
            <Row key={index} className="extra__teams">
            <div className="show">
                <Col xs={6} md = {6} >
                {value.image}{value.club}
                </Col>
                </div>
            </Row>
        ))
        )
    }
    

    render() {
        return (
            <Container>
                 <Row>
                    <Col xs={12} md={7}>
                    <div className="list__head"><span>England</span></div>
                    
                    {this.renderLeague()}
                    </Col>
                    <Col xs={12} md={5}>
                    <Search />
                    <div className="cover">
                    {this.renderOtherClubs()}
                    </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ExtraTeam;