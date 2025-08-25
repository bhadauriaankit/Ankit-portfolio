"use client";
import { Container, Button, Row, Col } from "react-bootstrap";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      className="position-relative overflow-hidden d-flex align-items-center"
      id="home"
      style={{ minHeight: "90vh", backgroundColor: "#f8f9fa" }}
    >
      {/* 🔥 Stronger Animated Background Blobs */}
      <motion.div
        className="position-absolute rounded-circle"
        style={{
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle at 30% 30%, #0056b3, #6610f2)",
          top: "-80px",
          left: "-120px",
          opacity: 0.4, // increased from 0.25 → more visible
          filter: "blur(60px)",
        }}
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="position-absolute rounded-circle"
        style={{
          width: "260px",
          height: "260px",
          background: "radial-gradient(circle at 30% 30%, #0dcaf0, #20c997)",
          bottom: "-100px",
          right: "-120px",
          opacity: 0.4, // more visible
          filter: "blur(60px)",
        }}
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* ✅ Hero Content */}
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center text-md-start text-center">
          {/* 🔥 Profile Photo + Name */}
          <Col md={5} className="d-flex flex-column align-items-center mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="position-relative"
            >
              {/* Floating photo */}
              <motion.img
                src="/profile.jpg"
                alt="Ankit Singh"
                className="rounded-circle shadow-lg border border-3 border-white"
                style={{
                  width: "240px",
                  height: "240px",
                  objectFit: "cover",
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* ✨ Your Name Below Photo */}
            <motion.h2
              className="fw-bold mt-3"
              style={{
                background: "linear-gradient(90deg, #007bff, #6610f2, #20c997)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "1.8rem",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Ankit Singh
            </motion.h2>
          </Col>

          {/* Text + Buttons */}
          <Col md={7}>
            <AnimatedSection>
              <h1 className="display-5 fw-bold">
                <Typewriter
                  options={{
                    strings: [
                      "Hi, I’m Ankit Singh 👋",
                      "Full-Stack Developer 💻",
                      "AI Enthusiast 🤖",
                      "B.Tech IT Graduate 🎓",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="lead text-muted">
                Crafting responsive, dynamic, and creative web experiences.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="d-flex flex-wrap gap-3 mt-3">
                <Button
                  variant="dark"
                  href="https://github.com/bhadauriaankit"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  variant="primary"
                  href="https://linkedin.com/in/ankitsingh-it"
                  target="_blank"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outline-secondary"
                  href="mailto:ankitsingh20114@gmail.com"
                >
                  Email
                </Button>
                <a href="/resume.pdf" download className="btn btn-success fw-bold">
                  📄 Download Resume
                </a>
              </div>
            </AnimatedSection>
          </Col>
        </Row>
      </Container>

      {/* 🎨 Wave Divider at Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-9.31,73.45 C150.00,150.00 349.20,-49.98 509.55,92.45 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#ffffff" }}
          ></path>
        </svg>
      </div>
    </section>
  );
}
