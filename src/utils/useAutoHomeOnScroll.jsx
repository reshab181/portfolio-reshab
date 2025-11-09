import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function useAutoHomeOnScroll(threshold = 3) {
  const navigate = useNavigate();
  const scrollCount = useRef(0);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        scrollCount.current += 1; // scrolling down
      } else if (currentY < lastScrollY.current) {
        scrollCount.current += 1; // scrolling up
      }

      lastScrollY.current = currentY;

      if (scrollCount.current >= threshold) {
        navigate("/"); // navigate to home
        scrollCount.current = 0; // reset counter for next trigger
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate, threshold]);
}
