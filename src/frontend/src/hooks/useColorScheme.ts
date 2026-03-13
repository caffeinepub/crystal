import { useEffect, useState } from "react";

const COLOR_SCHEME_STORAGE_KEY = "color-scheme";

type ColorScheme =
  | "purple"
  | "blue"
  | "green"
  | "orange"
  | "yellow"
  | "red"
  | "white";

function getInitialColorScheme(): ColorScheme {
  if (typeof window === "undefined") return "purple";

  const stored = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
  if (
    stored === "purple" ||
    stored === "blue" ||
    stored === "green" ||
    stored === "orange" ||
    stored === "yellow" ||
    stored === "red" ||
    stored === "white"
  ) {
    return stored;
  }

  return "purple";
}

function applyColorScheme(scheme: ColorScheme) {
  if (typeof document === "undefined") return;

  document.documentElement.setAttribute("data-color-scheme", scheme);
}

export function useColorScheme() {
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(
    getInitialColorScheme,
  );

  useEffect(() => {
    applyColorScheme(colorScheme);
  }, [colorScheme]);

  const setColorScheme = (newScheme: ColorScheme) => {
    setColorSchemeState(newScheme);
    localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, newScheme);
    applyColorScheme(newScheme);
  };

  return { colorScheme, setColorScheme };
}
