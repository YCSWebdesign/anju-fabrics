import React, { useState } from 'react';
import pics from '../static/constant';
import { Menubar } from './menubar';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';


export function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <div>
        <div className='container-fluid ' id="one">
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 text-center'>
              <img className='img-fluid' src={pics.BANNER_LOGO} alt="banner-image" />
              <Menubar />
            </div>
          </div>
        </div>
        <br />

        <div className='mt-2'>

          <Carousel className='borderline'>
            <Carousel.Item>
              <img
                className="d-block w-100 fadeinout"
                src={pics.BANNER_ONE}
                alt="First slide"
              />
              <Carousel.Caption>
                <p className="cust-pos">
                  Uniquely catering to
                  every fabric need.</p>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 fadeinout"
                src={pics.BANNER_TWO}
                alt="Second slide"
              />

              <Carousel.Caption>
                <p className="size">
                  With an extensive catalog varying
                  in features, styles and colors</p>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 fadeinout"
                src={pics.BANNER_THREE}
                alt="Third slide"
              />

              <Carousel.Caption>
                <p className="size">
                  The classy range
                  of table linens</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 fadeinout"
                src={pics.BANNER_FOUR}
                alt="fouth slide"
              />

              <Carousel.Caption>
                <p className="size text-dark">
                  Make cooking look easier
                  and safer while adding to the look
                </p>
              </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 fadeinout"
                src={pics.BANNER_FIVE}
                alt="fiveth slide"
              />

              <Carousel.Caption>
                <p className="size text-dark">
                  Choose from a wide collection of our bath linens</p>
              </Carousel.Caption>

            </Carousel.Item>
          </Carousel>




        </div>
      </div>
    </div>

  )
}

export default Banner;