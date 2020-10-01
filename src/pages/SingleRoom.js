import React, { Component } from 'react';
import { RoomContext } from './../context';
import { Link } from 'react-router-dom';
import defaultImage from './../images/_defaultBcg.jpeg';
import Banner from './../components/Banner';
import StyledHero from './../components/StyledHero';

export default class SingleRoom extends Component {
    
    static contextType = RoomContext;

    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultImage
        }
    }

    componentDidMount(){

    }

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room)
            return (
            <div class='error'>
                <h3>No room found.</h3>
                <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
            </div>)
        const { name, description, capacity, size, price, extras, breakfast, pet, images} = room;
        const [mainImg, ...defaltImg] = images;
        return (
            <>
            <StyledHero img={mainImg} >
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className='single-room'>
                <div  className='single-room-images'>
                    {
                        defaltImg.map((image, index)=>{
                            return <img key={index} src={image} alt={name} />
                        })
                    }
                </div>
                <div className='single-room-info'>
                    <article className='desc'> 
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>Max capacity : {(capacity>1)? `${capacity} people`: 'Single person'} </h6>
                        <h6>pet : {(pet===true)? 'Pets allowed': 'No Pets allowed.'}</h6>
                        <h6>{(breakfast===true)? 'breakfast : included.': ''}</h6>
                    </article>
                </div>
            </section>
            <section className='room-extras'>
                <h6>Extras</h6>
                <ul className='extras'>
                    {
                        extras.map((item, index)=>{
                           return <li key={index}>- {item}</li>;
                        })
                    }
                </ul>
            </section>
            </>
        )
    }
}
