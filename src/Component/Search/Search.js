import React, { Component } from 'react';
import './Search.css';
import SearchIcon from '../../Assets/search.png';

class Search extends Component {
    render() {
        return (
            <div className="search__wrapper">
                <form>
                    <input className="search__input" type="text" id="search" placeholder=" search team, competition or nation" />
                    <img className="search__icon" src={SearchIcon} alt="icon"/>
                </form>
            </div>
        );
    }
}

export default Search;