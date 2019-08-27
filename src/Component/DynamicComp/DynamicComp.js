import React, { Component } from 'react';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import '../matchDetail(commentry)/matchDetail(commentry).css';
import DynamicNews from '../DynamicNews/DynamicNews';
import CompMatches from '../CompFixtures/CompFixtures';
import DynamicFixtures from '../DynamicFixtures/DynamicFixtures';
import Calendar from 'react-calendar';
import MatchTable from '../MatchTable/MatchTable';
import TopScorer from '../TopScorer/TopScorer';
import uefa from '../../Assets/uefa.png';
import './DynamicComp.css';
import TopEarners from '../TopEarners/TopEarners';
import EarnersInfo from '../EarnersInfo/EarnersInfo';
import Axios from 'axios';
import { BASE_API } from '../../api';



class DynamicComp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'News',
            date: new Date(),
            loader:false
        };
    }
    componentDidMount() {
        console.log("lolololololololololo",this.props.location.state.com_name)
        let token = localStorage.getItem("user")
        let id = this.props.match.params.id
        Axios.get(`${BASE_API}/fixtures?league_id=${id}&_include=localteam,visitorteam`).then(
            (res) => {
                console.log(res.data)
                this.formatMatchData(res.data, "mounted")
                this.onSelect(this.state.date)
            }
        )
        this.getLeagueStanding(id)
    }
    formatMatchData = (props, type) => {
        console.log("mountedly")
        var Team = []
        props.map((directData, index) => {
            var team = {
                home: directData.localteam,
                away: directData.visitorteam,
                time: directData.time,
            };
            Team.push(team)
        })
        if(type=="mounted"){
            this.setState({ fixtures: Team, })
        }else if (type=="date_select"){
            this.setState({
                byDateFixture: Team
            })
        }
    }
    appendLeadingZeroes = (n) => {
        if (n <= 9) {
            return "0" + n;
        }
        return n
    }
    onSelect = (e) => {
        this.setState({
            loader:true
        })
        let current_datetime = e
        let formatted_date = current_datetime.getFullYear() + "-" + this.appendLeadingZeroes(current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()
        let id = this.props.match.params.id;
        Axios.get(`${BASE_API}/fixtures?league_id=${id}&time.starting_at.date=${formatted_date}&_include=localteam,visitorteam`).then(
            (res) => {
                if(res.data.length == 0){
                    this.setState({
                        data:false,
                        message:"No fixture for today",
                        loader:false
                    })
                }else{
                    this.setState({
                        data:true,
                        message:"data arived",
                        loader:false,
                        selectedDate: formatted_date
                    })
                    this.formatMatchData(res.data, "date_select")
                    console.log("res on click",res)
                }
            }
        )
    }
    getLeagueStanding=(league_id)=>{
        let standings=[]
        Axios.get(`${BASE_API}/standings?league_id=${league_id}`).then(
            (res)=>{
                let resData=res.data;
                if(!resData.length==0){
                    resData.map((response)=>{
                        let data = {
                            clubName: response.team_name,
                            gamePlayed: response.overall.games_played,
                            matchWon:response.overall.won,
                            matchDraw:response.overall.draw,
                            matchLost: response.overall.lost,
                            goalDifference: response.total.goal_difference,
                            round:response.round_name,
                            position: response.position,
                            points: response.points,
                        }
                        standings.push(data)
                        this.setState({
                            leagueStanding: standings,
                            leagueRound: data.round
                        },()=>{

                        })
                    })
                }
            }
            
        )
    }

    render() {
        let { fixtures, byDateFixture } = this.state;
        let leagueTitle = this.props.location.state.com_name;
        console.log("our fixture", fixtures)
        return (
            <div>
                <Navigation />
                <Container style={{ marginTop: '7em' }} className="MatchDetail__wrapper">
                    <div className="match_details_header">
                        <img className="details_image_uefa" src={uefa} alt="uefa" />
                        <h2>{leagueTitle}</h2>
                    </div>
                    <Row className="MatchDetail__body">
                        <Col md={6}>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={this.state.key}
                                onSelect={key => this.setState({ key })}
                            >
                                <Tab eventKey="News" title="LATEST NEWS">
                                    <DynamicNews />
                                </Tab>
                                <Tab eventKey="Fixtures" title="FIXTURES">
                                    { this.state.loader ? <h5>Loading...</h5> : this.state.data ? <DynamicFixtures fixture={byDateFixture} date={this.state.selectedDate}/> : this.state.message}
                                </Tab>
                                <Tab eventKey="Table" title="TABLE LISTING">
                                    <MatchTable standings={this.state.leagueStanding} round={this.state.leagueRound} />
                                </Tab>
                                <Tab eventKey="Earners" title="TOP EARNERS">
                                    <TopEarners />
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col md={6}>
                            <Tabs activeKey={this.state.key}
                                onSelect={key => this.setState({ key })}>
                                <div eventKey="News">
                                    <CompMatches fixture={fixtures} />
                                </div>
                                <div eventKey="Fixtures">
                                    <Calendar
                                        onChange={this.onSelect}
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

export default DynamicComp;