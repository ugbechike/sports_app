import React, { Component } from 'react';
import TopLeagues from '../TopLeagues/TopLeagues';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import Ads from '../Ads/Ads';
import Following from '../Following/Following';
import International from '../International/International';


class CompetitionTeams extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Ads />
                <TopLeagues />
                <Following />
                <International />
                <Footer />
            </div>
        );
    }
}

export default CompetitionTeams;