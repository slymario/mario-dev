import React, { useState, useRef } from 'react'
import "./Contact.css";
import emailjs from "@emailjs/browser";
import toast, {Toaster} from 'react-hot-toast';
import { MdOutlineMailOutline } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { RiCheckLine } from "react-icons/ri";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false); // State to track success state

  const email = 'nwobodo_obinna@yahoo.com';
  const encodedEmail = encodeURIComponent(email);

  const notify = () => toast.success('Message sent successfully.');
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm("service_vm8n5fd", "template_lfag344", form.current, "aiFPsR2KMexmIhex2");
      console.log(result.text);
      setMessageSent(true);
      notify();
      e.target.reset();
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__icon" />
            <h4>Email</h4>
            <h5>{email}</h5>
            <a href={`mailto:${encodedEmail}`}>Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__icon"/>
            <h4>Whatsapp</h4>
            <h5>+234 806 818 6317</h5>
            <a href="https://wa.me/2348068186317" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__icon" />
            <h4>Messanger</h4>
            <h5>Nwobodo Mario Obinna</h5>
            <a href="https://m.me/nwobodo1" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name="name" placeholder="Enter Your Full Name" required />
          <input type="text" name="email" placeholder="Enter Your Email" required />
          <textarea name="message" rows="7" placeholder="Enter Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary" onClick={notify}>Send Message</button>
          
          {messageSent && (
            <div className="success-icon">
              <RiCheckLine color="green" size={30} />
            </div>
          )}

          <Toaster containerStyle={{
                    top: 50,
                    left: 50,
                    bottom: 60,
                    right: 60,
                }} />

        </form>
      </div>
    </section>
  )
}

export default Contact;