import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Matches.css';
import { BASE_API } from '../../api';
import Axios from 'axios';


class Matches extends Component {
    state = {
        display: 4
    }

    componentDidMount() {
        Axios.get(`${BASE_API}/fixtures?_include=localteam,visitorteam`).then((res) => {
            this.formatFixtureData(res.data)
        })
    }

    showMore = () => {
        var increment = this.state.display * 2
        this.setState({
            display: this.props.fixture ? increment : ''
        });
    }

    formatFixtureData = (res) => {
        let fixture = []
        res.map((team) => {
            console.log("team mapping", team);
            let teamData = {
                home: {
                    name: team.localteam.name,
                    id: team.localteam._id,
                    imageLogo: team.localteam.logo_path,
                },
                away: {
                    name: team.visitorteam.name,
                    id: team.visitorteam._id,
                    imageLogo: team.visitorteam.logo_path,
                },
                score: {
                    ft: team.scores.ft_score,
                    ht: team.scores.ht_score,
                    home_score: team.scores.localteam_score,
                    away_score: team.scores.visitorteam_score
                },
                time: {
                    ftStatus: team.time.status,
                    matchTime: team.time.starting_at.time.slice(0, 5),
                    timeZone: team.time.starting_at.timezone,
                }
            };
            fixture.push(teamData)
        })
        console.log("new data format", fixture)
        this.setState({
            teamFixture: fixture
        })
    }

    renderMatches = () => {
        let fixture = this.state.teamFixture
        console.log("fixture don sland", fixture)
        if (fixture == undefined || fixture == null) {
            return (
                <h3>processing</h3>
            )
        } else {
            let dataToShow = fixture.slice(0, this.state.display)
            return (
                dataToShow.map((team, index) => (
                    <Row key={index} className="match__row">
                        <Col xs={5} md={5}>
                            <Row style={{justifyContent:"center", alignItems:"center"}}>
                                <Col md={5} style={{ textAlign: "center" }}>
                                    {team.home.name}
                                </Col>
                                <Col md={5} className="logo__end">
                                    <img className="match__logo" src={team.home.imageLogo} alt={team.away.name} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={2} md={2} className="match__time">
                            {
                                team.time.ftStatus == "FT" ?

                                    <div style={{ display: "grid" }}>
                                        <span>{team.score.ft}</span>
                                        <span style={{ fontSize: "8px" }}>FT</span>
                                    </div>
                                    :
                                    <div style={{ display: "grid" }}>
                                        <span>{team.time.matchTime}</span>
                                        <span style={{ fontSize: "8px" }}>time zone:{team.time.timeZone}</span>
                                    </div>
                            }
                        </Col>
                        
                        <Col xs={5} md={5}>
                            <Row style={{justifyContent:"center", alignItems:"center"}}>
                                <Col md={5} style={{ textAlign: "center" }} className="show__visitor__team" >
                                    {team.away.name}
                                </Col>
                                <Col md={5} className="logo__end">
                                    <img className="match__logo" src={team.away.imageLogo} alt={team.away.name} />
                                </Col>
                                <Col md={5} style={{ textAlign: "center" }} className="hide__visitor__team" >
                                    {team.away.name}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                ))
            )
        }
    }

    render() {
        return (
            <Container className="match__wrapper">
                <div className='match__today'>Today's Matches</div>
                <hr />
                {this.renderMatches()}
                <div className="matches__align" onClick={this.showMore}> See more  </div>

            </Container>
        );
    }
}

export default Matches;