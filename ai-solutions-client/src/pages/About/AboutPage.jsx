import React from 'react';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';
import AboutBanner from '../../components/AboutContent/AboutBanner';
import ContactUs from '../../components/HomeContent/ContactUs';
import JourneyWithUs from '../../components/AboutContent/JourneyWithUs';
import Overview from '../../components/AboutContent/Overview';
import StatsSection from '../../components/AboutContent/StatsSection';

const AboutPage = () => {
    return (
        <div className='bg-[#F3F4F5] md:px-20 pt-6'>
            <Navbar></Navbar>
            <AboutBanner></AboutBanner>
            <StatsSection></StatsSection>
            <JourneyWithUs></JourneyWithUs>
            <Overview></Overview>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default AboutPage;