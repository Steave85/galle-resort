import React , { useState } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function ContactUs() {

    const object = {
        name: {
            isValid: false,
            error: ''
        },
        email: {
            isValid: false,
            error: ''
        },
        message: {
            isValid: false,
            error: ''
        },
        success: false
    }

    const [state, setState] = useState(object);


    const onClickListener = (e)=>{
        e.preventDefault();
        const {name, email, message} = state;
        console.log(!name.isValid , !email.isValid , !message.isValid)
        if(!name.isValid && !email.isValid && !message.isValid){
            if(!name.isValid){
                setState((prevState)=>({
                    ...prevState,
                    name: { isValid: false, error: 'This field is requied. Can not be empty' }
                }));
            } 
            if(!email.isValid) setState({...state, email: { isValid: false, error: 'This field is requied. Can not be empty' }});
            if(!message.isValid) setState({...state, message: { isValid: false, error: 'This field is requied. Can not be empty' }});
            console.log(state)
        }
        else{
            console.log('out')
            setState({...state, success: true})
        }
    }

    function onNameChange(e){
        const input = e.target.value;
        if(input.length > 2)
           setState({...state, [e.target.name]: { isValid: true, error: '' }});
        else
           setState({...state, [e.target.name]: { isValid: true, error: 'Name should include minimum 3 characters.' }, success: false});
    }

    function onEmailChange(e){
        const email = e.target.value;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(email).toLowerCase()))
            setState({...state, [e.target.name]: { isValid: true, error: '' }});
        else
            setState({...state, [e.target.name]: { isValid: false, error: 'Please enter valid email address.'}, success: false });
    }

    function onMessageChange(e){
        const input = e.target.value;
        if(input.length > 20)
           setState({...state, [e.target.name]: { isValid: true, error: '' }});
        else
           setState({...state, [e.target.name]: { isValid: true, error: 'Message should include minimum 20 characters.'}, success: false });
    }

    return (
        <>
        <Hero hero="roomsHeroContact">
            <Banner title="Contact">
               <Link to="/" className="btn-primary">Return to Home</Link>
            </Banner>
        </Hero>
        <section className='roomslist'>
            <div className="contact-container">
            <h3>Contact Us</h3>
            <form action="/action_page.php">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.."  onChange={(e)=>{onNameChange(e)}}/>
                {(state.name.isValid)? <label htmlFor="name" style={{ color: 'red'}}>{state.name.error}</label>:''} <br/><br/>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email.." onChange={(e)=>{onEmailChange(e)}}/>
                {(!state.email.isValid)? <label htmlFor="name" style={{ color: 'red'}}>{state.email.error}</label>:''}<br/><br/>

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Write something.." style={{height:'200px'}} onChange={(e)=>{onMessageChange(e)}}></textarea>
                {(state.success)? <label htmlFor="name" style={{ color: 'green'}}>Successfully submited.</label>:''}
                {(state.message.isValid)? <label htmlFor="name" style={{ color: 'red'}}>{state.message.error}</label>:''}<br/><br/>

                <input type="submit" value="Submit" onClick={onClickListener}/>
            </form>
            </div>
        </section>
        </>
    )
}
