import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import { isTemplateElement } from '@babel/types';
export default class Services extends Component {
    state = {
       services: [
            {
             icon:<FaCocktail/>,
             title:'Free Cocktails',
             info:'Lorem ipsum dolor sit amet, vel ex doming voluptua repudiandae.'   
            },
            {
                icon:<FaHiking/>,
                title:'Hiking',
                info:'Lorem ipsum dolor sit amet, vel ex doming voluptua repudiandae.'   
               },
               {
                icon:<FaShuttleVan/>,
                title:'Free Shuttles',
                info:'Lorem ipsum dolor sit amet, vel ex doming voluptua repudiandae.'   
               },
               {
                icon:<FaBeer/>,
                title:'Free Beer',
                info:'Lorem ipsum dolor sit amet, vel ex doming voluptua repudiandae.'   
               }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='Services'/>
                <div className="services-center">
                    {this.state.services.map((service,index)=>{
                    return <article key={index} className="service"><span>{service.icon}</span>
                    <h6>{service.title}</h6>
                    <p>{service.info}</p>
                    </article>
                    })}
                </div>
            </section>
        )
    }
}
