import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./index.scss";

import Header from "layout/Header";
import Footer from "layout/Footer";
import OutdoorEvents from "pages/OutdoorEvents";
import Event from "pages/Event";

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OutdoorEvents />} />
          <Route path="/outdoorEvents/:slug" element={<Event />} />
        </Routes>
      </BrowserRouter>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
