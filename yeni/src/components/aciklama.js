import React from 'react'
import Child from './child';

const aciklama = (props) => {
  return (
    <div>
      {props.children}
      <Child number = {props.numara} >Merhaba ben son child componentten geliyorum..!</Child>
      {props.title}
      {props.numara}
      
    </div>
  )
}

export default aciklama;
