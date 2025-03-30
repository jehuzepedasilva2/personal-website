import React, { useEffect, useRef } from 'react';

export default function Starfield(props) {
  const {
    speedFactor = 0.05,
    backgroundColor = 'black',
    starColor = [255, 255, 255],
    starCount = 5000,
  } = props;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext('2d');
    if (!c) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const setCanvasExtents = () => {
      canvas.width = w;
      canvas.height = h;
    };

    setCanvasExtents();

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      setCanvasExtents();
    };

    window.addEventListener('resize', handleResize);

    const makeStars = (count) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        });
      }
      return stars;
    };

    let stars = makeStars(starCount);

    const clear = () => {
      c.fillStyle = backgroundColor;
      c.fillRect(0, 0, canvas.width, canvas.height);
    };

    const putPixel = (x, y, brightness) => {
      const [r, g, b] = starColor;
      c.fillStyle = `rgba(${r},${g},${b},${brightness})`;
      c.fillRect(x, y, 1.8, 1.8);
    };

    const moveStars = (distance) => {
      for (const s of stars) {
        s.z -= distance;
        if (s.z <= 1) s.z += 1000;
      }
    };

    let prevTime;

    const tick = (time) => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * speedFactor);
      clear();

      const cx = w / 2;
      const cy = h / 2;

      for (const star of stars) {
        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x < 0 || x >= w || y < 0 || y >= h) continue;

        const d = star.z / 1000;
        const b = 1 - d * d;
        putPixel(x, y, b);
      }

      requestAnimationFrame(tick);
    };

    const start = (time) => {
      prevTime = time;
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(start);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [speedFactor, backgroundColor, starColor, starCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        padding: 0,
        margin: 0,
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
        opacity: 1,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    />
  );
}
