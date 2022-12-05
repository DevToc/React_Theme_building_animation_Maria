
import React from 'react';
import { Card } from 'react-bootstrap';

const menus = [{titie:"HOME ONE", flag:false},{titie:"HOME TWO", flag:false},{titie:"HOME THREE", flag:false},{titie:"HOME FOUR", flag:false},{titie:"HOME FIVE", flag:false},{titie:"HOME SIX", flag:false},{titie:"HOME SEVEN", flag:false},{titie:"HOME EIGHT", flag:false},{titie:"HOME NINE", flag:false},{titie:"HOME TEN", flag:false},{titie:"HOME ELEVEN", flag:false},{titie:"Covid 19", flag:true},{titie:"Grocery", flag:true},{titie:"Electronics", flag:true},{titie:"Furniture", flag:true}]

const HomeMenu = (props) => {
  return (
    <div className='position-absolute card'  style={{width:"18rem"}}>
      {menus.map((item,index)=>{
        return (
          <li>
            <a href="">{item.titie}</a>
          </li>
        )
      })}
    </div>
  );
}
 
 
export default HomeMenu;