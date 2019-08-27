import React, { Component } from 'react'

class socialAuth extends Component {
    state = {}
    componentDidMount() {
        let res = this.props.location.search
        console.log(res)
        let authStatus = res.includes("success=true")
        if (authStatus) {
            let dataLength = res.search("data=") + 5
            let data = res.slice(dataLength)
            let response = JSON.parse(atob(data))
            console.log(response)
            if (response._token != undefined) {
                localStorage.setItem('user', response._token);
                localStorage.setItem('name', response.firstName);
                localStorage.setItem('usericon', response.avatar.url);
                this.props.history.push({ pathname: "/home", state: response })
            } else {
                this.props.history.push({ pathname: "/auth-verify", state: response })
            }

        } else {
            this.props.history.push({ pathname:"/", state:"could not authenticate user" })
        }
    }
    render() {
        return (
            <div>
                Go back to loging
            </div>
        )
    }
}

export default socialAuth