
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

import "./index.css";
import App from "./App.jsx";
import GlobState from "./Pages/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <GlobState>
        <App />
      </GlobState>
    </ChakraProvider>
  </StrictMode>
);
