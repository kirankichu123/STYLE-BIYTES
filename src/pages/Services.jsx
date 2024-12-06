import React from 'react';
import '../styles/servicePage.css'; // Add custom styles for this page
import { Container, Row, Col, Button } from "react-bootstrap";
import ServiceSection from '../components/serviceSection';
import pic9 from '../assets/pic9.jpg'

// Areas of Expertise
const sectionStyle = {




  backgroundColor: "#E8F0F0", // Light grayish background
  padding: "50px 20px",
  fontFamily: "'Arial', sans-serif",
};

const headingStyle = {
  fontSize: "2rem",
  marginBottom: "40px",
  textAlign: "center",
};

const cardStyle = {
  backgroundColor: "#FFFFFF", // White background
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
};

const buttonStyle = {
  display: "inline-block",
  backgroundColor: "transparent",
  border: "2px solid black",
  borderRadius: "20px",
  padding: "5px 10px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "20px",
};




const styles = {
  section: {
    backgroundColor: "#f8f5f0", // Soft beige background
    padding: "50px 0",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#223c37",
    display: "inline-block",
    position: "relative",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  headingCircle: {
    content: '""',
    position: "absolute",
    width: "40px",
    height: "40px",
    backgroundColor: "#f8a500",
    borderRadius: "50%",
    top: "-15px",
    left: "-55px",
    zIndex: "-1",
  },
  subHeading: {
    fontSize: "1.2rem",
    color: "#5a5a5a",
    marginBottom: "30px",
  },
  text: {
    color: "#5a5a5a",
    fontSize: "1rem",
    lineHeight: "1.8",
  },
  image: {
    borderRadius: "20px",
    width: "100%",
    objectFit: "cover",
    boxShadow: "0 20px 20px rgba(0,0,0,0.1)",
    
  },
  servicesList: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
    fontSize: "1rem",
    color: "#333",
  },
  serviceItem: {
    fontWeight: "bold",
    textAlign: "center",
  },
  contactButton: {
    marginTop: "20px",
    borderColor: "#223c37",
    color: "#223c37",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "15px",
    transition: "all 0.3s ease-in-out",
  },
  contactButtonHover: {
    backgroundColor: "#223c37",
    color: "white",
  },
};

const Service = () => {
  return (
    <div style={{backgroundColor:'#f8f5f0'}} className="service-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Space into a Masterpiece</h1>
          <p>Expert interior design services tailored to your vision, style, and functionality.</p>
          <button className="cta-btn">Get Started</button>
        </div>
      </section>

      {/* Service */}

      <section style={styles.section}>
      <Container>
      <div data-aos="fade-left"
     data-aos-duration="3000">

        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={6}>
            <div style={{ position: "relative" }}>
              <h2 style={styles.heading}>
                <span style={styles.headingCircle}></span>Services
              </h2>
            </div>
            <p style={styles.subHeading}>
              Some Of My Capabilities For Your Solutions.
            </p>
            <p style={styles.text}>
              Feugiat hac porttitor sem dictum velit, elementum odio. Sed ipsum
              quis nec eget facilisis. Quis nibh ut bibendum nisi quis placerat
              proin tortor. Mattis in neque.
            </p>
            <p style={styles.text}>
              Feugiat hac porttitor sem dictum velit, elementum odio. Sed ipsum
              quis nec eget facilisis quis nibh ut bibendum.
            </p>
            <Button
              style={styles.contactButton}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = styles.contactButtonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Contact Me →
            </Button>
          </Col>

          {/* Image Section */}
          <Col className="shadow" md={6}>
            <img
              src="https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695915.jpg?t=st=1732295595~exp=1732299195~hmac=f5e70acae1ed1a6700d05db908488ab4cb767ee3c625b7902cdb5369bae5c318&w=1060" // Replace with your image
              alt="Interior Design"
              style={styles.image}
            />
          </Col>
        </Row>

        </div>
      </Container>
    </section>

      

      {/* About Our Service */}
      <section className="about">
      <div data-aos="fade-up"
     data-aos-duration="1000">

        <h2>Why Choose Us?</h2>
        <p>We provide personalized service, cutting-edge design trends, and a focus on both aesthetics and functionality.</p>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Amazing transformation of my living room. The design is stunning!"</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial">
            <p>"Highly professional and creative. Every room feels so much better now."</p>
            <p>- Jane Smith</p>
          </div>
        </div>
        </div>
      </section>

     

     


      

     

      
      {/* ServiceSection */}

      <ServiceSection/>

      {/* Pricing Plans */}
       <section className="pricing"data-aos="zoom-in-up"data-aos-duration="1000">
        <h2>Affordable Pricing for Every Budget</h2>
        <div className="pricing-table">
          <div className="pricing-item">
            <h3>Basic</h3>
            <p>Consultation & Concept Development</p>
            <p>$500</p>
          </div>
          <div className="pricing-item">
            <h3>Standard</h3>
            <p>Design, Sourcing, and Implementation</p>
            <p>$2000</p>
          </div>
          <div className="pricing-item">
            <h3>Premium</h3>
            <p>Full Design, Sourcing, Installation, and Support</p>
            <p>$5000</p>
          </div>
        </div>
      </section>

      {/* Areas Of Expertise */}

              <section>
              <div style={sectionStyle} data-aos="fade-up">
      <h2 style={headingStyle}>Areas Of Expertise</h2>
      <div className="container">
        <div className="row g-4">
          {/* Residential Services */}
          <div className="col-md-4">
            <div style={cardStyle}>
              <div style={buttonStyle}>Residential Services</div>
              <ul className="list-unstyled">
                <li>New Builds</li>
                <li>Remodels/Renovations</li>
                <li>Furnishing & Decor</li>
                <li>Short Term Rentals</li>
                <li>Tiny Homes/Skoolies</li>
                <li>Historic Homes</li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-4 text-center">
            <img
              src={pic9}
              alt="Design Expertise"
              className="img-fluid rounded mb-3"
              style={{ width: "100%", height: "auto" }}
            />
            
          </div>

          {/* Commercial Services */}
          <div className="col-md-4">
            <div style={cardStyle}>
              <div style={buttonStyle}>Commercial Services</div>
              <ul className="list-unstyled">
                <li>Multi-Family Housing</li>
                <li>Professional Offices</li>
                <li>Retail</li>
                <li>Restaurants</li>
                <li>Health & Wellness</li>
                <li>Adaptive Reuse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
              </section>
    </div>
  );
};

export default Service;
