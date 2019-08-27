import React, { Component } from 'react';
import Search from '../Search/Search';
import Juvey from '../../Assets/juvey.png'
import Barca from '../../Assets/barca.png'
import Napoli from '../../Assets/napoli.png'
import Mancity from '../../Assets/mancity.png'
import { Container, Row, Col, Image } from 'react-bootstrap';
import './International.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { BASE_API } from '../../api';



class International extends Component {
    state={};

    componentDidMount(){
        var token = localStorage.getItem("user")
        let header = {
            headers: {
                "authorization": `Bearer ${token}`,
                'Content-Type': 'application/json',

            }
        }
        Axios.get(`${BASE_API}/leagues`).then(
            (res)=>{
                this.setState({
                    leagues: res.data
                })
            }
        )
        Axios.get(`${BASE_API}/teams`).then(
            (res)=>{
                console.log(res.data)
                this.setState({
                    clubs: res.data
                })
            }
        )
    }

    renderLeague = () => {
        let {leagues} = this.state
        if(leagues==undefined||leagues==null){
            return(
                <h4>
                    loading...
                </h4>
            )
        }else{
            return(
                leagues.map((league, index) => (
                <Link to = {{pathname:`/comp-news/${league.league_id}`, state:{comp_Id:league.league_id, com_name:league.name}}}>
                <Row key={index} className="international">
                    <Col xs={6} md={6}>
                        {league.name}
                    </Col>
                    <Col xs={6} md={6} className="arrows">
                        <span>&gt;</span>
                    </Col>
                </Row>
                    </Link>
            ))
            );
        }
}
renderClubs = () => {
    let {clubs} = this.state
    if(clubs==undefined || clubs==null){
        return <h5>Loading...</h5>
    }else{
        return (
            clubs.map((club, index) => (
                <Row key={index} className="international">
                    <Col xs={6} md = {6} >
                    <Image width={40} roundedCircle src={club.logo_path}/>    {club.name}
                    </Col>
        
                    <Col xs={6} md = {6} className="arrows" >
                    <span>&gt;</span>
                    </Col>
                </Row>
            ))
            )
    }
}
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                    <div className="list__head"><span>Competitions</span></div>
                    {this.renderLeague()}
                    <div className="list__head"><span>Clubs</span></div>
                    {this.renderClubs()}
                    <div className="latest__align">Load More</div>
                    </Col>
                    <Col xs={12} md={6}>
                    {/* <Search /> */}
                    </Col>
                </Row>
                
            </Container>
        );
    }
}

export default International;