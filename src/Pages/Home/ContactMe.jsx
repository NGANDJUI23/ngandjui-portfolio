import React, { useState } from 'react';
import emailjs from 'emailjs-com';
export default function ContactMe() {
    const [email, setEmail] = useState('');
    const [first_name, setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [phone_number, setPhonenumber] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        alert("xend");
        const templateParams = {
            from_name: email,
            subject: subject,
            message: message,
        };

        emailjs.send('service_z5qy1p9', 'template_h4iyhkv', templateParams, 'j0jzkJxbKi9-ujAM-VF78')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setResponseMessage('Email envoyé avec succès!');
            }, (err) => {
                console.error('FAILED...', err);
                setResponseMessage('Échec de l\'envoi de l\'email.');
            });
    };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Ecrivez-moi pour un contrat, une question, ou pour ameliorer ma page
        </p>
      </div>
      <form className="contact--form--container" onsubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              value={first_name}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              value={last_name}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              value={phone_number}
              onChange={(e) => setPhonenumber(e.target.value)}
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <input type='submit' className="btn btn-primary contact--form--btn" value="submite"/>
        </div>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </section>
  );
}
