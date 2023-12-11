import React, { Fragment } from 'react';
import Header from '../../Components/Header';
import GetAllProduct from '../../Components/GetAllProduct';

function Home() {
    return (
        <Fragment>
            <Header />
            <GetAllProduct />
        </Fragment>
    );
};

export default Home;