import React, { Component } from 'react';
import Ads from '../Ads/Ads';
import Navigation from '../Menu/Nav';
import Footer from '../Menu/footer';
import TopLeagues from '../TopLeagues/TopLeagues';
import Following from '../Following/Following';
import ExtraTeam from '../ExploreTeams/ExtraTeam';

class ExploreTeams extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <Ads />
                <TopLeagues />
                <Following />
                <ExtraTeam />
                <Footer />
            </div>
        );
    }
}

export default ExploreTeams;