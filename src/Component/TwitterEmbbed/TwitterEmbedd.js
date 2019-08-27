import React, { Component } from 'react';
import './TwitterEmbedd.css';

class TwitterEmbedd extends Component {
    render() {
        return (
            <div className="twitter__wrapper">
            <div>
                <h4>Tweets <small>by</small> <span className="twitter_name">@sportive23</span> </h4>
            </div>
                <div >
                    <iframe className="embedd_frame" src="https://www.twitter.com"></iframe>
                </div>
            </div>
        );
    }
}

export default TwitterEmbedd;