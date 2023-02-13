import React from 'react';
import "./Button.scss" 

const Button = ({title}) => {
  return (
    <button className='btn-normal'>
      {title}
    </button>
  );
}
 
 
export default Button;