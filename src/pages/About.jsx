import React from "react";
import { Card, Col, Container, Row} from "react-bootstrap";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const About = () => {


  // testimonials
  const testimonials = [
    {
      name: "Emily R.",
      review: "StyleBiytes transformed my living room into a masterpiece! Their attention to detail and personalized approach were outstanding.",
      
      
    },
    {
      name: "John D.",
      review: "The team at StyleBiytes exceeded my expectations. My workspace now feels inspiring and functional!",
      
    },
    {
      name: "Sophia L.",
      review: "Absolutely stunning work! My home feels like a sanctuary thanks to their incredible design skills.",
      
    },
  ];

  return (
    
    <div style={{ fontFamily: "'Poppins', sans-serif", color: "#333" }}>
      
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?t=st=1732191912~exp=1732195512~hmac=9dbcecfeb863658ede830f694ac5641fd38bfb696ef8d0b87477a4e73b63d954&w=1060')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        ></div>

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "20px",
            maxWidth: "800px",
          }}
        >
          <h1 style={{ fontSize: "4rem", fontWeight: "700", marginBottom: "15px" }}>
            Your Dream. Our Passion.
          </h1>
          <p style={{ fontSize: "1.5rem", lineHeight: "1.8", marginBottom: "30px" }}>
            Crafting bespoke interiors that transform your vision into timeless
            elegance. Where passion meets perfection.
          </p>
          <button
            style={{
              padding: "15px 30px",
              fontSize: "1rem",
              backgroundColor: "#FFC107",
              color: "#333",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Discover More
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div style={{ flex: "1 1 45%" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "20px",
                color: "#333",
                position: "relative",
              }}
            >
              Our Story
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
              For over two decades, we have been crafting interiors that redefine
              luxury. Our journey began with a passion for creating personalized
              spaces, and today, we stand as pioneers in premium interior design.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
              Each project we undertake is a testament to our commitment to
              perfection, merging creativity with cutting-edge design principles.
            </p>
          </div>

          <div style={{ flex: "1 1 45%" }}>
            <img
              src="https://img.freepik.com/premium-photo/modern-luxury-home-decor-living-room-interior-empty-blue-marble-wall-background_221619-1477.jpg?w=900"
              alt="Luxurious Interior"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "3rem", marginBottom: "40px", color: "#2b2b2b" }}>
          What Makes Us Different
        </h2>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {[
            { title: "Tailored Designs", description: "100% customizable for every client.", icon: "✨" },
            { title: "Premium Materials", description: "Only the best for your space.", icon: "🛋️" },
            { title: "On-Time Delivery", description: "We value your time as much as ours.", icon: "⏱️" },
            { title: "Sustainability", description: "Eco-friendly design and materials.", icon: "🌱" },
          ].map((service, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 20%",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: "#f9f9f9",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "15px",
                  color: "#FFC107",
                }}
              >
                {service.icon}
              </div>
              <h3 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "10px" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#555" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

          {/* Exclusive Section */}

          <section className="exclusive-about">
      {/* Hero Image Section */}
      <div
        style={{
          backgroundImage:"url('https://img.freepik.com/free-photo/minimalist-kitchen-interior-design_23-2151008725.jpg?t=st=1732293845~exp=1732297445~hmac=0f7124afd1d1b3b821076018e149df7e1b78cbde2862667155501c11199a0d94&w=1060')",
 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width:'90%',
          height: '500px',
          borderRadius: '10px',
          marginBottom: '40px',
          margin:'40px'
        }}
      ></div>

      {/* About Text Section */}
      <Container className="text-center">
        <Row>
          <Col md={12}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2c3e50' }}>"StyleBiytes: Where Design Meets Personality.".</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: '#555', marginBottom: '30px' }}>
              At <strong>StyleBiytes Co.</strong>, we transform spaces into personalized works of art. Our team
              of expert designers and architects specialize in creating spaces that inspire and reflect the
              personalities of those who inhabit them. With a passion for innovation and a keen eye for detail, we
              turn your dream space into reality.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: '#555', marginBottom: '30px' }}>
              Whether you're looking to redesign your home, office, or commercial space, we bring a unique touch
              of elegance and functionality to each project. Our design process is collaborative, ensuring that
              your voice is heard every step of the way.
            </p>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: '#e67e22', marginTop: '50px' }}>
              "Where design meets personality" – The StyleBiytes. Team
            </p>
          </Col>
        </Row>
      </Container>

      {/* Design Philosophy Section */}
      <Container>
        <Row>
          <Col md={12}>
            <Card style={{ padding: '30px', marginTop: '60px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <Card.Body>
                <Card.Title style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '20px' }}>
                  Our Design Philosophy
                </Card.Title>
                <Card.Text style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7' }}>
                  We believe that every space should tell a story. Our design philosophy is rooted in creating
                  environments that balance aesthetics with functionality. We blend timeless design principles with
                  modern trends to craft spaces that are both beautiful and practical.
                </Card.Text>
                <Card.Text style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7' }}>
                  Our work is driven by a commitment to quality, attention to detail, and a deep understanding of
                  our clients' needs. We approach each project with a fresh perspective, striving to deliver
                  innovative solutions that enhance your lifestyle.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>


    {/* Testimonials */}
    <div className="py-5 text-white text-center"
      style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://img.freepik.com/free-photo/soft-pastel-hues-room-children_23-2151690437.jpg?t=st=1732296704~exp=1732300304~hmac=8f2e2e043960cf18adbd6f80e34ecdacb0f821878bb54a3a4aa21487301712d9&w=360')",
        backgroundSize: "cover",backgroundPosition: "center",}}>
      <h2 className="display-4 mb-4">What Our Clients Say</h2>
      <div className="container">
        <div className="row justify-content-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card bg-dark text-white border-light h-100">
                <div className="card-body">
                  <p className="card-text fst-italic">"{testimonial.review}"</p>
                  <h5 className="card-title mt-3">- {testimonial.name}</h5>
                  <div className="text-center m-3">
                  <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    

      {/* Call-to-Action Section */}
      <section
        style={{
          backgroundColor: "#666",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Ready to Transform Your Space?
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px", lineHeight: "1.8" }}>
          Let our team of experts design interiors that resonate with your
          lifestyle. Experience luxury and functionality like never before.
        </p>
        <button
          style={{
            padding: "15px 30px",
            fontSize: "1rem",
            backgroundColor: "#FFC107",
            color: "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default About;
