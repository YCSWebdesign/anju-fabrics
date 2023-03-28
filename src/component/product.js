import React from 'react-router-dom';
import './home.css';
import pics from '../static/constant';
 import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"




export function Product() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };
return (
        <div className='' id="three">
            <div className='div-color pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <h1 className='text-center'><b>OUR PRODUCTS</b></h1>

                            <div className='pt-5 pb-5'>
                                <h1><b>Table Linens</b></h1>
                                <h5 className='word1 pb-2'>Tablecloth, Table runner, Placemat, Napkin, Chair pad, Chair cushion </h5><br></br>
                                <img className='pic-size img-fluid ' src={pics.PRODUCT1} width={'100%'} alt="product1"/>
                            </div>

                            <div className='pt-5 pb-5'>
                                <h1><b>Bath Linens</b></h1>
                                <h5 className='pb-2'> Flat Towels, Beach Towels, Jacquard Towels, Printed Towels, Bamboo Towels</h5><br></br>
                                <img className='pic-size img-fluid ' src={pics.PRODUCT4}  width={'100%'}  alt="product2"/>
                            </div>

                            <div className='pt-5 pb-5'>
                                <h1><b>Kitchen Linens</b></h1>
                                <h5 className='pb-2'>Apron, Glove, Potholder, Kitchen towel</h5>
                                <img className=' img-fluid pic-size ' src={pics.PRODUCT2} width={'100%'} alt="product3"/>
                            </div>
                            <div className='pt-5 pb-5'>
                                <h1><b>Jacquard furnishing and<br/> Upholstery fabrics</b></h1>
                                <h5 className='pb-2'>Curtain, Cushion, Jacquard Fabric</h5>
                                <img className='pic-size img-fluid' src={pics.PRODUCT3} width={'100%'}alt="product4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                       
          
<div className="container">
  <h1 className='text-center'><b>GALLERY</b></h1><br></br>
            <Slider {...settings}>
            <div>
        <img src={pics.GALLERY7}/>
      </div>
      <div>
        <img src={pics.GALLERY8}/>
      </div>
      <div>
        <img src={pics.GALLERY9}/>
      </div>
      <div>
        <img src={pics.GALLERY4}/>
      </div>
      <div>
        <img src={pics.GALLERY5}/>
      </div>
      <div>
        <img src={pics.GALLERY6}/>
      </div>
      <div>
        <img src={pics.GALLERY7}/>
      </div>
      <div>
      <img src={pics.GALLERY8}/>
      </div>
      <div>
      <img src={pics.GALLERY9}/>
      </div>
      <div>
      <img src={pics.GALLERY10}/>
      </div>
      <div>
      <img src={pics.GALLERY11}/>
      </div>
      <div>
      <img src={pics.GALLERY12}/>
      </div>
      <div>
      <img src={pics.GALLERY13}/>
      </div>
      <div>
      <img src={pics.GALLERY10}/>
      </div>
      <div>
      <img src={pics.GALLERY15}/>
      </div>
      {/* <div>
      <img src={pics.GALLERY16}/>
      </div>
  
      <div>
      <img src={pics.GALLERY18}/>
      </div>
      <div> */}
      {/* <img src={pics.GALLERY19}/>
      </div>
      
      <div>
      <img src={pics.GALLERY21}/>
      </div>
      <div>
      <img src={pics.GALLERY22}/>
      </div>
      <div>
      <img src={pics.GALLERY23}/> */}
      {/* </div> */}
      {/* <div>
      <img src={pics.GALLERY24}/>
      </div> */}
      {/* // <div>
      // <img src={pics.GALLERY25}/>
      // </div>
      // <div>
      // <img src={pics.GALLERY26}/>
      // </div>
      // <div>
      // <img src={pics.GALLERY27}/>
      // </div>
      // <div>
      // <img src={pics.GALLERY28}/>
      // </div>
      // <div>
      // <img src={pics.GALLERY29}/>
      // </div>  */} 
     
    </Slider>
</div>


    </div>
  );
}



   
export default Product;