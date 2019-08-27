import React, { Component } from 'react';
import Avatar from '../../Assets/Avatar.png';
import './TopScorer.css';
import {Table} from 'react-bootstrap';

class TopScorer extends Component {
    constructor(){
        super()
        this.state ={
            leagueScorer: [
                {id: "1", playerImg: <img className="avatar_image" src={Avatar} alt="playerImg"/>, playerName: "Ronaldo", matches: "18", goals: "12"},
                {id: "2", playerImg: <img className="avatar_image" src={Avatar} alt="playerImg"/>, playerName: "Messi", matches: "14", goals: "12"},
                {id: "3", playerImg: <img className="avatar_image" src={Avatar} alt="playerImg"/>, playerName: "Suarez", matches: "13", goals: "12"},
                {id: "4", playerImg: <img className="avatar_image" src={Avatar} alt="playerImg"/>, playerName: "Aguero", matches: "10", goals: "12"},
                {id: "5", playerImg: <img className="avatar_image" src={Avatar} alt="playerImg"/>, playerName: "Mikel", matches: "8", goals: "12"},
            ]
        }
    }

    matchScorer = () => {
        let {leagueScorer} = this.state
        return (
            leagueScorer.map(result => {
                return(
                    <tr key={result.id}>
                        <td className="avatar_club_data">
                            <div className="avatar_image_cover">{result.playerImg}</div>
                            <div><p>{result.playerName}</p></div>
                        </td>
                        <td className="points">{result.matches}</td>
                        <td className="points">{result.goals}</td>
                    </tr>

                )
            })
        )
    }

    render() {
        return (
            <div className="scorer__wrapper">
                <div className="scorer_content">
                    <h4>Top Scorer</h4>
                <hr/>
                </div>
                <Table responsive borderless={true}>
                    <thead >
                        <tr>
                            <th>PLAYERS</th>
                            <th>MATCHES</th>
                            <th>GOALS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.matchScorer()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TopScorer;