import { useEffect, useState } from "react";

const SCROLL_OFFSET = 140;

/** Tracks which `#section` anchor is currently in view while scrolling. */
export function useScrollSpy(pathname: string, hashes: string[], locationHash: string) {
  const [activeHash, setActiveHash] = useState(locationHash);

  // Jump immediately when the user clicks a sidebar hash link.
  useEffect(() => {
    if (locationHash && hashes.includes(locationHash)) {
      setActiveHash(locationHash);
    } else if (!locationHash) {
      setActiveHash("");
    }
  }, [locationHash, pathname, hashes.join("|")]);

  useEffect(() => {
    const ids = hashes.map((h) => h.replace(/^#/, "")).filter(Boolean);
    if (!ids.length) {
      setActiveHash("");
      return;
    }

    const measure = () => {
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = `#${id}`;
        }
      }
      setActiveHash(current);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [pathname, hashes.join("|")]);

  return activeHash;
}
