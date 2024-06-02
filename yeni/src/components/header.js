import React from 'react'
import aciklama from './aciklama';
import resim1 from '../img/cicek.jpg';

const header = (props) => {
  return (
    <div style={{width:"inherit",height:"50px",backgroundColor:"black",color:"white"}}>
        {props.baslik}
        {props.children}
      
        <div>
    <img src={resim1} className='resim'></img>
    </div>
      
    </div>
   
  )
}

export default header;
