import React from "react";
import { useInView } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export function useSectionInView(hash: string) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const { setActive, lastClick } = useActiveSectionContext();

  React.useLayoutEffect(() => {
    const listener = () => {
      if (ref && ref.current) {
        const windowY = window.scrollY;
        const offsetTop = ref.current.offsetTop - 200;
        const offsetHeight = ref.current.offsetHeight;

        if (
          isInView &&
          windowY >= offsetTop &&
          windowY < offsetTop + offsetHeight &&
          Date.now() - lastClick > 1000
        )
          setActive(hash);
      }
    };

    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, [setActive, hash, isInView, lastClick]);

  return {
    ref,
    isInView,
  };
}
