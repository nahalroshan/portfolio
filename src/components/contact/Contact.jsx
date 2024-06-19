import React from 'react'
import './contact.scss'
export const Contact = () => {
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
            <form className='form'>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder='Email' />
                <textarea rows={9} name="" id="" placeholder='Message'></textarea>
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}
