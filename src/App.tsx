import { useState, useEffect } from "react";
import "./App.css";

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BrewGallery from './pages/Brew';
import CobblemonExporter from "./pages/cobblemon_quest_creation/CobblemonExporter";
import OfMossAndBones from "./pages/of_moss_and_bone/OfMossAndBones";
import OfMossAndBonesDev from "./pages/of_moss_and_bone/OfMossAndBonesDev";

import { slogans } from "./data/slogans";
import { useDateTheme } from "./hooks/useDataTheme";
document.title = slogans[Math.floor(Math.random() * slogans.length)];

const routePatterns = [
  { regex: /^\/?$/, element: <Home /> },
  { regex: /\/(brew|cat)/i, element: <BrewGallery /> },
  { regex: /\/(cobblemon|quest|ftb)/i, element: <CobblemonExporter /> },
  { regex: /\/(?=.*dev)(?=.*(moss|bones?))/i, element: <OfMossAndBonesDev /> },
  { regex: /\/(?=.*(moss|bones?))(?!.*dev)/i, element: <OfMossAndBones /> }
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