import React, { useEffect, useState } from 'react';
import Counter from '../Counter/Counter';
import Dataload from '../Dataload/Dataload';
import './Exercise.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Exercise = () => {
    const [allData,setAlldata]=useState([]);

    const[dataas,setData]=useState([]);


    useEffect(()=>{
        fetch(`data.json`)
        .then(res=> res.json())
        .then(data=> setAlldata(data))
    },[])


    const addToCart=(data)=>{
        const newData = [...dataas,data]
        setData(newData)

    }

    return (
        <div className='exer-cise'>

        <div>
        <FontAwesomeIcon icon={faCoffee} size="lg" />
                <h2>Feet To Body ...</h2>
                <h4>Fitness Treet</h4>
            <div className="data-load-left">                
                  {
                    allData.map(data=> <Dataload
                    key={data.id}
                    data={data}
                    addToCart={addToCart}
                    ></Dataload>)
                   }
            </div>
        </div>

            <div className="counter-right">
                <h1 className='name'>Nahid Hossain</h1>
                <h4 className='name'>Fitness Worker , <span>Cosmos Group</span></h4>
                <Counter
                dataas={dataas}
                ></Counter>
            </div>
        </div>
    );
};

export default Exercise;