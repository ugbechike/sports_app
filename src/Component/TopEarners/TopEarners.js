import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class TopEarners extends Component {
    constructor(){
        super()
        this.state ={
            leadEarners: [
                {id: "1",  users: "Chike", games: "18", points: "12"},
                {id: "2",  users: "Oga Sab", games: "14", points: "12"},
                {id: "3",  users: "Kene", games: "13", points: "12"},
                {id: "4",  users: "Eby", games: "10", points: "12"},
                {id: "5",  users: "Sandra", games: "8", points: "12"},
                {id: "6",  users: "Kene", games: "13", points: "12"},
                {id: "7",  users: "Eby", games: "10", points: "12"},
                {id: "8",  users: "Sandra", games: "8", points: "12"},
                {id: "9",  users: "Kene", games: "13", points: "12"},
                {id: "10",  users: "Eby", games: "10", points: "12"},
                {id: "11",  users: "Sandra", games: "8", points: "12"},
            ]
        }
    }

    gameEarners = () => {
        let {leadEarners} = this.state
        return (
            leadEarners.map(result => {
                return(
                    <tr key={result.id}>
                        <td>
                            {result.id}
                        </td>
                        <td>{result.users}</td>
                        <td>{result.games}</td>
                        <td>{result.points}</td>
                    </tr>

                )
            })
        )
    }

    render() {
        return (
            <div className="earners__wrapper">
                <Table responsive>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Users</th>
                            <th>Games Predicted</th>
                            <th>Total Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.gameEarners()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TopEarners;