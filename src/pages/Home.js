import React from 'react';
import Hero from './../components/Hero';
import Banner from './../components/Banner';
import Servicers  from './../components/Servicers';
import FeatureRooms  from './../components/FeatureRooms';
import { Link } from 'react-router-dom';

 const Home = () => {
    return (
        <>
        <Hero hero="defaultHero">
            <Banner title="Luxuries Rooms" subtitle = "Dulux Rooms start from $25">
                <Link to="rooms" className="btn-primary">Check Rooms</Link>
            </Banner>
        </Hero>
        <Servicers />
        <FeatureRooms />
        </>
    )
}

export default Home;