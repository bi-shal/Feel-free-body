import React from 'react';
import './Dataload.css'

const Dataload = (props) => {
    const{addToCart,data}=props
    const{img,name,age,time}=data
    // console.log(props);



    return (
        <div>
            
            <div className='data-load'>
            
            <img src={img} alt="" />
            <h4 className='for-time'> {name}</h4>
            <p className='for-age'>For Age : {age}</p>
            <p className='for-time'>Time Required : {time}</p>
            
            <button onClick={()=>addToCart(data)} className='add-btn'>
                <p>Add to list</p>
            </button>
            
        </div>
        </div>
    );
};

export default Dataload;