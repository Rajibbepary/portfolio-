
//import Auto from "../../components/Auto";
import ContactCard from "../../components/ContactCard";
import Services from "../../components/Services/Services";
import Banner from "./Banner";
import HappayClient from "./HappayClient";


const Home = () => {
    return (
        <div>
           
            <Banner/>
           <section className="mb-20">
           <Services/>
           </section>
            <HappayClient/>
           <ContactCard/>
           {/* <Auto/> */}
        </div>
    );
};

export default Home;