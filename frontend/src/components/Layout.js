import React from 'react';
import ProductCard from './ProductCard';
import Container from './Listings/Container'


const Layout = () => {
  
    return <div>
            <div className="columns is-desktop">
            <div className="column"></div>
            <div className="column is-two-fifths"> <Container/></div>
            <div className="column"><ProductCard /></div>
            <div className="column"></div>
        </div>
        <br/>
        <br/>
        <br/>
    </div>
};

export default Layout;
