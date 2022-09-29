import React, { useState } from 'react';
import Addbreak from '../Addbreak/Addbreak';
import './Counter.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Counter = (props) => {
    const {dataas}=props;
    




   let time =0;
   for(const x of dataas){
    time = time+x.time;
   }

   //break time load
   let breakData=[
    {value:10},{value:20},{value:30},{value:40}
   ];

const [valuee,setValue]=useState([0])
// console.log(valuee);

   const breakTime=(value)=>{
    setValue(value)

    // console.log(value)
    let breakTime={};

const storedCart = localStorage.getItem('break_time');
if(storedCart){
    breakTime = JSON.parse(storedCart);
}

const quantity = breakTime[value];
    if(quantity){
        const newQuantity = quantity + 1;
        breakTime[value] = newQuantity;
    }
    else{
        breakTime[value] = 1;
    }
    localStorage.setItem('break_time', JSON.stringify(breakTime));
}



const notify = () => toast("Wow You Are done !!!");

    return (
        <div >
             <h3>Add Break </h3>
            <div className='addBreak'>
           
                <div className='addbreak-child'>
                {
                    breakData.map(tata=> <Addbreak
                    tata={tata}
                    key={tata.value}
                    breakTime={breakTime}
                    ></Addbreak>)
                }
                </div>
            </div>
            <h2 className='exDetail'>Exercise Details</h2>
            <h3 className='exDetail'>Exercise time : {time}</h3>
            <h3 className='exDetail'>Break time : {valuee}</h3>
            <button onClick={notify} className='tost'>Activity Completed</button>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Counter;