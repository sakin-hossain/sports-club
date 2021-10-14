import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import female from "../../images/female.png";
import male from "../../images/male.png";
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import "./TeamDetails.css";

const TeamDetails = () => {
    const {teamId} = useParams();
    const [details, setDetails] = useState({});

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res=> res.json())
        .then(data=> setDetails(data.teams[0]));
    },[]);
    return (
        <div className="details">
            <MenuBar/>
            <div className="team-details container">
                <div className="male-female">
                    {details.strGender === "Male" ?
                        <img className="w-50" src={male} alt="" /> :
                    <img className="w-50" src={female} alt="" />}
                </div>
                    <div className="row pt-5 d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="logo">
                                <img className="w-50" src={details?.strTeamBadge} alt="" />
                            </div>
                            <h1>{details.strLeague}</h1>
                            <p>{details.strStadiumDescription}</p>
                        </div>
                        <div className="col-md-6">
                            <h2>{details.strAlternate}</h2>
                            <p>{details.strDescriptionEN}</p>
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>
    );
};

export default TeamDetails;