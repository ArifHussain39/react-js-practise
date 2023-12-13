import React, { useState} from 'react'
import './App.css';


export default function Hooks() {

    const [heading, setHeading] =  useState('Hooksaaaaa');

    const changeH1 = () => {
        setHeading('Hooks are awesome');
    }

    return (
        <div className='Heading'>
            <h1> {heading} </h1>

            <button onClick={changeH1}>Click me</button>
        </div>
    )
}

