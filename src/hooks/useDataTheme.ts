import { useEffect } from "react";
const backgroundFiles = import.meta.glob(
  "/src/assets/generic/images/*/background/*/*.png",
  { eager: true, query: "?url", import: "default" }
);

const uiFiles = import.meta.glob(
  "/src/assets/generic/images/*/*.png",
  { eager: true, query: "?url", import: "default" }
);

export function useDateTheme() {
  useEffect(() => {
    const now = new Date();
    const timeOfDay =
      now.getHours() >= 6 && now.getHours() < 18 ? "day" : "night";

    const currentDevice = window.matchMedia("(min-aspect-ratio: 16/9)").matches
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

    const bgKey = `/src/assets/generic/images/${timeOfDay}/background/${currentDay}/${currentDevice}.png`;
    const buttonsKey = `/src/assets/generic/images/${timeOfDay}/buttons.png`;
    const borderKey = `/src/assets/generic/images/${timeOfDay}/border.png`;

    const realBgUrl = backgroundFiles[bgKey];
    const realButtonsUrl = uiFiles[buttonsKey];
    const realBorderUrl = uiFiles[borderKey];

    if (realBgUrl) {
        document.body.style.backgroundImage = `url("${realBgUrl}")`;
        document.body.style.backgroundSize = "cover";
    }

    if (realButtonsUrl) {
        document.documentElement.style.setProperty(
        "--dateThemeButtonImg",
        `url("${realButtonsUrl}")`
        );
    }

    if (realBorderUrl) {
        document.documentElement.style.setProperty(
        "--dateThemeBorderImg",
        `url("${realBorderUrl}")`
        );
    }

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