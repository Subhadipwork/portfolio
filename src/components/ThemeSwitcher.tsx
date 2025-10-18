"use client";

import { useState } from "react";

const themes = {
  violet: {
    name: "Violet",
    light: { accent: "263 70% 50%" },
    dark: { accent: "263 70% 50%" },
  },
  golden: {
    name: "Golden",
    light: { accent: "39 100% 50%" },
    dark: { accent: "39 100% 50%" },
  },
  emerald: {
    name: "Emerald",
    light: { accent: "163 94% 24%" },
    dark: { accent: "163 100% 35%" },
  },
  blue: {
    name: "Blue",
    light: { accent: "233 100% 52%" },
    dark: { accent: "230 100% 65%" },
  },
  rose: {
    name: "Rose",
    light: { accent: "345 83% 41%" },
    dark: { accent: "345 83% 41%" },
  },
};

const fonts = {
  montserrat: "Montserrat",
  inter: "Inter",
  roboto: "Roboto",
  poppins: "Poppins",
};

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("violet");
  const [currentFont, setCurrentFont] = useState("montserrat");

  const applyTheme = (themeKey: string) => {
    const theme = themes[themeKey as keyof typeof themes];
    const root = document.documentElement;

    root.style.setProperty("--accent", theme.light.accent);
    setCurrentTheme(themeKey);
  };

  const applyFont = (fontKey: string) => {
    const font = fonts[fontKey as keyof typeof fonts];
    const root = document.documentElement;
    root.style.setProperty("--font-family", `'${font}', sans-serif`);
    setCurrentFont(fontKey);
  };

  return (
    <div className="fixed left-4 top-1/2 z-50 -translate-y-1/2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-r-lg bg-accent p-3 text-accent-foreground shadow-lg transition-all hover:shadow-xl"
        title="Theme Settings"
      >
        🎨
      </button>

      {isOpen && (
        <div className="absolute left-full top-0 ml-2 min-w-[200px] rounded-lg border bg-background/95 p-4 shadow-xl backdrop-blur-sm">
          <div className="mb-4">
            <h3 className="mb-2 text-sm font-medium">Theme Colors</h3>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => applyTheme(key)}
                  className={`h-8 w-8 rounded-full border-2 transition-all ${
                    currentTheme === key
                      ? "scale-110 border-foreground"
                      : "border-border"
                  }`}
                  style={{ backgroundColor: `hsl(${theme.light.accent})` }}
                  title={theme.name}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium">Font Style</h3>
            <div className="space-y-1">
              {Object.entries(fonts).map(([key, font]) => (
                <button
                  key={key}
                  onClick={() => applyFont(key)}
                  className={`w-full rounded px-2 py-1 text-left text-sm transition-colors ${
                    currentFont === key
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted"
                  }`}
                  style={{ fontFamily: font }}
                >
                  {font}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
