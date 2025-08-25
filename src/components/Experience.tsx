"use client";
import { Container } from "react-bootstrap";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGlobe, FaRobot } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Infosys Springboard Internship – Artificial Intelligence",
      date: "Feb 2025 – Mar 2025",
      icon: <FaLaptopCode size={24} />,
      points: [
        "Designed & debugged API workflows using Flask.",
        "Tested image analysis outputs for accuracy.",
        "Integrated Gemini AI API for better medical insights.",
      ],
    },
    {
      title: "Freelance Web Developer – Small Business Websites",
      date: "2024 – Present",
      icon: <FaGlobe size={24} />,
      points: [
        "Built responsive websites for small businesses using Next.js & Bootstrap.",
        "Customized designs to match client branding.",
        "Implemented SEO optimization for better visibility.",
      ],
    },
    {
      title: "AI Training Contributor  – Outlier AI",
      date: "2023 – 2024",
      icon: <FaRobot size={24} />,
      points: [
        "Worked on AI dataset annotation and text classification tasks.",
        "Helped improve NLP models by providing training feedback.",
        "Collaborated in projects related to sentiment analysis & intent detection.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-5 bg-white">
      <Container>
        <AnimatedSection>
          <h2 className="fw-bold mb-5 text-center">💼 Experience</h2>
        </AnimatedSection>

        <div className="position-relative ms-2">
          {/* Timeline vertical line */}
          <div
            className="position-absolute top-0 start-0 bg-primary"
            style={{ width: "4px", height: "100%" }}
          ></div>

          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={0.2 * (index + 1)}>
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="d-flex mb-5"
              >
                {/* Icon circle */}
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center shadow"
                  style={{ width: "50px", height: "50px", marginRight: "20px" }}
                >
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="p-3 border rounded-3 shadow-sm bg-light w-100">
                  <h5 className="fw-bold mb-1">{exp.title}</h5>
                  <p className="text-muted mb-2">📅 {exp.date}</p>
                  <ul className="mb-0">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
