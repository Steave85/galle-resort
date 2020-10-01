import React, { Component } from 'react';
import { RoomContext } from './../context';
import Title from './Title'
import Room from './Room'
import Loading from './Loading';

export default class FeatureRooms extends Component {
    static contextType = RoomContext;
    render() {
        const { loading, featuredRooms } =  this.context;
        const rooms = featuredRooms.map(room => {
            return <Room key={room.id} room={room} />;
        })

        return (
            <section className='featured-rooms'>
                <Title title = "Featured rooms." />
                <div className = 'featured-rooms-center'>
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}
