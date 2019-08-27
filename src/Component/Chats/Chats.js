import React, { Component } from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import ProfileIcon from '../../Assets/profile__icon.svg';

import './Chats.css'


class Chats extends Component{


    render(){
        return(
            <div>
               <Row>
                   <Col className="chat__top__div" md={12}>
                        <div className="chat__profile__div">
                            <img src={ProfileIcon}/>
                            <span>KENE OHIERI</span>
                        </div>
                        <div>
                        <form className="text_area__div">
                            <textarea type="text" placeholder="Write a reply..."/>
                            <button>send</button>
                        </form>
                        </div>
                   </Col>
               </Row>

               <Row>
                   <Col md={12}>
                        <p>
                            <span>luke:  </span>Once our visual design and branding were established, we plugged our screens 
                            into an interactive prototype using Invision. We were then able to transfer the 
                            Invision project over to our dev team to start implementation of our designs
                            into a working “test flight” version of the app for user testing.
                        </p>
                        <div>
                            <span>23s ago</span>
                        </div>
                   </Col>
               </Row>
            </div>
        );
    }
} 

export default Chats