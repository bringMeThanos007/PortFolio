import React from 'react'
import './feedback.css'

export default function Feedback() {
    return (
        <>
            <section className='section'>
                <div className="feed_Back">
                    <div className="form">
                        <h2>Contact Form</h2>

                        <form action="https://formsubmit.co/437ccef240935a2c338722e931d80ad3" method="POST">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"><strong> Name</strong></label>
                                <input type="text" name='name' class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"><strong>Email address</strong></label>
                                <input type="email" name='email' class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label"><strong>Message</strong></label>
                                <textarea name='message' placeholder='message' class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                            <div style={{ width: "100%", display:"flex", justifyContent:"center" ,alignItems:"center" }}>

                                <button className="btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
