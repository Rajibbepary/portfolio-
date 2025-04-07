import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/big1.jpg'
import img2 from '../../assets/images/big2.jpg'
import img3 from '../../assets/images/big3.jpg'
const Banner = () => {
    return (
        <div>
                <Carousel className="text-center h-[300px]">
        <div>
            <img className=" w-full" src={img1}  />
           
        </div>
        <div>
            <img className=" w-full" src={img2}/>
           
        </div>
        <div>
            <img className=" w-full" src={img3} />
          
        </div>
        
    </Carousel>
        </div>
    );
};

export default Banner;