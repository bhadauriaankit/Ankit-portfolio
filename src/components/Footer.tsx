"use client";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <Container>
        <p>© {new Date().getFullYear()} Ankit Singh. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}
