
import apple_black_rot from  "../assets/images/carousel/apple_black_rot.JPG"
import apple_healthy from  "../assets/images/carousel/apple_healthy.JPG"
import apple_scab from  "../assets/images/carousel/apple_scab.JPG"
import cherry_healthy from  "../assets/images/carousel/cherry_healthy.JPG"
import cherry_powdery_meldrew from  "../assets/images/carousel/cherry_powdery_mildrew.JPG"
import corn_gray_leaf_spot from  "../assets/images/carousel/corn_gray_leaf_spot.JPG"
import corn_healthy from  "../assets/images/carousel/corn_healthy.JPG"
import corn_rust from  "../assets/images/carousel/corn_rust.JPG"
import grape_black_rot from  "../assets/images/carousel/grape_black_rot.JPG"
import grape_esca_black_measles from  "../assets/images/carousel/grape_esca_black_measles.JPG"
import grape_healthy from  "../assets/images/carousel/grape_healthy.JPG"
import grape_leaf_blight_isariopsis_leaf_spot from  "../assets/images/carousel/grape_leaf_blight_isariopsis_leaf_spot.JPG"
import peach_bacterial_spot from  "../assets/images/carousel/peach_bacterial_spot.JPG"
import peach_healthy from  "../assets/images/carousel/peach_healthy.JPG"
import pepper_bell_healthy from  "../assets/images/carousel/pepper_bell_healthy.JPG"
import potato_healthy from  "../assets/images/carousel/potato_healthy.JPG"
import potato_early_blight from  "../assets/images/carousel/potato_early_blight.JPG"
import potato_late_blight from  "../assets/images/carousel/potato_late_blight.JPG"
import strawberry_healthy from  "../assets/images/carousel/strawberry_healthy.JPG"

import strawberry_leaf_scorch from  "../assets/images/carousel/strawberry_leaf_scorch.JPG"
import tomato_bacterial_spot from  "../assets/images/carousel/tomato_bacterial_spot.JPG"
import tomato_early_blight from  "../assets/images/carousel/tomato_early_blight.JPG"
import tomato_healthy from  "../assets/images/carousel/tomato_healthy.JPG"
import tomato_late_blight from  "../assets/images/carousel/tomato_late_blight.JPG"
import tomato_leaf_mold from  "../assets/images/carousel/tomato_leaf_mold.JPG"
import tomato_mosaic_virus from  "../assets/images/carousel/tomato_mosaic_virus.JPG"
import tomato_septoria_leaf_spot from  "../assets/images/carousel/tomato_septoria_leaf_spot.JPG"
import Slider from "react-slick";
import { useRef } from "react"
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css'
import ArrowLeft from "../assets/icons/ArrowLeft";

const carouselItems = [
    {
        img: apple_black_rot,
        title: "Apple Black Rot"
    },
    {
        img: apple_healthy,
        title: "Apple Healty"
    },
    {
        img: apple_scab,
        title: "Apple Scab"
    },
    {
        img: cherry_healthy,
        title: "Cherry Healthy"
    },
    {
        img: cherry_powdery_meldrew,
        title: "Cherry Powdery Mildrew"
    },
    {
        img: corn_gray_leaf_spot,
        title: "Corn Gray Leaf Spot",
    },
    {
        img: corn_healthy,
        title: "Corn Healthy",
    },
    {
        img: corn_rust,
        title: "Corn Rust",
    },
    {
        img: grape_black_rot,
        title: "Grape Black Rot",
    },
    {
        img: grape_esca_black_measles,
        title: "Grape Esca Black Measles",
    },
    {
        img: grape_healthy,
        title: "Grape Healthy",
    },
    {
        img: grape_leaf_blight_isariopsis_leaf_spot,
        title: "Grape Leaf Blight Isariopsis Leaf Spot",
    },
    {
        img: peach_bacterial_spot,
        title: "Peach Bactorial Spot",
    },
    {
        img: peach_healthy,
        title: "Peach Healthy",
    },
    {
        img: pepper_bell_healthy,
        title: "Pepper Bell Healthy",
    },
    {
        img: potato_early_blight,
        title: "Potato Early Blight",
    },
    {
        img: potato_healthy,
        title: "Potato Healthy",
    },
    {
        img: potato_early_blight,
        title: "Potato Early Blight",
    },
    {
        img: potato_late_blight,
        title: "Potato Late Blight",
    },
    {
        img: strawberry_healthy,
        title: "Strawberry Healthy",
    },

    {
        img: strawberry_leaf_scorch,
        title: "Strawberry Leaf Scorch",
    },
    {
        img: tomato_bacterial_spot,
        title: "Tomato Bacterial Spot",
    },
    {
        img: tomato_early_blight,
        title: "Tomato Early Blight",
    },
    {
        img: tomato_healthy,
        title: "Tomato Healthy",
    },
    {
        img: tomato_late_blight,
        title: "Tomato Late blight",
    },
    {
        img: tomato_leaf_mold,
        title: "Tomato Leaf Mold",
    },
    {
        img: tomato_mosaic_virus,
        title: "Tomato Mosaic Virus",
    },
    {
        img: tomato_septoria_leaf_spot,
        title: "Tomato Septoria Leaf Spot"
    }
]
const CarouselItem = ({title, img}) => (
    <div className="mx-[30px]">
        <img src={img} alt={title} className="mb-2 rounded-[25px] mx-auto" />
        <p className="font-semibold text-2xl ml-2">{title}</p>
    </div>
)
const Carousel = () => {
    const slider = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <div className="">
            <h3 className="text-center text-[36px] font-bold mb-[48px] mt-[80px]">Leaf Diagnosis Showcase</h3>
            <div className="gap-[80px] max-w-[1000px] mx-auto mb-[120px] relative">
                <button className="absolute top-1/2 -translate-y-1/2 -left-[70px] z-10 w-10 h-10 flex items-center justify-center bg-primary rounded-full" onClick={() => slider?.current?.slickPrev()}><ArrowLeft className="fill-white rotate-90"/></button>
                <Slider {...settings} className="" ref={slider}>
                    {carouselItems.map((item, index)=> <CarouselItem key={index} {...item}/>)}
                </Slider>
                <button className="absolute top-1/2 -translate-y-1/2 -right-[70px] z-10 w-10 h-10 flex items-center justify-center bg-primary rounded-full" onClick={() => slider?.current?.slickNext()}><ArrowLeft className="fill-white -rotate-90"/></button>
            </div>

        </div>
    )
}

export default Carousel