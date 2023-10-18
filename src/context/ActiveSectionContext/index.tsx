"use client";

import React from "react";

type ActiveContextProps = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  lastClick: number;
  setLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  React.createContext<ActiveContextProps | null>(null);

export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext);

  if (!context || context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = React.useState("#home");
  const [lastClick, setLastClick] = React.useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{ active, setActive, lastClick, setLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
