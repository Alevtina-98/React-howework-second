import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// const root = createRoot(document.getElementById("root"));

// function second() {
//   root.render(
//     <div>
//       <p>Time is:</p>
//       <h3>{new Date().toLocaleTimeString()}</h3>
//       <button onClick={second}>Get time</button>
//     </div>
//   );
// }

// // setInterval(second, 1000);
// second();
