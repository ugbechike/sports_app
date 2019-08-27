import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './MatchTable.css';

class MatchTable extends Component {
    constructor() {
        super()
        this.state = { }
    }

    matchLeague = () => {
        let { leagueTable } = this.state
        console.log("passed the condition test", this.props.standings)
        if(this.props.standings==undefined||this.props.standings==null){
           return <h4>Loading...</h4>
        }
        else{
            let {standings} = this.props;
            return (
                standings.map(result => {
                    return (
                        <tr key={result.id}>
                            <td>{result.position}</td>
                            <td className="euro_club_data">
                                <div className="euro_image_cover">{result.logo}</div>
                                <div><p>{result.clubName}</p></div>
                            </td>
                            <td>{result.gamePlayed}</td>
                            <td>{result.matchWon}</td>
                            <td>{result.matchDraw}</td>
                            <td>{result.matchLost}</td>
                            <td>{result.goalDifference}</td>
                            <td>{result.points}</td>
                        </tr>
    
                    )
                })
            )
        }
    }


    render() {


        return (
            <div>
                {!this.props.league == undefined ? "" : <div className="table_header"><h3 className="table__content">Round {this.props.round}</h3></div>}
                <Table responsive>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Teams</th>
                            <th>P</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GD</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.matchLeague()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MatchTable;