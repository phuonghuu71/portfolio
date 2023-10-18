"use client";

import React from "react";
import Link from "next/link";
import DynamicIcon from "../DynamicIcon";
import { useInView, useAnimate, usePresence } from "framer-motion";
import { LINKS } from "@/libs/Data";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Header() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const { active, setActive, setLastClick } = useActiveSectionContext();

  const handleOnClick = React.useCallback(
    (hash: string) => {
      setActive(hash);
      setLastClick(Date.now());
    },
    [setActive, setLastClick]
  );

  return (
    <header ref={ref} className="w-full flex justify-center sticky top-0 z-20">
      <nav
        className={`bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 px-6 py-4 m-2 justify-center gap-x-10 rounded-full shadow-md w-fit hidden lg:flex ${
          isInView ? "translate-y-0" : "-translate-y-60"
        } transition-transform duration-500`}
      >
        {LINKS.map((link) => (
          <Link
            key={link.hash}
            className={`nav__link ${
              active === link.hash && "!text-black dark:!text-white"
            }`}
            href={link.hash}
            onClick={() => handleOnClick(link.hash)}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="w-full border-t dark:border-t-gray-500 p-4 fixed -bottom-1 bg-white dark:bg-gray-800 lg:hidden">
        <ul className="flex items-center justify-between w-full">
          {LINKS.map((link) => (
            <li
              key={link.hash}
              className={`text-gray-500 ${
                active === link.hash && "!text-black dark:!text-white"
              }`}
            >
              <Link href={link.hash} onClick={() => handleOnClick(link.hash)}>
                <DynamicIcon icon={link.icon} className="w-6 h-6" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
