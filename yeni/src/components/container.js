import React from 'react'
import Header from './header';
import Aciklama from './aciklama';

const Container = (props) => {
  return (
    <div style={{width:"400px", height:"400px",border:"2px solid black",margin:"0px auto"}}>

        <Header baslik ={props.title}> Merhaba ben child componentten geliyorum..</Header>
        <Aciklama numara = {props.number}> Merhaba ben diğer child componentten geliyorum...</Aciklama>

      
        
        
  </div>
  )
}

export default Container;
