import React from 'react';
import SubTitle from './SubTitle';
import Loading from './Loading';

const Center = ({props}) => {

    const {subtitle, loading} = props;

    return <div >
        <div style={{ textAlign: 'center', justifyContent: 'center', display: 'block' }}>
        <SubTitle props={{ "subtitle": subtitle }} />
        <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}> 
            {loading ? <Loading /> : <br />}
            </div>
        </div>
    </div>;
};

export default Center;
