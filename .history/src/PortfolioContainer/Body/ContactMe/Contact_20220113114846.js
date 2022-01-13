import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_576tqf9","template_ulbpdsp", form.current, "user_RhX79iy04wuXaAbRpx7fw")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const submitHandler = () => {
    // Here do your stuff on submit
    if(error){
      this.setState({formError: true, formSuccess: false});
    }
    else{
      this.setState({formError: false, formSuccess: true});
    }
    
    }

  return (
    <>
    <label className="section-title">Contact</label>
    <div className='contact'>
        <section className="container">
            <div className="contact-box">
                <div className="contact-info">
                    <h3 className='title'>Get In Touch</h3>
                    <p className="text">
                        <b>For Contact Use Below Information Or Email With Given Form</b>
                    </p>
                    <div className="information-wrap">
                        <div className="information">
                            <div className="contact-icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <p className="info-text">
                                303,Sai Nirmiti Hights,BaburavNagar,<br/>Tal:-Shirur,Dist:-Pune,412210.
                            </p>
                        </div>
                        <div className="information">
                            <div className="contact-icon">
                                <i className="fa fa-paper-plane"></i>
                            </div>
                            <p className="info-text">
                                mayurgaikwad10101@gmail.com
                            </p>
                        </div>
                        <div className="information">
                            <div className="contact-icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <p className="info-text">
                                7756050429
                            </p>
                        </div>
                        
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='contact-info' success={this.state.formSuccess} error={this.state.formError} >
                    <Message
                        success
                        header="Form completed"
                        content="Thank you for your contribution."
                    />
                    <Message
                        error
                        header="Missing fields!" 
                        list={['All fields must be filled.']}
                    />
                    <div className="contact-form">
                        <h3 className="title">Contact Me</h3>
                        <div className="row">
                            <input type="text" name='first_name' className="contact-input" placeholder='First Name' required />
                            <input type="text" name='last_name' className="contact-input" placeholder='Last Name'  required/>
                        </div>
                        <div className="row">
                            <input type="text" name='phone' className="contact-input" placeholder='Phone' required/>
                            <input type="email" name='email' className="contact-input" placeholder='Email' required/>
                        </div>
                        <div className="row">
                            <textarea name="message" className='contact-input textarea' 
                            placeholder='Message' error={this.state.descriptionError} required>
                            </textarea>
                        </div>
                        <input className='btn' type='submit'name='send' onClick={this.submitHandler} value="Send"/>
                    </div>
                </form>
            </div>
        </section>    
        
    </div>
    </>
  );
};
export default Contact;