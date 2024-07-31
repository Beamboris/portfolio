import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { useRef } from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Contact = () => {
  const form = useRef();
  const [ succesMessage, setSuccessMessage ] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wv9101e', 'template_o0q0yjp', form.current, {
        publicKey: 'Ep8ClqJty4Vt64cyw',
      })
      .then(
        () => {
          setSuccessMessage('Your message has been sent successfully!');
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
      <div className='contact section' id="contact">
      <h3>
        Feel free to {" "}
        <RoughNotationGroup show="true">
        <RoughNotation type='box' color='var(--third)'>
        Contact me {" "}
        </RoughNotation>
         by submitting the form  {" "}
         <RoughNotation type='underline' color='var(--secondary)'>
          below, {" "}
         </RoughNotation>
           and I will get back to you as soon as{" "}
          <RoughNotation type='circle' color='var(--third)'>
           possible
           </RoughNotation>
        </RoughNotationGroup>
        </h3>
      <div className='form-container'>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <div className='first-two'>
            <div className='one'>
            <label className='form-label' htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" placeholder='Enter your name' required />
            </div>
            <div className='one'>
            <label className='form-label' htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" placeholder='Enter your email' required/>
            </div>
            </div>
            <div className='last-one'>
            <label className='form-label' htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder='Enter your message' required />
            </div>
            <input className="submit-btn" type="submit" value="Send" />
        </form>
      </div>
      <p className='succes'>{succesMessage}</p>
    </div>  
  )
}

export default Contact
