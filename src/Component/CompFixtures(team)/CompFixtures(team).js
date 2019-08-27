import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import '../Matches/Matches.css';
import Juvey from '../../Assets/juvey.png'
import Barca from '../../Assets/barca.png';
import MatchTable from '../MatchTable/MatchTable';
import Teamicon from "../../Assets/hudersfield.svg";
import Teamicon1 from "../../Assets/chelsea.svg";
import UeafaIcon from '../../Assets/ueafa_icon.svg';
import './CompFixture(team).css';
// import './CompFixtures.css';

class CompMatches extends Component {
    state = [

        { id: "1", club: "West Ham Un...", logo: <img className="comp_fixture_match__logo" src={Juvey} alt='west' />, time: "13:00" },
        { id: "2", club: "Chelsea", logo: <img className="comp_fixture_match__logo" src={Barca} alt='chelsea' />, time: "13:00" },
        { id: "3", club: "West Ham Un...", logo: <img className="comp_fixture_match__logo" src={Juvey} alt='west' />, time: "13:00" },
        { id: "4", club: "Chelsea", logo: <img className="comp_fixture_match__logo" src={Barca} alt='chelsea' />, time: "13:00" },
        { id: "5", club: "West Ham Un...", logo: <img className="comp_fixture_match__logo" src={Juvey} alt='west' />, time: "13:00" },
        { id: "6", club: "Chelsea", logo: <img className="comp_fixture_match__logo" src={Barca} alt='chelsea' />, time: "13:00" },
    ]




    renderCompMatches = () => {
        return (
            this.state.map((value, index) => (
                <Row key={index} className="comp_fixture_match__row">
                    <Col xs={5} md={5}>
                        <Row>
                            <Col xs={8} md={8}>{value.club}</Col>
                            <Col xs={4} md={4} className="logo__end">{value.logo}</Col>
                        </Row>
                    </Col>
                    <Col xs={2} md={2} className="comp_fixture_match__time">{value.time}</Col>
                    <Col xs={5} md={5}>
                        <Row>
                            <Col xs={8} md={4} className="logo__end"> {value.logo}</Col>
                            <Col xs={4} md={8} >{value.club}</Col>
                        </Row>
                    </Col>
                </Row>
            ))
        )
    }
    render() {
        return (
            <div>
                <div className="other__fixture__div">
                    <div className="other__fixture__top">
                        Other Fixture
                    </div>
                    <div className="team__fixtures__comp">
                        <div>
                            <span>West Ham United</span>
                            <img src={Teamicon}/>
                        </div>
                        <div>
                            <div className="score__div">
                                <span>3</span>
                                <span> : </span>
                                <span>2</span>
                            </div>
                        </div>
                        <div>
                            <img src={Teamicon1}/>
                            <span>Chelsea</span>
                        </div>
                    </div>
                    <div className="see__more">see more</div>
                </div>
                <Container>
                

                    <div className="compition__team__table__div">
                        <div className="Table__statistics">
                            <div className="Table__statistics__top">
                                <span className="table__listing">Premier League</span>
                                <span className="full__table">Full Table</span>
                            </div>
                            <hr />
                            <div>
                                <table className='league__table'>
                                    <tr>
                                        <th><img src={UeafaIcon} /></th>
                                        <th> UEFA Champions League</th>
                                        <th><span>P</span></th>
                                        <th><span>Pts</span></th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td><img src={Teamicon} /> Manchester United</td>
                                        <td>17</td>
                                        <td>44</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td><img src={Teamicon1} /> Arsenal</td>
                                        <td>17</td>
                                        <td>44</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="Table__statistics">
                            <div className="Table__statistics__top">
                                <span className="table__listing">Europa League (Group A)</span>
                                <span className="full__table">Full Table</span>
                            </div>
                            <hr />
                            <div>
                                <table className='league__table'>
                                    <tr>
                                        <th><img src={UeafaIcon} /></th>
                                        <th> UEFA Champions League</th>
                                        <th><span>P</span></th>
                                        <th><span>Pts</span></th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td><img src={Teamicon} /> Manchester United</td>
                                        <td>17</td>
                                        <td>44</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td><img src={Teamicon1} /> Arsenal</td>
                                        <td>17</td>
                                        <td>44</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        );
    }
}

export default CompMatches;