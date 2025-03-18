

import ContactCard from "../../components/ContactCard";
import Services from "../../components/Services/Services";
import Banner from "./Banner";
import HappayClient from "./HappayClient";
import Testimonial from "../../testimonial/testimonial";


const Home = () => {
    return (
        <div>
           
            <Banner/>
           <section className="mb-20">
           <Services/>
           </section>
        <section className="mb-10">
        <Testimonial/>
        </section>
            <HappayClient/>
            <section className="mb-12">
            <ContactCard/>
            </section>
           {/* <Auto/> */}
        </div>
    );
};

export default Home;