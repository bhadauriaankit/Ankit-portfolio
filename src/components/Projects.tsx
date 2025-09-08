"use client";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <AnimatedSection>
          <h2 className="fw-bold mb-4 text-center">🚀 Projects</h2>
        </AnimatedSection>
        <Row>
          {/* Project 1 - Travel Portfolio */}
          <Col md={6} className="mb-4">
            <AnimatedSection delay={0.2}>
              <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="shadow-lg border-0 h-100">
                  <Card.Img variant="top" src="/projects/travel-portfolio.png" alt="Travel Portfolio" />
                  <Card.Body>
                    <h5 className="fw-bold">🌍 Ankit Escapes – Travel Portfolio</h5>
                    <div className="mb-2">
                      <Badge bg="dark" className="me-1">Next.js</Badge>
                      <Badge bg="info" className="me-1">Tailwind</Badge>
                      <Badge bg="success" className="me-1">Cloudinary</Badge>
                      <Badge bg="warning" text="dark">EmailJS</Badge>
                    </div>
                    <p>
                      Personal travel portfolio website with blogs, photos, videos, Cloudinary optimization, 
                      and an EmailJS contact form. Fully responsive and modern design.
                    </p>
                    <div className="d-flex gap-2">
                      <a href="https://ankit-escapes.vercel.app" target="_blank" className="btn btn-primary btn-sm d-flex align-items-center gap-1">
                        <FaGlobe /> Live Demo
                      </a>
                      <a href="https://github.com/bhadauriaankit/travel" target="_blank" className="btn btn-dark btn-sm d-flex align-items-center gap-1">
                        <FaGithub /> GitHub
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </AnimatedSection>
          </Col>

{/*           code assistant */}
          <Col md={6} className="mb-4">
            <AnimatedSection delay={0.3}>
              <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="shadow-lg border-0 h-100">
                  <Card.Img variant="top" src="/projects/review.png" alt=" AI-Powered Code Review Assistant " />
                  <Card.Body>
                    <h5 className="fw-bold">🤖 AI-Powered Code Review Assistant</h5>
                    <div className="mb-2"> 

                      <Badge bg="secondary" className="me-1">Python</Badge>
                      <Badge bg="danger" className="me-1"> LangChain</Badge>
                      <Badge bg="info" className="me-1">Google Generative AI (Gemini)</Badge>
                      <Badge bg="dark">Hugging Face Spaces</Badge>
                      <Badge bg="dark">Gradio</Badge>
                      <Badge bg="dark">Radon</Badge>
                      <Badge bg="dark">AST</Badge>
                      {/* <Badge bg="dark">Google Colab</Badge> */}
                    </div>
                    <p>
                     Developed an AI-powered Code Review Assistant that analyzes Python code using AST.
                    </p>
                   <div className="d-flex gap-2">
                      <a href="https://huggingface.co/spaces/bhadauria/review" target="_blank" className="btn btn-primary btn-sm d-flex align-items-center gap-1">
                        <FaGlobe /> Live Demo
                      </a>
                      <a href="https://github.com/bhadauriaankit/Review-Assistant" target="_blank" className="btn btn-dark btn-sm d-flex align-items-center gap-1">
                        <FaGithub /> GitHub
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </AnimatedSection>
          </Col>

          {/* Project 2 - Underwater Image Enhancement */}
          <Col md={6} className="mb-4">
            <AnimatedSection delay={0.3}>
              <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="shadow-lg border-0 h-100">
                  <Card.Img variant="top" src="/projects/underwater.jpg" alt="Underwater Image Enhancement" />
                  <Card.Body>
                    <h5 className="fw-bold">🐠 Underwater Image Enhancement</h5>
                    <div className="mb-2">
                      <Badge bg="secondary" className="me-1">Python</Badge>
                      <Badge bg="danger" className="me-1">OpenCV</Badge>
                      <Badge bg="info" className="me-1">PCA</Badge>
                      <Badge bg="dark">Google Colab</Badge>
                    </div>
                    <p>
                      Computer vision project enhancing underwater images using PCA-based color correction, 
                      dehazing, and contrast restoration. Improves visibility for marine research & photography.
                    </p>
                    <a href="https://github.com/bhadauriaankit/medical-image-segmentation" target="_blank" className="btn btn-dark btn-sm d-flex align-items-center gap-1">
                      <FaGithub /> GitHub
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </AnimatedSection>
          </Col>

          {/* Project 3 - Suicide Detection System */}
          <Col md={6} className="mb-4">
            <AnimatedSection delay={0.4}>
              <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="shadow-lg border-0 h-100">
                  <Card.Img variant="top" src="/projects/suicide-detection.png" alt="Suicide Detection System" />
                  <Card.Body>
                    <h5 className="fw-bold">🧠 Suicide Detection System</h5>
                    <div className="mb-2">
                      <Badge bg="danger" className="me-1">Python</Badge>
                      <Badge bg="info" className="me-1">NLTK</Badge>
                      <Badge bg="secondary" className="me-1">Machine Learning</Badge>
                    </div>
                    <p>
                      NLP project detecting suicidal tendencies from text using sentiment analysis & ML models. 
                      Aimed at promoting mental health awareness and early detection.
                    </p>
                    <a href="https://github.com/bhadauriaankit/Suicide-detection-using-ml" target="_blank" className="btn btn-dark btn-sm d-flex align-items-center gap-1">
                      <FaGithub /> GitHub
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </AnimatedSection>
          </Col>

          {/* Project 4 - Hand Gesture Robot Car */}
          <Col md={6} className="mb-4">
            <AnimatedSection delay={0.5}>
              <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="shadow-lg border-0 h-100">
                  <Card.Img variant="top" src="/public/projects/robot-car.JPG" alt="Hand Gesture Robot Car" />
                  <Card.Body>
                    <h5 className="fw-bold">🤖🚗 Hand Gesture Controlled Robot Car</h5>
                    <div className="mb-2">
                      <Badge bg="dark" className="me-1">Arduino</Badge>
                      <Badge bg="warning" text="dark" className="me-1">Sensors</Badge>
                      <Badge bg="primary" className="me-1">Python</Badge>
                      <Badge bg="success">Wireless Control</Badge>
                    </div>
                    <p>
                      A robotics project where a car is controlled via hand gestures. 
                      Implemented using Arduino, motion sensors, and wireless communication.
                    </p>
                    <a href="https://github.com/bhadauriaankit/robot-car" target="_blank" className="btn btn-dark btn-sm d-flex align-items-center gap-1">
                      <FaGithub /> GitHub
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </AnimatedSection>
          </Col>

          {/* 📝 Projects without images (placed last) */}
          <Col md={6} className="mb-4">
            <AnimatedSection delay={0.6}>
              <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="shadow-lg border-0 h-100">
                  <Card.Body>
                    <h5 className="fw-bold">🎬 Movie Recommender System</h5>
                    <div className="mb-2">
                      <Badge bg="primary" className="me-1">Python</Badge>
                      <Badge bg="secondary" className="me-1">Pandas</Badge>
                      <Badge bg="success" className="me-1">Scikit-Learn</Badge>
                      <Badge bg="dark">Flask</Badge>
                    </div>
                    <p>
                      A content-based movie recommender system using similarity scores. 
                      Users can search for a movie and get personalized suggestions.
                    </p>
                    <a href="https://github.com/bhadauriaankit/movie-recommender-system" target="_blank" className="btn btn-dark btn-sm d-flex align-items-center gap-1">
                      <FaGithub /> GitHub
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </AnimatedSection>
          </Col>

          <Col md={6} className="mb-4">
            <AnimatedSection delay={0.7}>
              <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="shadow-lg border-0 h-100">
                  <Card.Body>
                    <h5 className="fw-bold">🩺 Pneumonia Detection</h5>
                    <div className="mb-2">
                      <Badge bg="dark" className="me-1">Python</Badge>
                      <Badge bg="primary" className="me-1">TensorFlow</Badge>
                      <Badge bg="info" className="me-1">Keras</Badge>
                      <Badge bg="secondary">CNN</Badge>
                    </div>
                    <p>
                      A deep learning project that classifies chest X-ray images to detect pneumonia. 
                      Built a CNN achieving high accuracy in early detection.
                    </p>
                    <a href="https://github.com/bhadauriaankit/medical-image-segmentation" target="_blank" className="btn btn-dark btn-sm d-flex align-items-center gap-1">
                      <FaGithub /> GitHub
                    </a>
                  </Card.Body>
                </Card>
              </motion.div>
            </AnimatedSection>
          </Col>
        </Row>
      </Container>
    </section>
  );
}



