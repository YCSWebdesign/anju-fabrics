import './home.css';
import pics from '../static/constant';

export function Abt() {
  return (
    <div>
      <div className="container" id="two">
        <div className="row">
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img src={pics.STITCH} alt='stitch' width={'100%'}/>
          </div>  
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h1 className="mt-4">
              <b>
                ABOUT US
              </b>
            </h1>
            <p className="font">
              The story of a family's journey from handloom to power-loom and then electronic-loom.
              The journey of Anju Fabrics began with a determined heart in 1989 by
              Mr. K.N Subramanian and Mr. P. Subramaniam in the domestic trade market.
              As a micro company, Anju Fabrics produced only bed curtain cloths, bedsheets,
              and cotton towels. Currently, we have grown to also manufacture a variety of kitchen,
              bathroom, and table linen products. In addition, we are a one-stop solution for the production
              of jacquard furnishing and upholstery fabrics. We work with almost all modern
              retailers at the moment. Anju Fabrics grew along with us, and we're now acclaiming a
              superior hand in global retail.
            </p>
          </div>      
        </div>
      </div>  
      {/* <div className="container mt-3" id="two">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img src={pics.STITCH} alt="stitch " className="img-fluid "/>
          </div>
          <div className="col-lg-6 col-md-12">
            <h1 className="mt-4"><b>ABOUT US</b></h1>
            <p className="font">The story of a family's journey from handloom to power-loom and then electronic-loom.
              The journey of Anju Fabrics began with a determined heart in 1989 by
              Mr. K.N Subramanian and Mr. P. Subramaniam in the domestic trade market.
              As a micro company, Anju Fabrics produced only bed curtain cloths, bedsheets,
              and cotton towels. Currently, we have grown to also manufacture a variety of kitchen,
              bathroom, and table linen products. In addition, we are a one-stop solution for the production
              of jacquard furnishing and upholstery fabrics. We work with almost all modern
              retailers at the moment. Anju Fabrics grew along with us, and we're now acclaiming a
              superior hand in global retail.</p>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className='row mt-5'>
          <div className='col-md-4 mb-3 mb-md-0'>
            <img className='img-fluid' src={pics.UPSCALE} alt='upscale' />
            <p className='mt-3 fontchange'>To upscale Anju fabrics as a leading home textile manufacturer and solidify its presence globally and engage with modern retailers for a prospective future.</p>
          </div>
          <div className='col-md-4 mb-3 mb-md-0'>
            <img className='img-fluid' src={pics.QUALITY} alt='quality'/>
            <p className='mt-3 fontchange'>We uphold a reputable name in manufacturing based on clients’ requirements at the given hour by focusing on consistent quality, for a better everyday life.</p>
          </div>
          <div className='col-md-4'>
            <img className='img-fluid' src={pics.GLOBE} alt='globe'/>
            <p className='mt-3 fontchange'>To expand our brand in the overseas market and escalate the value of our expertise, thereby establishing an extended platform for our consumers.</p>
          </div>
        </div>
      </div>
    </div>
  )
};
