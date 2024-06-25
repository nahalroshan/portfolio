import React, { useRef } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lnd7etc', 'template_9texrb7', form.current, {
        publicKey: '3bHB8uMuat0kXsQek',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Get in Touch</h1>
        <p>Want to collaborate or just say hi? I'd love to hear from you!</p>
        <div className="item">
          <h2>Mail</h2>
          <span>nahalroshan050@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>KV House HO Pavandoor PO Nanminda VIA</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+91 9074903274</span>
        </div>
      </div>
      <div className="formContainer">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="from_name" required />
          <input type="email" placeholder="Email" name="from_email" required />
          <textarea rows={9} name="message" placeholder="Message" required></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
