import React from 'react';
import Navbar from '../../Shared/Navbar';
import ContactUs from '../../components/HomeContent/ContactUs';
import img1 from '../../assets/Banner/contact.png'
import ContactUsMain from '../../components/Contactus/ContactUsMain';
import Footer from '../../Shared/Footer';

const Contact = () => {
    return (
        <div className='bg-[#F3F4F5] md:px-20 pt-24'>
            <Navbar></Navbar>
            <ContactUsMain></ContactUsMain>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Contact;
