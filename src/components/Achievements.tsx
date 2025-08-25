"use client";
import { Container } from "react-bootstrap";
import AnimatedSection from "./AnimatedSection";

export default function Achievements() {
  return (
    <section id="achievements" className="py-5 bg-white">
      <Container>
        <AnimatedSection>
          <h2 className="fw-bold mb-4">Achievements</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <ul>
            <li>5⭐Python,4⭐C at Hakerrank</li>
            <li>Runner-Up – PSIT Tech Expo 2022</li>
            <li>Solved 100+ coding questions</li>
            <li>Worked as a Co-head of a College-level Event (IGNITIA-2k23)</li>
          </ul>
        </AnimatedSection>
      </Container>
    </section>
  );
}
