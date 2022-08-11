import React from 'react';
import Canva from '../Febric/Canva';
import Draw from '../Febric/Draw';

const Home = () => {


    return (
        <div className=' mx-16'>
            <h3 className='text-center text-xl mt-8'>Please Draw now</h3>
            <Canva />

            <Draw />

        </div>
    );
};

export default Home;