"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const initParticles = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={initParticles}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: "#007bff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: "#007bff", opacity: 0.3 },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
