import React, { Component } from 'react'
import Axios from 'axios';

class AuthVerifyPage extends Component {
    state={}

    componentDidMount(){
        console.log(this.props.location.state)
        let authdata = this.props.location.state.socialAuth;
        this.setState({
            data : authdata
        })
    }
    confirmAuth = () =>{
        let socialAuthId = this.state.data._id
        console.log("don show",socialAuthId)
        Axios.post(`https://sportive-api-tunnel.herokuapp.com/socialRegister`, {socialAuthId:socialAuthId, data:{}}).then((res)=>{
            if(res.status === 200 && res.statusText == "OK"){
                console.log("res",res)
                localStorage.setItem('user', res.data._token);
                this.props.history.push({pathname: "/home", data: res})
            }else{
                console.log(res)
            }
        })
    }
    render () {
        return (
            <div>
                welcome to our App
                <button  onClick={this.confirmAuth}>enter the app</button>
            </div>
        )
    }
}

export default AuthVerifyPage