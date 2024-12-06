import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import pic2 from '../assets/k1.avif'
import h1 from '../assets/h1.png'
import { Accordion } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'


const UserReviews = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const navigate = useNavigate();

          // FAQs 

    const faqStyle = {
      container: {
        margin: "20px auto",
        maxWidth: "800px",
        fontFamily: "Arial, sans-serif",
      },
      header: {
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "20px",
      },
      accordionItem: {
        marginBottom: "10px",
        
      },
      accordionButton: {
        fontSize: "16px",
        fontWeight: "500",
      },
    };

          // REVIEWS

  const reviews = [
    {
      id: 1,
      userName: "John Doe",
      review: "Amazing designs! Truly exceeded my expectations.",
      rating: 5,
      image: pic2, // Replace with actual image
    },
    {
      id: 2,
      userName: "Jane Smith",
      review: "Loved the attention to detail. Highly recommend!",
      rating: 4.5,
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      id: 3,
      userName: "Michael Brown",
      review: "Professional and timely service. Great experience!",
      rating: 5,
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
    {
      id: 4,
      userName: "Emily Davis",
      review: "Beautiful designs and very functional. Loved it!",
      rating: 4,
      image: "https://via.placeholder.com/150", // Replace with actual image
    },
  ];

  return (
    <>

            {/* REVIEW */}

    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-yellow-50 to-green-50">
      <h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-green-700 mb-12"
        data-aos="fade-up"
      >
        What Our Customers Say
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay={`${review.id * 100}`}
          >
            <img
              src={review.image}
              alt={review.userName}
              className="w-24 h-24 rounded-full mb-4 border-4 border-yellow-500"
            />
            <h3 className="text-lg font-bold text-gray-800">{review.userName}</h3>
            <p className="text-sm text-gray-600 mb-4">{review.review}</p>
            <div className="flex space-x-1 text-yellow-500">
              {Array.from({ length: Math.floor(review.rating) }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              {review.rating % 1 !== 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
         
          
    <section
  style={{
    backgroundColor: "#f7f7f7",
    borderRadius: "15px",
    margin: "30px",
    padding: "20px",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "20px",
      color: "#fff",
      backgroundColor: "#4c2655",
      borderRadius: "15px",
      padding: "20px",
    }}
  >
    {/* Text Content */}
    <div
      style={{
        flex: "1 1 400px",
        color: "#fff",
        borderRadius: "15px",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          margin: "0 0 1rem",
          lineHeight: "1.2",
          fontWeight: "bold",
        }}
      >
        Come, see endless designs <br />
        at our{" "}
        <span style={{ color: "#f1515a" }}>Experience Centre</span>
      </h2>
      <p
        style={{
          fontSize: "1rem",
          margin: "0 0 1.5rem",
          lineHeight: "1.6",
        }}
      >
        Walk into any of our centres in 50+ cities.
      </p>
      <button
        style={{
          backgroundColor: "#f1515a",
          color: "#fff",
          border: "none",
          borderRadius: "30px",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
          alignSelf: "flex-start",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#d9444c")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#f1515a")}
        onClick={() => navigate("/contact")}
      >
        Find one near you &rarr;
      </button>
    </div>

    {/* Image Content */}
    <div
      style={{
        flex: "1 1 400px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={h1} // Replace with your image URL
        alt="Experience Centre"
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "15px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</section>



          {/* FAQs Section */}

          <div style={faqStyle.container}>
      <div style={faqStyle.header}>FAQs About Home Interior Design</div>
      <Accordion>
        <Accordion.Item eventKey="0" style={faqStyle.accordionItem}>
          <Accordion.Header style={faqStyle.accordionButton}>
            1. Why do I need an interior designer?
          </Accordion.Header>
          <Accordion.Body>
            An interior designer helps transform your space by balancing
            functionality and aesthetics while reflecting your personal style.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={faqStyle.accordionItem}>
          <Accordion.Header style={faqStyle.accordionButton}>
            2. Why is Livspace perfect for your home interior design?
          </Accordion.Header>
          <Accordion.Body>
            Livspace offers end-to-end design solutions with professional
            designers, transparent pricing, and hassle-free execution.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={faqStyle.accordionItem}>
          <Accordion.Header style={faqStyle.accordionButton}>
            3. What services are included under home interior design?
          </Accordion.Header>
          <Accordion.Body>
            Services include space planning, furniture design, lighting,
            painting, and decor selection, among others.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" style={faqStyle.accordionItem}>
          <Accordion.Header style={faqStyle.accordionButton}>
            4. How much does home interiors cost?
          </Accordion.Header>
          <Accordion.Body>
            Costs depend on the size of the project, materials used, and design
            complexity. Contact us for a detailed quote.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" style={faqStyle.accordionItem}>
          <Accordion.Header style={faqStyle.accordionButton}>
            5. What will be the timelines for my project completion?
          </Accordion.Header>
          <Accordion.Body>
            Project timelines vary based on scope and scale but typically range
            from 4 to 12 weeks.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" style={faqStyle.accordionItem}>
          <Accordion.Header style={faqStyle.accordionButton}>
            6. What are the trending interior design styles?
          </Accordion.Header>
          <Accordion.Body>
            Trending styles include minimalist, Scandinavian, industrial, and
            modern bohemian designs.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
          
    </>
  );
};

export default UserReviews;
