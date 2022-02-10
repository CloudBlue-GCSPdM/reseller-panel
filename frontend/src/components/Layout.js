import React, {useState} from 'react';
import ProductCard from './ProductCard';
import Container from './Listings/Container'


//add hooks to select one, or change to class component for callback function.


const Layout = ({props}) => {

    ///default values to build flow
    const template = {
        graph: "https://bulma.io/images/placeholders/1280x960.png",
        pic : "https://bulma.io/images/placeholders/96x96.png",
        description: "",
        published_at : "-date here-",
        name: "Selected product here",
        id: "" 
      }

    const [selectedProduct, setSelectedProduct] = useState(template)
    const {products} = props;

    const handleProductClick = (product) =>{
       
        setSelectedProduct({
            graph: "https://bulma.io/images/placeholders/1280x960.png",
            pic : `https://connect.cloud.im${product.icon}`,
            description: product.short_description,
            published_at : product.published_at.split("T")[0],
            name: product.name,
            id: product.id 
          })
    }

    return <div>
        <div className="columns is-desktop">
            <div className="column"></div>
            <div className='column is-three-fifths'>
                <div className="columns is-desktop">
                    <div className="column"> <Container props={{ products, "select": handleProductClick }} /></div>
                    <div className="column "><ProductCard props={{ selectedProduct }} /></div>
                </div>
            </div>
            <div className="column"></div>
        </div>
        <br/>
        <br/>
        <br/>
    </div>
};

export default Layout;
