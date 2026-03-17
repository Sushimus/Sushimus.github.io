import { useState, useEffect } from "react";
import "./App.css";

import Home from './pages/Home';
import BrewGallery from './pages/Brew';
import NotFound from './pages/NotFound';
import { slogans } from "./data/slogans";
import { useDateTheme } from "./hooks/useDataTheme";

import CobblemonExporter from "./pages/cobblemon_quest_creation/CobblemonExporter";
import OfMossAndBones from "./pages/of_moss_and_bone/OfMossAndBone";

document.title = slogans[Math.floor(Math.random() * slogans.length)];

const routePatterns = [
  { regex: /^\/?$/, element: <Home /> },
  { regex: /\/(brew|cat)/i, element: <BrewGallery /> },
  { regex: /\/(cobblemon|quest|ftb)/i, element: <CobblemonExporter /> },
  { regex: /\/(moss|bone)/i, element: <OfMossAndBones /> }
];

export default function App() {
  useDateTheme();
  
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  const match = routePatterns.find(route => route.regex.test(path));
  
  return match ? match.element : <NotFound />;
}