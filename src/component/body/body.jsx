import React, { Component } from 'react';
import {Carousel } from 'antd'


export default function Body(props){
    const {banners} =props
  return (
    <div style={{width:1200,height:150,margin:'auto',backgroundColor:'#eee'}}>
      <Carousel autoplay>
        {
          banners.length >0 && (
            banners.map( (item)=>{
              return(
                <div key={item.id}>
                  <h3>{item.title}</h3>
                </div>
              )
            })
          )
        }
      </Carousel>
    </div>
  )
}



