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
        <div className='bg-[#f9f9f9] px-6 md:px-20'>
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