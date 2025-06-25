import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/Aboutus';
import Properties from './components/Properties/Properties';
import PartmentTypes from './components/PartmentTypes/PartmentTypes'; 
import Listing from './components/Listing/Listing'; 
import TopProperty from './components/TopProperty/TopProperty'; 
import Team from './components/Team/Team'; 
import BookAppointment from './components/BookAppointment/BookAppointment'; 
import ClientReview from './components/ClientReview/ClientReview'; 
import Brands from './components/Brands/Brands'; 
export default function Home() {
  return (
    <div className="">
      <div style={{paddingTop:"50px" }}>
        <Hero/>
       </div>
        <PartmentTypes/>
        <AboutUs/>
        <Properties/>
        <Listing/>
        <TopProperty/>
        <Team/>
        <BookAppointment/>
        <ClientReview/>
        <Brands/>
    </div>
  );
}
