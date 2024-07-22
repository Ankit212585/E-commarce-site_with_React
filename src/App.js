import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import A1 from "./E-commarce-Site/index";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <A1 />
      </PrimeReactProvider>
    </>
  );
}

export default App;
