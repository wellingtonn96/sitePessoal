import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Contact} path="/contact" />
      <Route component={Projects} path="/projects" />
    </BrowserRouter>
  );
}
