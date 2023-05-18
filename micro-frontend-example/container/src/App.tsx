import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./index.scss";

import Header from "layout/Header";
import Footer from "layout/Footer";
import OutdoorEvents from "outdoorevents/OutdoorEvents";
import OutdoorEvent from "bookevent/OutdoorEvent";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleIncrement = () => {
      setCount((prevCount) => prevCount + 1);
    };

    const handleCustomEvent = (event) => {
      if (event.detail.action === 'increment') {
        handleIncrement();
      }
    };

    document.addEventListener('cartUpdate', handleCustomEvent);

    return () => {
      document.removeEventListener('cartUpdate', handleCustomEvent);
    };
  }, [count]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="relative">

        <span className="absolute top-0 right-10 h-10 w-10 rounded-full bg-red-500 text-white flex items-center justify-center text-xl">
          
          {count}
        </span>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OutdoorEvents />} />
          <Route path="/outdoorEvents/:slug" element={<OutdoorEvent />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
