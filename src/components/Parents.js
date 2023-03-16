import React, { useContext, useState } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';
import LongForm from './LongForm';

const Parents = () => {
     const  {count}= useContext(COUNTER_CONTEXT);
     console.log(count)
    return (
        <div >
            <h1>Count: {count}</h1>
            <Child></Child>
            <LongForm></LongForm>
        </div>
    );
};

export default Parents;