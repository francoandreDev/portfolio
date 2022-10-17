import React from 'react';
import Config from '../config/Config';
import Footer from '../footer/Footer';
import NavBar from '../header/NavBar';
import Main from '../main/Main';

const ShowHome = () => {
    return (
        <>
            <NavBar />
            <Main/>
            <Footer />
            <Config />
        </>
    );
};

export default ShowHome;