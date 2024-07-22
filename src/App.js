import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Home from "./E-commarce-Site/index";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <Home />
      </PrimeReactProvider>
    </>
  );
}

export default App;
