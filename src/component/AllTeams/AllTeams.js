import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./AllTeams.css";

const AllTeams = () => {
    const [teams,setTeams] = useState([]);
    const [searchText,setSearchText] = useState('');

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
        .then(res=> res.json())
        .then(data=>{
            setTeams(data?.teams)});
    },[searchText]);

    const handleOnChange = e => {
        setSearchText(e.target.value);
    }
    return (
        <div className="teams__container">
            <h1>Our Teams</h1>
            <div className="search__container">
                <input onChange={handleOnChange} type="search" name="search"
                className="p-1"
                placeholder="Search Teams" id="" />
                <button className="btn btn-danger mx-2 mb-1 p-1">Search</button>
            </div>
            <div className="teams">
                <div className="row">
                    {
                        teams?.map(team => <div 
                        key={team.idTeam}
                        className="col-md-4">
                            <div className="cart">
                                <div className="badge__img">
                                    <img className="w-50" src={team.strTeamBadge} alt="" />
                                </div>
                                <h1>{team.strTeam}</h1>
                                <p>{team.strLeague}</p>
                                <p>{team.strCountry}</p>
                                <p>{team.strGender}</p>
                                <Link to={`/details/${team.idTeam}`}>
                                <button className="btn btn-success">Details</button>
                                </Link>
                            </div>
                        </div> )}
                </div>
            </div>
        </div>
    );
};

export default AllTeams;