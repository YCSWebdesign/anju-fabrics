import { Navbar, Container, } from 'react-bootstrap';
import { Link } from "react-scroll";
import './home.css';

export function Menubar() {
    return (
        <>
            <div className='mt-2 col-lg-12 row '>
                <Navbar expand="md">
                    <Container>
                    <Navbar.Brand href="#about" className='txt1mnbr' ></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='mob-view' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            
                            <ul className='navbar-nav space '>

                                <li className='nav-item active'>
                                        <Link  to='one' spy={true} smooth={true} duration={1000} className=' m-3 hmclr color textchange text-bold  '><b>Home</b></Link>
                                </li>
                                <li className='nav-item active '>
                                        <Link  to='two' spy={true} smooth={true} duration={1000} className='m-3 hvr-color color textchange  text-bold '><b>About Us</b></Link>
                                </li>
                                 <li className='nav-item active'>
                                        <Link  to='three' spy={true} smooth={true} duration={1000} className='m-3 hvr-color color textchange  text-bold  '><b>Our Product</b></Link>
                                </li>
                                        
                                <li className='nav-item active'>
                                        <Link  to='four' spy={true} smooth={true} duration={1000} className=' m-3 hvr-color color  textchange  text-bold  '><b>Testimonials</b></Link>
                                </li>
                                <li className='nav-item active'>
                                        <Link to='five'spy={true} smooth={true} duration={1000}
                                         className='color m-3 hvr-color color  textchange text-bold  '><b>Contact Us</b></Link>
                                </li> 
                                    
                            </ul>
                         
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>



        </>
    );
}