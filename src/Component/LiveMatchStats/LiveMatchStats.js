import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './LiveMatchStats.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Teamicon from "../../Assets/hudersfield.svg";
import Teamicon1 from "../../Assets/chelsea.svg";
import UeafaIcon from '../../Assets/ueafa_icon.svg';


class LiveMatchStats extends Component {
    render() {
        return (
            <div>
                <div className="predict__win__div">
                    <div className="predict__and__win">Predict and win!</div>
                    <div className="game__to__predict">
                        <div>
                            <img src={Teamicon} />
                            <span>Arsenal</span>
                        </div>
                        <div className="game__to__predict__detail">
                            <span className="ash__span">2:30</span>
                            <span className="bold__span">SUN, DEC 16</span>
                            <span className="ash__span">EPL</span>
                        </div>
                        <div>
                            <img src={Teamicon1} />
                            <span>Chelsea</span>
                        </div>
                    </div>
                    <hr />
                    <div className="who__will__win__div">
                        who will win?
                        <div className="prediction__option__div">
                            <div><input type="radio" /> 1</div>
                            <div><input type="radio" /> X</div>
                            <div><input type="radio" /> 2</div>
                        </div>
                    </div>
                </div>
                <div className="match__statistics">
                    <div>
                        <span className='match__statistics__home'>LIVERPOOL</span>
                        <span className='match__statistics__away'>MANCHESTER UNITED</span>
                    </div>
                    <div className="statistics">
                        <span>53%</span>
                        <span>Possession</span>
                        <span>47%</span>
                    </div>
                    <div className="statistics__progress__div">
                        <div className="home__bar">
                        <ProgressBar  now={60} />
                        </div>
                        <div>
                        <ProgressBar now={60} className="right" />
                        </div>
                    </div>

                    <div className="statistics">
                        <span>53%</span>
                        <span>Possession</span>
                        <span>47%</span>
                    </div>
                    <div className="statistics__progress__div">
                        <div className="home__bar">
                        <ProgressBar now={60} />
                        </div>
                        <div>
                        <ProgressBar now={60} />
                        </div>
                    </div>

                    <div className="statistics">
                        <span>4</span>
                        <span>Offsides</span>
                        <span>4</span>
                    </div>
                    <div className="statistics__progress__div">
                        <div className="home__bar">
                        <ProgressBar now={60} />
                        </div>
                        <div>
                        <ProgressBar now={60} />
                        </div>
                    </div>

                    <div className="statistics">
                        <span>5</span>
                        <span>Corners</span>
                        <span>4</span>
                    </div>
                    <div className="statistics__progress__div">
                        <div className="home__bar">
                        <ProgressBar now={60} />
                        </div>
                        <div>
                        <ProgressBar now={60} />
                        </div>
                    </div>
                </div>
                <div className="Table__statistics">
                    <div className="Table__statistics__top">
                        <span className="table__listing">Table Listing</span>
                        <span className="full__table">Full Table</span>
                    </div>
                    <hr />
                    <div>
                        <table className='league__table'>
                            <tr>
                                <th><img src={UeafaIcon}/></th>
                                <th> UEFA Champions League</th>
                                <th><span>P</span></th>
                                <th><span>Pts</span></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><img src={Teamicon}/> Manchester United</td>
                                <td>17</td>
                                <td>44</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><img src={Teamicon1}/> Arsenal</td>
                                <td>17</td>
                                <td>44</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="other__fixture__div">
                    <div className="other__fixture__top">
                        Other Fixture
                    </div>
                    <div className="fixtures__live">
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
            </div>
        );
    }
}

export default LiveMatchStats;