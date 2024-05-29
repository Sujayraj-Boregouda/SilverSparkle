import { BodyOne, Title } from "../common/CustomComponents";
import { productlists } from "../../assets/database/database";
import { ProductCard } from "../../router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"; 

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute top-[32%] -right-5 lg:-right-32 rounded-full slider-btn" onClick={onClick}>
          <button className="next">
              <MdKeyboardArrowRight size={50}/>
          </button>
      </div>
    );
  }
  
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute top-[32%] -left-5 lg:-left-32 rounded-full slider-btn z-10" onClick={onClick}>
          <button className="next">
              <MdKeyboardArrowLeft size={50}/>
          </button>
      </div>
    );
}
  
export const ProductSlide = () => {
  return (
    <>
        <section className="py-20 bg-white slideproduct">
            <div className="container">
                <Title level={4}>What is Trending Now</Title>
                <div className="flex items-center gap-3 uppercase">
                    <BodyOne className="text-sm">
                        DISCOVER THE MOST TRENDING PRODUCTS IN SILVER SPARKLE
                    </BodyOne>
                </div>

                <ProductSlideCard />
            </div>
        </section>
    </>
  )
}


export const ProductSlideCard = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    intialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    
    return (
        <>
            <Slider {...settings}>
                {productlists.map((product) => (
                        <ProductCard 
                            id={product.id}
                            key={product.key} 
                            title={product.title}
                            description={product.description}
                            images={product.images}
                            price={product.price}
                            discount={product.discount}
                            rating={product.rating}
                            featured={product.featured}
                            category={product.category}
                            color={product.color}
                        />
                ))}
        </Slider>
        </>
    )
}