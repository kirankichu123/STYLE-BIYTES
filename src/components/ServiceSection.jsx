import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import pic4 from '../assets/pic4.png';
import pic3 from '../assets/pic3.jpg';
import pic5 from '../assets/pic5.jpg';
import partition from '../assets/partition.jpg';
import kidsroom from '../assets/kidsroom.jpg';
import office from '../assets/office.jpg';
import Rating from '@mui/material/Rating';

import AOS from "aos";
import "aos/dist/aos.css";

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out-quint",
      once: false,
      offset: 100,
    });
  }, []);

  const cardStyle = {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const hoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  };

  const iconStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#f4b400",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const descriptionStyle = {
    fontSize: "0.95rem",
    color: "#666",
    marginBottom: "1rem",
  };

  return (

    <Container className="my-5">
       {/* Rating Section */}

       <div className="text-center shadow" data-aos="zoom-in-up"data-aos-duration="1000">
      <Rating name="full-rating" defaultValue={2.5} precision={0.5} />
      </div>



       {/* Our Seamless  Process */}
      
       <section style={{backgroundColor:'#d9e3f0'}} className="process"data-aos="zoom-in-up"data-aos-duration="1000">
        <h2 >Our Seamless Process</h2>
        <div className=" steps">
          <div className="step">
            <h3>Consultation</h3>
            <p>Free consultation to understand your needs and vision.</p>
          </div>
          <div className="step">
            <h3>Design Concept</h3>
            <p>Custom design proposals with mood boards and layouts.</p>
          </div>
          <div className="step">
            <h3>Execution</h3>
            <p>Sourcing, planning, and creating the perfect space.</p>
          </div>
          <div className="step">
            <h3>Final Reveal</h3>
            <p>Flawless installation and final touches.</p>
          </div>
        </div>
      </section>


            {/* Portfolio Starts */}


      <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            textAlign: "center",
            fontSize: "2rem",
            color: "#333",
            marginBottom: "2rem",
          }}
          className="m-3 p-3 fw-bolder"
        >
          Our Work Speaks for Itself
        </h2>
        <div
          className="portfolio-gallery"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            padding: "1rem",
          }}
        >
          {/* Portfolio Items */}
          {[
            { src: pic3, alt: "Living Room", title: "Living Room Design" },
            { src: office, alt: "Office", title: "Office Design" },
            { src: pic5, alt: "Kitchen", title: "Kitchen Design" },
            { src: pic4, alt: "Bedroom", title: "Bedroom Design" },
            { src: partition, alt: "Partition", title: "Partition Design" },
            { src: kidsroom, alt: "Kidsroom", title: "Kidsroom Design" },
          ].map((item, index) => (
            <div
              className="portfolio-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${100 * (index + 1)}`}
              style={{
                ...cardStyle,
                ...{ cursor: "pointer" },
              }}
              onMouseEnter={(e) => (e.currentTarget.style = hoverStyle)}
              onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
            >
              <img
                style={{
                  height: "80%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "12px 12px 0 0",
                }}
                src={item.src}
                alt={item.alt}
              />
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.2rem",
                  color: "#444",
                  padding: "1rem",
                  margin: 0,
                  backgroundColor: "#fff",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>



              {/* design service */}

      <div data-aos="fade-up" style={{backgroundColor: '#f8f5f0',margin:'20px',padding:'20px'}}>
              <h1 style={{fontFamily: "Oswald",textAlign: "center", fontWeight: "bold", marginBottom: "2rem"}}>Our Interior Design Services</h1>
      <p style={{ textAlign: "center", color: "black", marginBottom: "3rem" }} className="fw-bolder">
      At StyleBiytes , we believe that great design is not only about aesthetics but also about creating environments that inspire and support well-being. Our approach is rooted in responsible and thoughtful design, ensuring that every project we undertake reflects our commitment to:
      </p>
      <Row>
        <Col xs={12} md={4} className="mb-4">
          <div  style={cardStyle}>
            <div style={iconStyle}>&#128101;</div>
            <h3 style={titleStyle}>Kick it Off</h3>
            <p style={descriptionStyle}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <Button variant="outline-primary">More</Button>
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <div style={cardStyle}>
            <div style={{ ...iconStyle, color: "#34a853" }}>&#128736;</div>
            <h3 style={titleStyle}>Review Designs</h3>
            <p style={descriptionStyle}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <Button variant="outline-primary">More</Button>
          </div>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <div style={cardStyle}>
            <div style={{ ...iconStyle, color: "#ea4335" }}>&#127968;</div>
            <h3 style={titleStyle}>Final Design</h3>
            <p style={descriptionStyle}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <Button variant="outline-primary">More</Button>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default ServiceSection;
