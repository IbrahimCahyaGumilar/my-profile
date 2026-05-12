import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const SpaceBackground = () => {
  const [init, setInit] = useState(false);

  // Inisialisasi engine partikel
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: { value: "#000814" }, // Warna biru gelap luar angkasa
    },
    fpsLimit: 120,
    particles: {
      number: { value: 150, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.8 },
        animation: { enable: true, speed: 1, sync: false }
      },
      size: {
        value: { min: 1, max: 3 },
      },
      move: {
        enable: true,
        speed: 0.5, // Kecepatan gerak bintang
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }, // Efek saat mouse mendekat
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
      },
    },
  }), []);

  if (init) {
    return <Particles id="tsparticles" options={options} className="absolute inset-0 -z-10" />;
  }

  return null;
};

export default SpaceBackground;