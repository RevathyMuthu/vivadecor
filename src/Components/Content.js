import React from 'react'
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import Row5 from './Row5';
import Subscription from './Subscription';

const Content = () => {
    return (

        <div style={{ height: '620vh', width: '220vh', padding: '20px' }}>
            <Row1 />
            <Row2 />
            <Row3 />
            <Row4 />
            <Row5 />
            <Subscription />
        </div >



    )
}

export default Content