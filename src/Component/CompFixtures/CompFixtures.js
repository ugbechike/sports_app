import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../Matches/Matches.css';
import Juvey from '../../Assets/juvey.png'
import Barca from '../../Assets/barca.png';
import './CompFixtures.css';

class CompMatches extends Component {

    state={
        display: 4
    }

    showMore = () => {
        var increment = this.state.display * 2
        this.setState({
          display: this.props.fixture ? increment : ''
        });
    }


    renderCompMatches = () => {
        let fixture = this.props.fixture
        if (fixture == undefined, fixture == null) {
            return <h5>Loading...</h5>
        }
        else {
            console.log("see fixtuer", fixture)
            let dataToShow = this.props.fixture.slice(0, this.state.display)
            return (
                dataToShow.map((team, index) => (
                    <Row key={index} className="match__row">
                        <Col xs={5} md={5}>
                            <Row style={{justifyContent:"center", alignItems:"center"}}>
                                <Col md={5} style={{ textAlign: "center" }}>
                                    {team.home.name}
                                </Col>
                                <Col md={5} className="logo__end">
                                    <img className="match__logo" src={team.home.logo_path} alt={team.away.name} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={2} md={2} className="match__time">
                            <div style={{ display: "grid" }}>
                                <span>{team.time.starting_at.time.slice(0, 5)}</span>
                                <span style={{ fontSize: "8px" }}>{team.time.starting_at.date}</span>
                            </div>
                        </Col>
                        <Col xs={5} md={5}>
                            <Row style={{justifyContent:"center", alignItems:"center"}}>
                                <Col md={5} style={{ textAlign: "center" }} className="show__visitor__team" >
                                    {team.away.name}
                                </Col>
                                <Col md={5} className="logo__end">
                                    <img className="match__logo" src={team.away.logo_path} alt={team.away.name} />
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
                <div className='match__today'>UEFA Fixture</div>
                <hr />
                {this.renderCompMatches()}
                <div className="matches__align" onClick={this.showMore}> See more  </div>

            </Container>
        );
    }
}

export default CompMatches;