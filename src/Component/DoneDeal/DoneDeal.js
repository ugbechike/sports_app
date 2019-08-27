import React, { Component } from 'react';
import buy from '../../Assets/buy.png';
import napoli from '../../Assets/napoli.png';
import barca from '../../Assets/barca.png';
import { Table, DropdownButton, Dropdown, Item } from 'react-bootstrap';
import './DoneDeal.css';

class DoneDeal extends Component {
    constructor() {
        super()
        this.state = {
            Deal: [
                { id: "1", date: "8th Dec", from: <img className="club_deal_image" src={napoli} alt="from" />, to: <img className="club_deal_image" src={barca} alt="from" />, playerName: "Ronaldo", price: "18", },
                { id: "2", date: "8th Dec", from: <img className="club_deal_image" src={napoli} alt="from" />, playerName: "Messi", price: "14", to: <img className="club_deal_image" src={barca} alt="from" />, },
                { id: "3", date: "8th Dec", from: <img className="club_deal_image" src={napoli} alt="from" />, playerName: "Suarez", price: "13", to: <img className="club_deal_image" src={barca} alt="from" />, },
                { id: "4", date: "8th Dec", from: <img className="club_deal_image" src={napoli} alt="from" />, playerName: "Aguero", price: "10", to: <img className="club_deal_image" src={barca} alt="from" />, },
                { id: "5", date: "8th Dec", from: <img className="club_deal_image" src={napoli} alt="playerImg" />, playerName: "Mikel", price: "8", to: <img className="club_deal_image" src={barca} alt="from" />, },
            ]
        }
    }

    dealsDone = () => {
        let { Deal } = this.state
        return (
            Deal.map(result => {
                return (
                    <tr key={result.id}>
                        <td>{result.date}</td>
                        <td>{result.playerName}</td>
                        <td className="deal_table_cover">
                            <div className="deal_image_cover">{result.from}</div>
                            <div><img src={buy} alt="buy" /></div>
                        </td>
                        <td className="deal_image_to">{result.to}</td>
                        <td className="points">€{result.price}</td>
                    </tr>

                )
            })
        )
    }

    render() {
        return (
            <div>
                <div className="scorer_content">
                    <select className="select">
                        <option value="0">All Leagues</option>
                        <option value="1">La Liga</option>
                        <option value="2">Bundesliga</option>
                        <option value="3">Barcley</option>
                    </select>
                </div>
                <Table responsive striped  hover>
                    <thead >
                        <tr>
                            <th>Date</th>
                            <th>Player</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dealsDone()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default DoneDeal;