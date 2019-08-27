import React, { Component } from 'react';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import { Row, Col, Container } from "react-bootstrap";
import './Home.css';
import Axios from 'axios';
import Ads from '../Ads/Ads';
import TopTeam from '../ClubListing/ClubListing';
import Clubs from '../TopTeam/TopTeam';
import { BASE_API } from '../../api';




class Home extends Component {
    state={}

    componentDidMount(){
        console.log(this.props.location.state)
        Axios.get(`${BASE_API}/fixtures?_include=localteam,visitorteam`).then((res)=>{
            this.formatFixtureData(res.data)
        })
    }

    formatFixtureData=(res)=>{
        let fixture =  []
        res.map((team)=>{
            console.log("team mapping", team)
            let teamData = {
                home:{
                    name: team.localteam.name,
                    id: team.localteam._id,
                    imageLogo: team.localteam.logo_path,
                },
                away:{
                    name: team.visitorteam.name,
                    id: team.visitorteam._id,
                    imageLogo: team.visitorteam.logo_path,
                },
                score:{
                    ft: team.scores.ft_score,
                    ht: team.scores.ht_score,
                    home_score: team.scores.localteam_score,
                    away_score: team.scores.visitorteam_score
                },
                time:{
                    ftStatus: team.time.status,
                    matchTime: team.time.starting_at.time,
                    timeZone: team.time.starting_at.timezone,
                }
            };
            fixture.push(teamData)
        })
        console.log("new data format",fixture)
        this.setState({
            teamFixture: fixture
        })
    }

    render() {
        
        return (
            <Row style={{padding:0, margin:0}}>
               <Col  style={{padding:0, margin:0}}>
               <Navigation />
                <FeaturedPost />
                <Container>
                <Row>
                    <Col xs={6} md={10} >
                        <hr className="hr__line" />
                    </Col>
                    <Col xs={6} md={2}>
                    <span className="featured__post">FEATURED POSTS</span>
                    </Col>
                </Row>
                </Container>
                <Ads />
                <TopTeam  />
                <Clubs fixture={this.state.teamFixture}/>
                <Footer />
               </Col>
            </Row>
        );
    }
}

export default Home;