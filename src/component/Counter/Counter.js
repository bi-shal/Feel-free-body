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

const [valuee,setValue]=useState([])
   const breakTime=(value)=>{
    setValue(value);
}



const notify = () => toast("Wow so easy!");

    return (
        <div >
             <h3>Add Break </h3>
            <div className='addBreak'>
           
                <div className='addbreak-child'>
                {
                    breakData.map(tata=> <Addbreak
                    tata={tata}
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