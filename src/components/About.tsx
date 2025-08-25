"use client";
import { Container } from "react-bootstrap";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <AnimatedSection>
          <h2 className="fw-bold mb-5 text-center">🙋 About Me</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p>
            I am a B.Tech Information Technology student (2021–2025) at Pranveer Singh Institute of Technology, with a strong passion for web development, artificial intelligence, and problem-solving.
                I enjoy building scalable web applications, exploring AI-driven solutions, and continuously sharpening my coding skills through projects and real-world challenges.
             My goal is to leverage technology to create impactful and innovative solutions.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
