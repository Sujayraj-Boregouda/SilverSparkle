import { useState } from "react";
import { herolist } from "../../assets/database/database";
import { BodyOne, Caption, Title } from "../common/CustomComponents";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";import { NavLink } from "react-router-dom";
 ;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute bottom-0 hidden md:block md:left-96 lg:left-1/2 slider-btn" onClick={onClick}>
        <button className="next">
            <MdKeyboardArrowRight size={50}/>
        </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute bottom-0 bg-white text-primary left-0 md:left-96 lg:left-[45.2%] slider-btn z-10" onClick={onClick}>
        <button className="next">
            <MdKeyboardArrowLeft size={50}/>
        </button>
    </div>
  );
}

export const Hero = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    
  return (
    <div>
        <section className="h-[50vh] lg:h-[90vh] mt-20 bg-white-100 relative z-1">
            <Slider {...settings}>
                {herolist.map((item) => (
                    <HeroItem 
                        key={item.id} 
                        title={item.title}
                        description={item.description}
                        prices={item.price}
                        colors={item.color}
                        image={item.image}
                    />
                ))}
            </Slider>
        </section>
    </div>
  )
}

export const HeroItem = ({title, description, prices, colors, image}) => {

    const [selectedColor, setSelectedColor] = useState(colors[0].value);

    const[selectedPrice, setSelectedPrice] = useState(
        prices.find((price) => price.color === colors[0].value)
    )

    const handleColorClick = (color) => {
        const newSelectedPrice = prices.find((price) => price.color === color);
        setSelectedColor(color);
        setSelectedPrice(newSelectedPrice);
    }
    
    return (
        <>
            <section className="content flex justify-between lg:px-16 h-[60vh] lg:h-[90vh] relative z-20">
                <div className="hidden md:block left w-1/2 p-8 lg:pt-32 lg:py-32 lg:pb-64">
                    <Title level={1} className={`leading-none font-medium text-[24px] md:text-3xl lg:text-[70px] lg:leading-tight pb-5`}>{title}</Title>
                    <BodyOne>{description}</BodyOne>

                    <div className="flex items-start gap-8 my-5 pt-1">
                        <div>
                            <Caption>Prices</Caption>
                            <div className="mt-2">
                                <Title level={5}>${selectedPrice.value.toFixed(2)}</Title>
                            </div>
                        </div>
                        <div>
                            <Caption>Colors</Caption>
                            <div className="flex items-center justify-center gap-3 mt-4">
                                {colors.map((color, i) => (
                                    <div 
                                        key={i} 
                                        onClick={() => handleColorClick(color.value)}
                                        className={`w-4 h-4 rounded-full cursor-pointer border-gray-300 ${
                                            selectedColor === color.value ? "selected" : ""
                                        }`}
                                        style={{ backgroundColor: color.value }}
                                    >

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        <NavLink to="product-details/1">
                            <button className="primary-btn uppercase">View Details</button>
                        </NavLink>
                        <NavLink to="/shop">
                            <button className="secondary-btn uppercase">View Shop</button>
                        </NavLink>
                    </div>
                </div>
                
                <div className="hidden right bg-white p-5 mt-4 w-1/2 h-full md:flex justify-center items-center relative z-50">
                    <img src={image} alt="" className="h-[60vh] w-full object-contain"/>
                </div>
                
                <div className="flex flex-col md:hidden p-12">
                    <Title level={1} className={`leading-none font-medium text-xl md:text-3xl lg:text-[70px] lg:leading-tight pb-5`}>{title}</Title>
                    <img src={image} alt="" className="h-[60vh] w-full object-contain pb-12"/>
                </div>
                <div className="lg:bg-black lg:h-[90vh] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"></div>
            </section>
        </>
    )
}

HeroItem.propTypes = {
    title: PropTypes.isRequired,
    description: PropTypes.isRequired,
    prices: PropTypes.isRequired,
    colors: PropTypes.isRequired,
    image: PropTypes.isRequired,
};