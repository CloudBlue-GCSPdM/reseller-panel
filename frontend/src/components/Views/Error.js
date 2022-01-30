import React from 'react';
import Title from '../Title';
import cat from "../../pics/404_icon.png"


const Error = () => {
    return <div>

        <Title props={{ "title": "404", "subtitle": "This is an error page, or you have arrived somewhere under construction..." }}></Title>
        
        <div className='container'>
            <img src={cat}></img>
        </div>
    </div>;
};

export default Error;