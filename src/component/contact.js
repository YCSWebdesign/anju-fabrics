import React from 'react-router-dom';
import './home.css';


export function Contact() {

    return (


        <div class="container mt-5">
            <h1 class="text-center fw-bold mb-5" id="five">Contact Us</h1>
            <div class="row">
                <div class="col-lg-6  mb-4">
                    <h2>Phone:<span>+91 91595 59999</span></h2>
                        
                    <h2>Email: <span>info@anjufabrics.in</span></h2>
                    
                    <h2>Address:<span>Head Office</span></h2>

                    <p>No:5, 8th Cross Rd, Sengunthapuram,<br></br>Kamarajapuram East, Karur -639002</p>
                    <div class="mt-4">
                        <iframe src="https://maps.google.com/maps?q=No:5,%208th%20Cross%20Rd,%20Sengunthapuram,%20%20Kamarajapuram%20East,%20Karur%20-%20639002.&t=&z=13&ie=UTF8&iwloc=&output=embed" width="90%" height="300" color='black' frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div>
                       
                       
                        <h5 className='factory'>Factory</h5>
                        <p>Anju Fabrics SKS Nagar,<br></br>Karupampalayam</p>
                    </div>
                    <div>
                        <iframe src="https://maps.google.com/maps?q=Anju%20Fabrics%20SKS%20Nagar,%20Karupampalayam.&t=&z=10&ie=UTF8&iwloc=&output=embed" width="90%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>

            </div>




            <div className='container-fluid justify-content-center mt-5'>
                <div className='row justify-content-center text-center '>

                    <h1>Get in touch with us.<br />We will get back to you soon!</h1><br></br>

                    <div className='col-lg-8 d-flex mt-5'>
                        <div className='contact-form col-md-6 '>
                            <form>
                                <input className=' form-control input1' type="text" name='Name' id='Name' placeholder='Name*'></input><br></br><br></br>
                            </form>
                        </div>
                        <div className='contact-form col-md-6'>
                            <form>
                                <input className=' form-control input1' type="text" name='last Name' id='last Name' placeholder='last Name*'></input><br></br><br></br>
                            </form>
                        </div>
                    </div>
                    <div className='contact-form col-lg-8'>
                        <form>
                            <input className=' form-control input1' type="text" name='Phone No' id='Phone No' placeholder='Phone No*'></input><br></br><br></br>
                            <input className=' form-control input1' type="text" name='Email' id='' placeholder='Email*'></input><br></br><br></br>
                            <input className=' form-control input1' type="text" name='Your Message' id='Your Message' placeholder='Your Message*'></input><br></br><br></br>
                        </form>
                    </div>
                </div>
                <div className='col-lg-12 justify-content-center text-center'>
                    <button type="submit" className="btn1">submit</button>
                </div>

            </div>
            <div className="container-fluid blue mt-5"><br></br><br></br>
                <h6>© 2023, Anju fabrics. Yellowcircle.studio</h6>

            </div>
        </div>


    )
}



