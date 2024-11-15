import Image from "./components/Image";
import Logo from "./assets/images/logo.png";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Menu from "./components/Menu";
import Flex from "./components/Flex";
import Container from "./components/Container";
import Hero from "./assets/images/hero-image.png";
import Sweater from "./assets/images/sweater.png";
import Jeans from "./assets/images/jeans.png";
import Shoe from "./assets/images/shoe.png";
import Lady from "./assets/images/countergirl.png";
import Best from "./assets/images/best-seller-product.png";
import Best2 from './assets/images/best-seller-pant.png';
import { FaStar } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="header_section bg-primaryColor-0">
        <Container className={"max-w-7xl"}>
          <Flex
            className={
              "justify-between items-center font-poppins font-semibold text-2xl py-14"
            }
          >
            <div className="img_wrapper">
              <Image imgSrc={Logo} imgAlt={"Logo"} />
            </div>
            <div className="nav_link">
              <Flex className={"space-x-14 items-center"}>
                <Menu mText={"Man"} />
                <Menu mText={"Woman"} />
                <Menu mText={"Kids"} />
                <Menu mText={"Collection"} />
                <Menu mText={"Trends"} />
              </Flex>
            </div>
            <div className="nav_btn flex space-x-4">
              <Button
                bText={"Login"}
                className={
                  "px-8 py-4 border border-btnColor-0 rounded-[10px] hover:bg-btnColor-0"
                }
              />
              <Button
                bText={"Sign up"}
                className={
                  "px-8 py-4 border border-btnColor-0 rounded-[10px] hover:bg-btnColor-0"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>

      <div className="banner_section bg-primaryColor-0 pt-20 pb-32">
        <Container className={"max-w-6xl"}>
          <Flex className={"justify-between items-center space-x-28"}>
            <div className="left_content font-poppins font-semibold">
              <Heading
                as={"h1"}
                text={"Find The Best Fashion Style For You"}
                className={"text-6xl max-w-lg leading-normal mb-9"}
              />
              <Heading
                as={"p"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "
                }
                className={"font-normal text-2xl max-w-xl leading-normal mb-16"}
              />
              <Button
                bText={"Shop Now"}
                className={
                  "bg-black py-5 px-16 rounded-[10px] text-white uppercase"
                }
              />
            </div>
            <div className="right_content">
              <Image imgSrc={Hero} imgAlt={"Hero image"} className={"w-full"} />
            </div>
          </Flex>
        </Container>
      </div>

      <div className="collection_section pt-28">
        <Container className={"max-w-6xl"}>
          <div className="collection_title">
            <Heading
              text={"New Collection"}
              as={"h2"}
              className={"text-center text-6xl font-bold font-frank"}
            />
          </div>
          <Flex className={"space-x-12 py-20"}>
            <div className="collection_item relative">
              <Image imgSrc={Sweater} />
              <Heading
                text={"Sweater"}
                as={"p"}
                className={
                  "text-black text-center bg-white text-2xl px-24 py-5 rounded-[20px] font-poppins absolute bottom-10 left-1/2 -translate-x-1/2"
                }
              />
            </div>
            <div className="collection_item relative">
              <Image imgSrc={Jeans} />
              <Heading
                text={"Jeans"}
                as={"p"}
                className={
                  "text-black text-center bg-white text-2xl px-24 py-5 rounded-[20px] font-poppins absolute bottom-10 left-1/2 -translate-x-1/2"
                }
              />
            </div>
            <div className="collection_item relative">
              <Image imgSrc={Shoe} />
              <Heading
                text={"Baskets"}
                as={"p"}
                className={
                  "text-black text-center bg-white text-2xl px-24 py-5 rounded-[20px] font-poppins absolute bottom-10 left-1/2 -translate-x-1/2"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>

      <div className="counter_section pt-28 mb-80">
        <Container className={"max-w-6xl"}>
          <Flex className={"justify-between items-center space-x-28"}>
            <div className="counter_left">
              <Image imgSrc={Lady} />
            </div>
            <div className="counter_right font-poppins font-semibold text-2xl relative">
              <Heading
                as={"h3"}
                text={"Best Fashion Since 2010"}
                className={
                  "text-6xl font-frank font-bold max-w-md mb-10 leading-normal"
                }
              />
              <Heading
                as={"p"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "
                }
                className={"max-w-md mb-36"}
              />
              <div className="counterPart py-16 px-2 rounded-[20px] bg-counterBg-0 absolute left-[-220px] z-[-1]">
                <Flex>
                  <div className="counter_item border-r-2 border-black px-8">
                    <Heading
                      as={"p"}
                      text={"2020"}
                      className={"font-podkova font-bold text-6xl "}
                    />
                    <Heading
                      as={"p"}
                      text={"Founded"}
                      className={"font-medium text-2xl "}
                    />
                  </div>
                  <div className="counter_item border-r-2 border-black px-8">
                    <Heading
                      as={"p"}
                      text={"5000+"}
                      className={"font-podkova font-bold text-6xl "}
                    />
                    <Heading
                      as={"p"}
                      text={"Product Sold"}
                      className={"font-medium text-2xl "}
                    />
                  </div>
                  <div className="counter_item px-8">
                    <Heading
                      as={"p"}
                      text={"4500+"}
                      className={"font-podkova font-bold text-6xl "}
                    />
                    <Heading
                      as={"p"}
                      text={"Best Reviews"}
                      className={"font-medium text-2xl "}
                    />
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>

      <div className="product_section bg-productBg-0 pb-28">
        <Container className={"max-w-6xl pt-12"}>
          <Flex className={"items-center space-x-12"}>
            <div className="product_left text-white font-frank font-bold text-2xl">
              <Heading
                as={"h3"}
                text={"Best Fashion Since 2010"}
                className={"text-6xl max-w-md mb-8 leading-normal"}
              />
              <Heading
                as={"p"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."
                }
                className={"max-w-md mb-10"}
              />
              <Button
                bText={"Learn MORE"}
                className={
                  "bg-black py-5 px-16 rounded-[10px] text-white font-poppins"
                }
              />
            </div>
            <div className="product_right">
              <Flex className={'space-x-5'}>
                <div className="best_seller_product">
                  <Image imgSrc={Best} />
                  <div className="product_details bg-white font-poppins p-4">
                    <Flex className={"text-starColor-0 mb-2"}>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Flex>
                    <Heading as={'p'} text={'Sweater Shirt'} className={'text-[22px] font-semibold'}/>
                    <span className={'text-2xl text-priceColor-0'}>$45.99</span>
                    <span className={'text-2xl ml-8'}>$35.99</span>
                  </div>
                </div>
                <div className="best_seller_product">
                  <Image imgSrc={Best2} />
                  <div className="product_details bg-white font-poppins p-4">
                    <Flex className={"text-starColor-0 mb-2"}>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Flex>
                    <Heading as={'p'} text={'Pants fashion'} className={'text-[22px] font-semibold'}/>
                    <span className={'text-2xl text-priceColor-0'}>$55</span>
                    <span className={'text-2xl ml-8'}>$44.99</span>
                  </div>
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default App;
