import React from 'react';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';
import ServicesBanner from '../../components/ServicesContent/ServicesBanner';
import ContactUs from '../../components/HomeContent/ContactUs';
import ServicesOffer from '../../components/ServicesContent/ServicesOffer';

const ServicesPage = () => {
    return (
        <div className='bg-[#F3F4F5] md:px-20 pt-24'>
            <Navbar></Navbar>
            <ServicesBanner></ServicesBanner>
            <ServicesOffer></ServicesOffer>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default ServicesPage;