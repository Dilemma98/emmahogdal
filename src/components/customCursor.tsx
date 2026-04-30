// components/CustomCursor.tsx
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.createElement("div");
    const ring = document.createElement("div");

    dot.className = "cursor-dot";
    ring.className = "cursor-ring";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;

    const setVisible  = (visible: boolean) => {
      const opacity = visible ? "1" : "0";
      dot.style.opacity = opacity;
      ring.style.opacity = opacity;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    let animationId: number;

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
     animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.body.removeChild(dot);
      document.body.removeChild(ring);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return null;
}
