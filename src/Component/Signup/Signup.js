import React, { Component } from 'react';
import { Container, Row, Col, Alert, Card } from 'react-bootstrap';
import { BASE_API } from '../../api';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import FaceBookLogin from "../../Assets/facebook-login-png-3.png";
import GoogleLogin from "../../Assets/login-with-google-png-5.png";
import Twitter from "../../Assets/twitter-login.png";
import './Signup.css'


class Signup extends Component {
    state={}


    handleFormChyange=(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        },()=>console.log(this.state))
    }

    handleFormSubmit=(e)=>{
        var data = this.state
        console.log("data to post",data)
        e.preventDefault()
        Axios.post(`${BASE_API}/signup`, data).then(
            (res)=>{
                console.log("res",res)
                if(res){
                    return <Alert variant={"success"}>
                    This is a alert—check it out!
                    </Alert>
                }
                setTimeout(function(){ alert("Hello"); }, 3000);
            }
        )
    }

    socialMediasSignup = (type) =>{
        console.log(type)
        var redirectURL = `https://sportiva.herokuapp.com/social-auth`;
        var socialMediaAuthUrl = `https://auth.s4ohub.com/auth/${type}?appName=sportive&redirectURL=${redirectURL}`;
        if(type =="facebook"){
            return (
                <a href={socialMediaAuthUrl}>
                    <img src={FaceBookLogin} alt="faceBook login" className="socialmedia__auth__img"/>
                </a>
            ) 
        } 
        if(type =="google"){
            return (
                <a href={socialMediaAuthUrl}>
                    <img src={GoogleLogin} alt="faceBook login" className="socialmedia__auth__img"/>
                </a>
            ) 
        } 
        if(type =="twitter"){
            return (
                <a href={socialMediaAuthUrl}>
                    <img src={Twitter} alt="faceBook login" className="socialmedia__auth__img"/>
                </a>
            ) 
        } 
    }

    render () {
        return (
            <Container style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", padding:"0 24vw"}}>
                <Card style={{padding:"1em"}}>
                <form onSubmit={this.handleFormSubmit}>
                    <Row>
                    <Col md={6} className="auth__page__col">
                            {this.socialMediasSignup(`facebook`)}
                        </Col>

                        <Col md={6} className="auth__page__col">
                            {this.socialMediasSignup(`google`)}
                        </Col>

                        <Col md={6} className="auth__page__col">
                            {this.socialMediasSignup(`twitter`)}
                        </Col>
                        <Col md={6} className="auth__page__col">
                            <input className="auth__input" type="text" placeholder="First name" id="firstName" onChange={this.handleFormChyange}/>
                        </Col>
                        <Col md={6} className="auth__page__col">
                            <input className="auth__input" type="text" placeholder="Last name" id="lastName" onChange={this.handleFormChyange}/>
                        </Col>
                        <Col md={6} className="auth__page__col">
                            <input className="auth__input" type="text" placeholder="Email" id="email" onChange={this.handleFormChyange}/>
                        </Col>
                        <Col md={6} className="auth__page__col">
                            <input className="auth__input" type="text" placeholder="Phone" id="phone" onChange={this.handleFormChyange}/>
                        </Col>
                        <Col md={12}>
                            <input className="auth__input" type="password" placeholder="Password" id="password" onChange={this.handleFormChyange}/>
                        </Col>
                        <Col md={12} className="auth__page__col" style={{fontSize:"9px"}}>
                        <Link to="/login"><span className="sub_text__login">Already a member? Sign in please</span></Link>
                        </Col>
                        <Col md={12} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <button className="auth__btn">submit</button>
                        </Col>
                    </Row>
                </form>
                </Card>
            </Container>
        )
    }
}

export default Signup