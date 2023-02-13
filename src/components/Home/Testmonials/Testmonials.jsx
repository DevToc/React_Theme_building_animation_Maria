import React from 'react';
import { Container } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

import "./Testmonials.scss"
import TestItem from './TestItem';

const datas = [
  {
  avatarurl:"static/assets/img/testmonials/1.jfif",
  name:"Jason Jisan"
  },
  {
    avatarurl:"static/assets/img/testmonials/2.jfif",
    name:"Jason Shabbir"
    },
    {
      avatarurl:"static/assets/img/testmonials/3.jfif",
      name:"Jason Statham"
      }

]

const Testmonials = () => {
  return (
    <section className='testmonials'>
      <Container>
      <OwlCarousel className="owl-theme" loop  nav items={1} >
        {datas.map((data) => {
          // return <ImageOverlay imageurl={image}></ImageOverlay>
          return (
            <TestItem avatarurl={data.avatarurl} name={data.name}></TestItem>
            
          )
        })}
      </OwlCarousel>
      </Container>
    </section>
  );
}
 
 
export default Testmonials;