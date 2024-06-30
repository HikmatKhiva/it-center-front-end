"use client";
import { Switch } from "@nextui-org/switch";
import React, { useEffect, useState } from "react";
import { SunIcon } from "./icons/Sun";
import { MoonIcon } from "./icons/Moon";
const ThemeMode = () => {
  const [themeMode, setThemeMode] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      return theme ? theme : "dark";
    }
    return "dark";
  });
  const handleTheme = (isLightMode: boolean) => {
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
    setThemeMode(isLightMode ? "light" : "dark");
  };
  useEffect(() => {
    const doc = document.querySelector("html");
    if (doc) {
      doc.className = themeMode === "light" ? "light" : "dark";
    }
  }, [themeMode]);
  return (
    <Switch
      defaultSelected={themeMode === "light"}
      size="lg"
      color="success"
      aria-label={themeMode}
      name="theme"
      onValueChange={handleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  );
};
export default ThemeMode;
