import { useEffect } from "react";

export function useDateTheme() {
  useEffect(() => {
    const now = new Date();
    const timeOfDay =
      now.getHours() >= 6 && now.getHours() < 18 ? "day" : "night";

    const currentDevice = window.matchMedia(
      "(min-aspect-ratio: 16/9)"
    ).matches
      ? "desktop"
      : "mobile";

    const currentDay = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ][now.getDay()];

    const backgroundURL = `/src/assets/generic/images/${timeOfDay}/background/${currentDay}/${currentDevice}.png`;

    document.body.style.backgroundImage = `url("${backgroundURL}")`;
    document.body.style.backgroundSize = "cover";

    document.documentElement.style.setProperty(
      "--dateThemeButtonImg",
      `url("/src/assets/generic/images/${timeOfDay}/buttons.png")`
    );

    document.documentElement.style.setProperty(
      "--dateThemeBorderImg",
      `url("/src/assets/generic/images/${timeOfDay}/border.png")`
    );

    const dateThemeColour = timeOfDay == "day" ? "rgba(205, 145, 142, 0.89)" : "rgba(142, 145, 205, 0.89)";
    document.documentElement.style.setProperty(
      "--dateThemeColour",
      `${dateThemeColour}`
    );

    const dateThemeAccentColour = timeOfDay == "day" ? "rgba(205, 145, 142, 0.67)" : "rgba(142, 145, 205, 0.67)";
    document.documentElement.style.setProperty(
      "--dateThemeAccentColour",
      `${dateThemeAccentColour}`
    );

    const dateThemeSecondaryAccentColour = timeOfDay == "day" ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.45)";
    document.documentElement.style.setProperty(
      "--dateThemeSecondaryAccentColour",
      `${dateThemeSecondaryAccentColour}`
    );
  }, []);
}