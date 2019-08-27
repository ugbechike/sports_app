import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Teamicon from "../../Assets/hudersfield.svg";
import Teamicon1 from "../../Assets/chelsea.svg";
import './featuredGames.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class FeaturedGame extends Component {
   

    render() {
            return (
                <div>
                    <div className="navigate">
                        <NavLink
                            style={{ borderBottom: "3px solid #FF3333", display: "block", }}
                            to="/fixtures"><span>FIXTURES</span></NavLink>
                        <NavLink to="/highlights"><span>HIGHLIGHTS</span></NavLink>
                    </div>
                    <h4>6th, December, 2018</h4>

                    <div className="fixture__league">
                        Premier League
                </div>
                    <div className="fixtures__live">
                        <div>
                            <span>West Ham United</span>
                            <img src={Teamicon} />
                        </div>
                        <div>
                            <div className="score__div">
                                <span>3</span>
                                <span> : </span>
                                <span>2</span>
                            </div>
                        </div>
                        <div>
                            <img src={Teamicon1} />
                            <span>Chelsea</span>
                        </div>
                    </div>

                    <div className="fixture__league">
                        Premier League
                </div>
                    <div className="fixtures__live">
                        <div>
                            <span>West Ham United</span>
                            <img src={Teamicon} />
                        </div>
                        <div>
                            <div className="score__div">
                                <span>3</span>
                                <span> : </span>
                                <span>2</span>
                            </div>
                        </div>
                        <div>
                            <img src={Teamicon1} />
                            <span>Chelsea</span>
                        </div>
                    </div>
                </div>
            );
    }
}

FeaturedGame = withRouter(FeaturedGame);

export default FeaturedGame;

