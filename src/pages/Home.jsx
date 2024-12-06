import React, { useState , useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import k1 from '../assets/k1.avif';
import pic12 from '../assets/pic12.jpg';
import pic1 from '../assets/pic1.png';
import pic8 from '../assets/pic8.jpeg';
import kitchen from '../assets/kitchen.jpg';
import bedroom from '../assets/bedroom.jpg';
import partition from '../assets/partition.jpg'
import kidsroom from '../assets/kidsroom.jpg';
import living from '../assets/living.jpg';
import dinning from '../assets/dinning.jpg';
import { motion } from "framer-motion";
import UserReviews from './UserReviews';



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
      mirror: true,   
    });

  }, []);

  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  // About Section

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: {
      scale: 0.95,
    },
  };



          // Carousal Slides
  const slides = [
    {
      image: k1,
      title: "THE MOST RELIABLE",
      subtitle: "Interior Furnishing Company Since 2004",
      highlight: "Pricing Started at ₹6.3 lac",
    },
    {
      image: pic1,
      title: "100% CUSTOMISED",
      subtitle: "KITCHEN | BEDROOM | LIVING | DINING",
      highlight: "Pricing Started at ₹6.3 lac",
    },
    {
      image: pic12,
      title: "ELEGANT SPACES",
      subtitle: "Designed to Reflect Your Lifestyle",
      highlight: "Starting at ₹5.5 lac",
    },
  ];

          // Info Section Data
  const data = [
    { title: "SINCE", description: "2004" },
    { title: "PREMIUM", description: "Materials" },
    { title: "10 YEARS", description: "Warranty" },
    { title: "COMPLETION", description: "40 Working Days" },
    { title: "PROJECTS", description: "300 Per Month" },
    { title: "LIFELONG", description: "Service Support" },
  ];

        // What We Do Cards
  const cards = [
    {
      title: "KID'S ROOM",
      image: kidsroom,
    },
    {
      title: "Living",
      image: living,
    },
    {
      title: "KITCHEN",
      image: kitchen,
    },
    {
      title: "DINING",
      image: dinning,
    },
    {
      title: "BEDROOM",
      image: bedroom,
    },
    {
      title: "PARTITION",
      image: partition
    }
  ];

  return (

    <>

    <div style={{backgroundColor:'#f8f8ff'}}>

    {/* Carousel Section */}
    <Carousel fade interval={3000} className="relative">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div  className="hero-section flex items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center relative text-white"
                   style={{ backgroundImage: `url('${slide.image}')` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="relative z-10 text-center max-w-lg px-4">
                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 text-transparent bg-clip-text mb-4">
                   {slide.title}</h2>
                   <p className="text-sm sm:text-lg mb-4">{slide.subtitle}</p>
                   <h6 className="bg-yellow-500 text-gray-800 py-2 px-4 rounded-lg text-sm sm:text-base">{slide.highlight}</h6>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      
             {/* Info Section */}
      <div className="text-center py-16 bg-gray-100">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-600 mb-8">Professional Home Interior Design Company</h1>
        <div className="flex justify-center gap-6 flex-wrap">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-full border border-gray-200 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:border-yellow-500"
            >
              <h3 className="text-lg sm:text-xl text-green-600 font-bold mb-2">{item.title}</h3>
              <p className="text-sm sm:text-lg text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

            {/* What We Do Section */}
        <section className="bg-gray-100 py-10">
        <h1 className="text-center font-extrabold text-green-700 text-3xl md:text-4xl mb-8">WHAT WE DO</h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
                data-aos="fade-up"data-aos-delay={index * 100}>
                <img src={card.image} alt={card.title} className="object-cover w-full h-48"/>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-center text-gray-800"> {card.title} </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


            {/* About Section */}
  <section className="relative bg-gradient-to-r from-green-50 to-yellow-50 py-8 sm:py-12 px-4 sm:px-8 lg:px-16">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center" initial="hidden" whileInView="visible"
      transition={{ staggerChildren: 0.2 }} // Stagger animations for children
      viewport={{ once: false, amount: 0.5 }} // Trigger animations repeatedly on scroll
    >
      {/* Text Section */}
      <motion.div
        className="text-center md:text-left" variants={textVariants} transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center md:justify-start mb-6">
          <div className="h-[2px] bg-yellow-500 flex-grow"></div>
          <p className="text-yellow-500 font-semibold uppercase mx-4 text-xs sm:text-sm tracking-wider"> About Us </p>
          <div className="h-[2px] bg-yellow-500 flex-grow"></div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-green-600 font-bold leading-tight mb-6"> Why Choose Us? </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
          Experience the perfect blend of luxury and functionality with DLife
          Interiors. Our team is dedicated to crafting elegant, modern spaces
          that reflect your unique style. </p>
        <motion.button
          className="bg-yellow-500 text-gray-800 py-2 px-4 sm:py-2 sm:px-6 rounded-lg text-sm sm:text-lg font-semibold hover:bg-yellow-600"
          variants={buttonVariants} whileHover="hover" whileTap="tap"
          onClick={()=>navigate('/about')}
        >
          Explore Our About
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="hidden md:block" variants={imageVariants} transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={pic8} alt="Interior Design" className="rounded-lg shadow-xl h-auto w-full" style={{ maxHeight: "400px" }} />
      </motion.div>
    </motion.div>
  </section>


          {/* UserReview Section */}
        <UserReviews/>

    </div>

           

    </>
  );
};

export default Home;
