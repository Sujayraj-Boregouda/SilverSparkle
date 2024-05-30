import { useParams } from "react-router-dom";
import { productlists } from "../../assets/database/database";
import { BodyOne, Caption, Title } from "../../components/common/CustomComponents";
import { RenderRatingStars } from "../../components/product/ProductCard";
import { useEffect, useState } from 'react';
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { FilterDiscover } from "../../components/hero/InstagramPost";
import { ProductSlideCard } from "../../components/product/ProductSlide";
import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/slice/cartSlice";
import { favoriteActions } from "../../redux/slice/favouriteSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const colorsValue = {
  red: "#fe7fef",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  white: "#f8f8f8",
  brown: "#a52a2a",
  clear: "#ffffff",
  "dark brown": "#654321",
  light: "#f5f5dc",
  black: "#000000",
  natural: "#8b4513",
  "light brown": "#deb887",
  dark: "#696969",
  gray: "#808080",
  beige: "#f5f5dc",
};

export const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = productlists.find((product) => product.id === parseInt(productId));

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const { title, images, price, description, discount, rating, color } = product;

  const [selectedColor, setSelectedColor] = useState(color[0].value);
  const [selectedPrice, setSelectedPrice] = useState(
    price.find((price) => price.color === color[0].value)
  );
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuantity(1);
  }, [productId]);

  const handleColorClick = (color) => {
    const newSelectedPrice = price.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };

  const handleQuantityIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const discountPrice = selectedPrice.value - (selectedPrice.value * discount) / 100;
  
  const addToCart = () => {
    dispatch(CartActions.addToCart({
        id: product.id,
        name: title,
        price: discountPrice,
        images,
        quantity
    }));
  };

  const addToFavories = () => {
    dispatch(favoriteActions.addToFavorites({ id: product.id, title, price: discountPrice, images }));
  };

  const CustomPage = ({ index, onClick }) => (
    <div>
      <img src={images[index].image} alt="product-img" onClick={onClick} />
    </div>
  );

  const settings = {
    customPaging: (i) => <CustomPage index={i} />,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="container mt-32 slideproduct">
        <div className="flex justify-between flex-col lg:flex-row" key={productId}>
          <div className="images lg:w-1/2">
            <div>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <img
                    src={image.image}
                    key={index}
                    className="w-full h-full"
                    alt="product-image"
                  />
                ))}
              </Slider>
            </div>
          </div>

          <div className="details lg:w-1/2 px-16 pt-16">
            <button className="feature-btn bg-indigo-600">
              SALE {discount}% OFF
            </button>
            <Title level={2} className="my-2">{title}</Title>
            <div className="flex items-center gap-2 mt-2 mb-5">
              <div className="flex items-center gap-1">
                {RenderRatingStars(rating)}
              </div>
              <p>{product.rating} Stars</p>
            </div>
            <p className="text-[15px]">{description}</p>
            <br />
            <div>
              <Caption>Colors</Caption>
              <div className="flex items-center gap-3 mt-5">
                {color.map((colorOption, index) => (
                  <div
                    key={index}
                    onClick={() => handleColorClick(colorOption.value)}
                    className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border-gray-300 
                    ${selectedColor === colorOption.value ? "selected" : ""}`}
                    style={{ backgroundColor: colorsValue[colorOption.value] }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <Caption>Prices</Caption>
              <div className="flex items-center gap-3">
                <BodyOne className="line-through mt-4">
                  ${selectedPrice.value}
                </BodyOne>
                <Title level={4} className="text-primary-green">
                  ${" "} {
                    (
                      selectedPrice.value - (selectedPrice.value * product.discount) / 100
                    ).toFixed(2)
                  }
                </Title>
              </div>
            </div>

            <br />

            <div className="flex items-center gap-3">
              <button onClick={handleQuantityDecrease} className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border-gray-300">
                <BiMinus size={20} />
              </button>

              <input
                type="text"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 h-12 text-primary outline-none border border-gray-300 px-6"
              />

              <button onClick={handleQuantityIncrease} className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border-gray-300">
                <BiPlus size={20} />
              </button>

              <button onClick={addToCart} className="primary-btn">ADD TO CART</button>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button onClick={addToFavories} className="flex items-center gap-2 secondary-btn">
                <BiHeart size={20} />
                Add to Wishlist
              </button>
            </div>

            <hr className="my-5" />
            <label htmlFor="">
              <span className="text-primary font-bold">SKU :</span> PRT584E63A
            </label>
            <br />
            <label htmlFor="">
              <span className="text-primary font-bold">Category : </span> 925 Sterling Silver
            </label>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row my-10">
          <div className="lg:w-1/2">
            <Title level={3}>Feel the Vibe</Title>
            <Caption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repudiandae distinctio magnam itaque non veniam ratione quos aperiam repellat nesciunt, voluptatem placeat commodi ut quis dolore quam odit ipsum accusantium?
              Possimus cum debitis minima eum officiis quasi numquam quia placeat, ducimus totam sequi deserunt facilis obcaecati odio molestiae tempore enim omnis autem error nemo ipsum? Nisi ex doloremque quis sed!
            </Caption>
            <Title level={3} className="mt-5">Shipping</Title>
            <div className="flex flex-col gap-3 mt-2">
              <Caption>Free express shipping</Caption>
              <Caption>No questions asked 30 days return policy</Caption>
              <Caption>6 month warranty</Caption>
              <Caption>Shipping internationally to 20+ countries</Caption>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-5 lg:px-8 mt-5">
            <ProductDetailsBox title="FLAT200" desc="Valid on orders above $2000" />
            <ProductDetailsBox title="FLAT300" desc="Valid on orders above $3000" />
            <ProductDetailsBox title="COMBO50" desc="Buy 2 get 3rd at 50% Off" />
            <ProductDetailsBox title="LOVE" desc="15% Off above $1000" />
          </div>
        </div>

        <Title level={3} className="my-5">Related Products</Title>
        <ProductSlideCard />
      </section>

      <br />
      <FilterDiscover />
    </>
  );
};

export const ProductDetailsBox = ({ title, desc }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-3 text-center bg-gray-100 p-8 lg:p-0">
        <Title level={5}>{title}</Title>
        <Caption>{desc}</Caption>
      </div>
    </>
  );
};
