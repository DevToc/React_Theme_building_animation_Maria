import React from 'react';

import "./TestItem.scss"

const TestItem = ({avatarurl,name}) => {
  return (
    <div className='testitem'>
      <div className="avatar">
        <img src={avatarurl} alt="" />
      </div>
      <p className='text-center'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
      </p>
      <h4>{name}</h4>
      <p>Founder at Brand</p>
    </div>
  );
}
 
TestItem.propTypes = {};
 
export default TestItem;