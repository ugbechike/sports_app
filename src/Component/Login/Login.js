import React, { Component } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BASE_API } from '../../api';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import FaceBookLogin from "../../Assets/facebook-login-png-3.png";
import GoogleLogin from "../../Assets/login-with-google-png-5.png";
import "./Login.css";



class Login extends Component {
    state={}

    handleFormChyange=(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        },()=>console.log(this.state))
    }

    handleFormSubmit=(e)=>{
        var data = this.state;
        console.log("data to post",data)
        e.preventDefault()
        Axios.post(`${BASE_API}/login`, data).then(
            (res)=>{
                if(res.status === 200 && res.statusText == "OK"){
                    console.log("res",res)
                    localStorage.setItem('user', res.data._token);
                    // I am pushing the user that is logged in to the competition page for now
                    // TODO: allow user to follow teams 
                    this.props.history.push("/competitions")
                }
            }
        )
    }

    render () {
        return (
            <Container style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", padding:"0 24vw"}}>
                <Card style={{padding:"1em"}}>
                <form onSubmit={this.handleFormSubmit}>
                    <Row>
                        <Col md={6} className="auth__page__col">
                            <img src={FaceBookLogin} alt="faceBook login" className="socialmedia__auth__img"/>
                        </Col>

                        <Col md={6} className="auth__page__col">
                            <img src={GoogleLogin} alt="Google login" className="socialmedia__auth__img"/>
                        </Col>
                        
                        <Col md={6}>
                            <input className="auth__input" type="text" placeholder="email" id="email" onChange={this.handleFormChyange}/>
                        </Col>
                        
                        <Col md={6}>
                            <input className="auth__input" type="password" placeholder="password" id="password" onChange={this.handleFormChyange}/>
                        </Col>

                        <Col md={12} className="auth__page__col" style={{fontSize:"9px"}}>
                        <div className="sub_text__login__wrapper">
                            <label style={{ color: "#8C8986" }}>
                                Dont have an account?
                            </label>
                            <Link to='/auth/signup'>
                                <label style={{cursor:"pointer", color: "#D1A683", marginLeft: "5px" }}>
                                    Register Now
                            </label>
                            </Link>
                        </div>
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

export default Login