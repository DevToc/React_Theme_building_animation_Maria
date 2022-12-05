import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import "./Banner.scss" 

const Banner = () => {
  return (
    <div className='banner d-flex align-items-center'>
      <Container className=''>
        <Stack gap={3} direction='vertical'>
          <p>New Inspiration 2020</p>
          <h2>CLOTHING MADE FOR YOU!</h2>
          <h4>Trending from men and woman style collection</h4>
          <Stack className='shop-gender'  gap={4} direction='horizontal'   >
            <button className='btn-women'>
                SHOP WOMEN's
            </button>
            <button className='btn-men'>
            SHOP MEN's
            </button>
          </Stack>
        </Stack>
      </Container>
    </div>  
  );
}
 
 
export default Banner;