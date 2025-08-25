"use client";
import { Container, Row, Col, Card } from "react-bootstrap";
import AnimatedSection from "./AnimatedSection";

const skills = [
  "Python", "JavaScript", "React.js", "Next.js", "SQL", ".NET",
  "LangChain", "Hugging Face", "GitHub", "Postman" , "Cloudinary", "EmailJS", "Google Colab", "Gemini AI"
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
           <AnimatedSection>
          <h2 className="fw-bold mb-5 text-center">🛠️ Skills</h2>
        </AnimatedSection>
        <Row>
          {skills.map((skill, idx) => (
            <Col md={3} sm={6} key={idx} className="mb-3">
              <AnimatedSection delay={idx * 0.1}>
                <Card className="text-center shadow-sm">
                  <Card.Body>{skill}</Card.Body>
                </Card>
              </AnimatedSection>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
