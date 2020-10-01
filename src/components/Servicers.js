import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './../components/Title';

export default class Servicers extends Component {
    state = {
    services: [
        {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        }
    ]
    };
    
    render() {
        return (
            <section className="services">
                <Title title="Servicers" />
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return (<article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h2>{item.title}</h2>
                                    <p>{item.info}</p>
                               </article>)
                    })}
                </div>
            </section>
        )
    }
}
