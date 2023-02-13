import React from 'react';
import { Stack } from 'react-bootstrap';
 
import "./NewsItem.scss" 



const NewsItem = ({imageUrl}) => {
  return (
    <Stack className=' news-item'>
      <div className="news-image">
          <img src={imageUrl} alt="" />
      </div>
      <div className="news-content">
          <h3>
            <a href="" className='no-style'>Styling White Jeans after Labor Day</a>
          </h3>
          <p>
            By admin
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className='btn-readmore'>
              <a href="" className='no-style'>Read More</a>
          </button>
      </div>
    </Stack>
  );
}
 
 
export default NewsItem;