import React from 'react';
import AllTeams from '../AllTeams/AllTeams';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AllTeams/>
            <Footer/>
        </div>
    );
};

export default Home;