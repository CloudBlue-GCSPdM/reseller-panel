import React from 'react';
import ProductCard from './ProductCard';
import Container from './Listings/Container'

//add hooks to select one, or change to class component for callback function.

const Layout = ({props}) => {
    const {products} = props;
    // console.log("product here", products)
    return <div>
            <div className="columns is-desktop">
            <div className="column"></div>
            <div className="column is-two-fifths"> <Container props={{products}} /></div>
            <div className="column"><ProductCard /></div>
            <div className="column"></div>
        </div>
        <br/>
        <br/>
        <br/>
    </div>
};

export default Layout;
