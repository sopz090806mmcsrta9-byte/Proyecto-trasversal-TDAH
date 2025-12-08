import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const spaceRef = useRef(null);

  const start = () => navigate("/menu");

  const stars = Array.from({ length: 120 }).map(() => ({
    top: Math.random() * window.innerHeight,
    left: Math.random() * window.innerWidth,
    size: 1 + Math.random() * 3,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 5,
    opacity: 0.5 + Math.random() * 0.5
  }));

  const planetPalettes = [
    ['#d96459', '#c94b4b', '#f7b267'],
    ['#6b9ac4', '#4b6b9a', '#b3d4f0'],
    ['#9ad3c0', '#6fbf73', '#2d6a4f'],
    ['#f4d35e', '#f7b267', '#ee964b'],
    ['#c77dff', '#7a5cff', '#ffd6f0'],
    ['#ff9ecd', '#ff6b81', '#ffdde1'],
    ['#90e0ef', '#48bfe3', '#036672'],
    ['#fff3b0', '#ffd670', '#e9c46a'],
    ['#ffcbf2', '#f3c4fb', '#ecbcfd'],
    ['#8ecae6', '#219ebc', '#023047'],
    ['#06d6a0', '#1b9aaa', '#ffd166'],
  ];

  useEffect(() => {
    const space = spaceRef.current;

    function spawnAt(x, y) {
      Math.random() < 0.25 ? createGalaxy(x, y) : createPlanet(x, y);
    }

    function createPlanet(x, y) {
      const size = Math.floor(Math.random() * 40) + 20;
      const life = (Math.random() * 3 + 4).toFixed(2) + "s";
      const spin = (Math.random() * 6 + 6).toFixed(2) + "s";
      const palette = planetPalettes[Math.floor(Math.random() * planetPalettes.length)];

      const planet = document.createElement("div");
      planet.className = "space-object planet";
      planet.style.width = size + "px";
      planet.style.height = size + "px";
      planet.style.left = x + "px";
      planet.style.top = y + "px";
      planet.style.setProperty("--life", life);
      planet.style.setProperty("--spin", spin);
      planet.style.background =
        `radial-gradient(circle at 30% 25%, ${palette[0]}, ${palette[1]} 40%, ${palette[2]} 100%)`;

      if (Math.random() < 0.45) {
        const ring = document.createElement("div");
        ring.className = "ring";
        const ringScale = 1.8 + Math.random() * 1.2;
        const ringWidth = size * ringScale;
        const ringHeight = ringWidth * 0.45;
        ring.style.width = ringWidth + "px";
        ring.style.height = ringHeight + "px";
        ring.style.border = Math.max(2, Math.round(size / 10)) + "px solid rgba(255,255,255,0.18)";
        ring.style.left = "50%";
        ring.style.top = "50%";
        ring.style.transform = "translate(-50%, -50%) rotateX(65deg)";
        ring.style.setProperty("--spin", (Math.random() * 10 + 8).toFixed(2) + "s");
        planet.appendChild(ring);
      }

      space.appendChild(planet);
      setTimeout(() => planet.remove(), parseFloat(life) * 1000);
    }

    function createGalaxy(x, y) {
      const size = Math.floor(Math.random() * 120) + 60;
      const life = (Math.random() * 3 + 6).toFixed(2) + "s";
      const spin = (Math.random() * 12 + 10).toFixed(2) + "s";

      const galaxy = document.createElement("div");
      galaxy.className = "space-object galaxy";
      galaxy.style.left = x + "px";
      galaxy.style.top = y + "px";
      galaxy.style.width = size + "px";
      galaxy.style.height = size + "px";
      galaxy.style.setProperty("--life", life);
      galaxy.style.setProperty("--spin", spin);

      space.appendChild(galaxy);
      setTimeout(() => galaxy.remove(), parseFloat(life) * 1000);
    }

    space.addEventListener("click", e => spawnAt(e.clientX, e.clientY));
    return () => space.removeEventListener("click", e => spawnAt(e.clientX, e.clientY));
  }, []);

  return (
    <div className="home-container" ref={spaceRef}>
      <div className="moon-wrapper">
  <div className="moon"></div>
</div>

      <h1 className="app-title">Aprende inglés con nosotros</h1>

      <div className="stars-area">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: `${star.top}px`,
              left: `${star.left}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              opacity: star.opacity
            }}
          />
        ))}
      </div>
      <button className="start-btn" onClick={start}>
        ¡Comencemos!
      </button>
    </div>
  );
};

export default Home;
