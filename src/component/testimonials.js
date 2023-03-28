import React from 'react-router-dom';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';

export function Testimonials() {

    return (
        <div className='col-sm-12 makeclr pt-5 pb-5' id='four'>
            <div className='container'>
                <div className='row'>
                    <h1 className=' text-center mt-5'><b>TESTIMONIALS</b></h1>
                    <div className='col-lg-4 '>
                        <h3 className='textedt '><i>What Clients Say</i></h3></div>


                    <Carousel className=" col-sm-12  h-70% w-100 mt-5">

                        <Carousel.Item>

                            <h1 className='slider1  slide mt-5'>Bought their cushions and curtains' fabric. Wonderful quality of the fabric and reasonable pricing.</h1>
                        </Carousel.Item>
                        <Carousel.Item>

                            <h1 className='slider1 slide mt-5'>To find a place that's accessible while also having a wide range of furnishing products is a rarity. Truly amazing. </h1>

                        </Carousel.Item>
                        <Carousel.Item>

                            <h1 className='slider1 slide mt-5'>This place is your one-stop for home furnishing products! Excellent quality. </h1>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )








}