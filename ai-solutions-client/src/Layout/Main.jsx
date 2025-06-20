import React from 'react';
import Navbar from '../Shared/Navbar';
import Home from '../components/HomeContent/Home';
import About from '../components/HomeContent/About';
import Services from '../components/HomeContent/Services';
import Blog from '../components/HomeContent/Blog';
import Testimonials from '../components/HomeContent/Testimonials';
import Footer from '../Shared/Footer';
import OurProduct from '../components/HomeContent/OurProduct';
import ContactUs from '../components/HomeContent/ContactUs';

const Main = () => {
    return (
        <div className='bg-[#F3F4F5] md:px-20 pt-6'>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Services></Services>
            <OurProduct></OurProduct>
            {/* <Blog></Blog> */}
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Main;