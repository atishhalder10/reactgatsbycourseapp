import React from 'react'
import Heading from '../reuseable/Heading'

export default function Contact() {
    return (
        <section className="py-3 px-2" >
        <Heading tittle="Contact Us"/>
        <div className="col-10 col-sm-8 mx-auto ">
          <form action="https://formspree.io/f/xaylrkyp" method="POST">
                <div className="from-group my-2">
                   <input className="form-control" type="text" name="name" id="name" placeholder="Your Name"/> 
                </div>
                <div className="from-group">
                   <input className="form-control" type="email" name="email" id="email" placeholder="Your Email"/> 
                </div> 
                <div className="from-group my-2">
                   <input className="form-control" type="text" name="mobile" id="mobile" placeholder="Mobile Number"/> 
                </div> 
                <div className="from-group my-2">
                   <textarea className="form-control" type="text" name="description" id="description" placeholder="Your Message"/> 
                </div>
                  <button type="submit" className="btn btn-outline-info btn-block mb-5" >Submit</button>    
        </form>  
        </div>
            
        </section>
    )
}
