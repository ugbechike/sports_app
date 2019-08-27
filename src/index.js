import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Index = () => {
    return (

        <Container fluid={true} style={{padding:0, margin:0}}>
            <BrowserRouter>
            <Routes />
        </BrowserRouter>
        </Container>
    )
}
ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
