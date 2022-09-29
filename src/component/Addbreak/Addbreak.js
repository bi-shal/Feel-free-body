import React from 'react';
import './Addbreak.css'

const Addbreak = (props) => {
    // console.log(props)
    const {breakTime,tata}=props
    const {value}=tata;
    

    
   
    return (
        <div className='break-parent'>
            
            <div className='break'>
            
            <button onClick={()=>breakTime(value)}>
                <p>{value}s</p>
            </button>
            
          
        </div>
        </div>
    );
};

export default Addbreak;