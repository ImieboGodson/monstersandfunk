import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./container/App";
import "tachyons";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
