// @ts-ignore
import { createRoot } from "react-dom/client";

import AOS from "aos";
import "aos/dist/aos.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Styles/tailwindcss.css"
import "./Styles/globals.css"
import "./Styles/countdown.css";
import "./Styles/menikah.css";
import "./Styles/locationVideo.css"

import App from "./App";

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import fas from '@fortawesome/fontawesome-free-solid';
import fa from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(brands, fas, fa);

AOS.init();

document.body.style.overflow = "hidden";

const rootElement: any = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
root.render(<App />)
