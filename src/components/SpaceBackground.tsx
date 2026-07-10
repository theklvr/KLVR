import { useEffect, useRef } from "react";

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || 600);

    // Track parent resizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Stars data
    interface Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      fadeSpeed: number;
      isBrightening: boolean;
      color: string;
    }

    const stars: Star[] = [];
    const starCount = 80;

    // Green hues matching lemon green / dark green / white for depth
    const greenHues = [
      "rgba(198, 241, 53, ",   // Lemon green / lime
      "rgba(16, 185, 129, ",   // Emerald green
      "rgba(52, 211, 153, ",   // Light emerald
      "rgba(110, 231, 183, ",  // Pale lime green
      "rgba(255, 255, 255, ",  // Deep distant white
      "rgba(255, 255, 255, ",  // Multiple white occurrences for balanced ratio
    ];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.4,
        opacity: Math.random(),
        fadeSpeed: Math.random() * 0.01 + 0.003,
        isBrightening: Math.random() > 0.5,
        color: greenHues[Math.floor(Math.random() * greenHues.length)],
      });
    }

    // Shooting stars data
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
    }

    const shootingStars: ShootingStar[] = [];
    const maxShootingStars = 2;

    function spawnShootingStar() {
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.3,
        length: Math.random() * 60 + 50,
        speed: Math.random() * 6 + 5,
        angle: Math.PI / 6 + Math.random() * (Math.PI / 12), // Diagonally top-left to bottom-right
        opacity: Math.random() * 0.6 + 0.4,
        active: true,
      });
    }

    let lastSpawnTime = 0;
    const spawnInterval = 3000; // spawn shooting star periodically

    function draw(time: number) {
      ctx.clearRect(0, 0, width, height);

      // Draw normal blinking stars
      stars.forEach((star) => {
        // Twinkle logic
        if (star.isBrightening) {
          star.opacity += star.fadeSpeed;
          if (star.opacity >= 0.85) {
            star.isBrightening = false;
          }
        } else {
          star.opacity -= star.fadeSpeed;
          if (star.opacity <= 0.1) {
            star.isBrightening = true;
            // Reposition stars occasionally to maintain randomness
            if (Math.random() > 0.98) {
              star.x = Math.random() * width;
              star.y = Math.random() * height;
            }
          }
        }

        ctx.fillStyle = `${star.color}${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Optional lens flare / radial bloom for brighter green stars
        if (star.size > 1.2 && star.color.includes("198, 241, 53")) {
          ctx.fillStyle = `rgba(198, 241, 53, ${star.opacity * 0.12})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Spawn shooting stars
      if (time - lastSpawnTime > spawnInterval && shootingStars.filter(s => s.active).length < maxShootingStars) {
        if (Math.random() > 0.7) {
          spawnShootingStar();
          lastSpawnTime = time;
        }
      }

      // Draw active shooting stars
      shootingStars.forEach((star) => {
        if (!star.active) return;

        const cos = Math.cos(star.angle);
        const sin = Math.sin(star.angle);
        star.x += star.speed * cos;
        star.y += star.speed * sin;
        star.opacity -= 0.012; // Gradual fade

        if (star.opacity <= 0 || star.x > width || star.y > height) {
          star.active = false;
          return;
        }

        // Draw trail
        const grad = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - star.length * cos,
          star.y - star.length * sin
        );
        grad.addColorStop(0, `rgba(198, 241, 53, ${star.opacity})`); // Lemon Green tip
        grad.addColorStop(0.2, `rgba(16, 185, 129, ${star.opacity * 0.5})`); // Emerald trail
        grad.addColorStop(1, "rgba(2, 5, 4, 0)"); // Fading tail

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length * cos, star.y - star.length * sin);
        ctx.stroke();

        // White hot tip core
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 0.9, 0, Math.PI * 2);
        ctx.fill();
      });

      // Housekeeping: remove dead stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        if (!shootingStars[i].active) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
    />
  );
}
