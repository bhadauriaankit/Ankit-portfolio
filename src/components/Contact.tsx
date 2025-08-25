"use client";
import { Container, Form, Button, Alert, Spinner, Card, InputGroup } from "react-bootstrap";
import { useState } from "react";
import emailjs from "emailjs-com";
import { BsPerson, BsEnvelope, BsChatDots } from "react-icons/bs";

import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("loading");

    emailjs
      .sendForm(
        "service_xee62nm",     // ✅ Your Service ID
        "template_htfi33t",    // ✅ Your Template ID
        form,
        "v_aicFlI2bGpy_NGwFhpt" // ✅ Your Public Key
      )
      .then(() => {
        setStatus("success");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container className="text-center">
        {/* Animated Heading */}
        <motion.h2
          className="fw-bold mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          📩 Get In Touch
        </motion.h2>

        <motion.p
          className="text-muted mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project idea or just want to say hi? Fill the form below and I’ll get back to you soon!
        </motion.p>

        {/* Animated Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card
            className="p-4 shadow-lg border-0 rounded-4 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            {status === "success" && (
              <Alert variant="success" className="mb-4">
                ✅ Message sent successfully!
              </Alert>
            )}
            {status === "error" && (
              <Alert variant="danger" className="mb-4">
                ❌ Something went wrong. Please try again.
              </Alert>
            )}

            <Form onSubmit={sendEmail}>
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text>
                      <BsPerson />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text>
                      <BsEnvelope />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      name="from_email"
                      placeholder="Your Email"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text>
                      <BsChatDots />
                    </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={4}
                      placeholder="Write your message..."
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="d-grid"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="primary"
                  type="submit"
                  disabled={status === "loading"}
                  className="fw-bold py-2 rounded-3"
                  style={{
                    background: "linear-gradient(90deg, #007bff, #0056d2)",
                    border: "none",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        className="me-2"
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message 🚀"
                  )}
                </Button>
              </motion.div>
            </Form>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
