import React from 'react'

const child = (props) => {
  return (
    <div>
      {props.numara}
      {props.children}
    </div>
  )
}

export default child;
