import React, { useState } from 'react';
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from './ContactFrom.module.css';
import CONTACT from '../images/contact.svg'

const ContactForm = () => {


    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');


    const onSubmit = (event) => {
        
        event.preventDefault();

        setName(event.target[0].value)
        setEmail(event.target[1].value);
        setText(event.target[2].value)
        
    }

   

  return (
    <section className={styles.container}>
        
      <div className={styles.contact_form}>

        <div className={styles.top_btn}>

          <Button 
          text="VIA SUPPORT CHAT" 
          icon={<MdMessage fontSize="24px" />} />

          <Button 
          text="VIA CALL" 
          icon={<FaPhoneAlt fontSize="24px" />} 
           />

        </div>

        <Button 
         isOutline={true}
         text="VIA EMAIL FORM" 
         icon={<MdEmail fontSize="24px" />} />

         <form onSubmit={onSubmit}>

            <div className={styles.form_control}>
                <label htmlFor="name"> Name </label>
                <input type="text" name="name" />
            </div>

            <div className={styles.form_control}>
                <label htmlFor="email"> Email </label>
                <input type="email" name="email" />
            </div>

            <div className={styles.form_control}>
                <label htmlFor="text"> Text </label>
                <textarea type="text" rows={8} name="text" />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent:"end"
                }}
            >

            <Button text="SUBMIT BUTTON"  />

            </div>

            <div>
                {
                    name + "" + email + text
                }
            </div>
           
         </form>

      </div>
      <div className={styles.contact_image}>
        <img src={CONTACT} alt="contact image" />
      </div>
    </section>
  );
}

export default ContactForm;
