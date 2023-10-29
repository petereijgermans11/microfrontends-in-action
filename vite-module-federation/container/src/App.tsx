import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "layout/Header";
import Footer from "layout/Footer";
import OutdoorEvents from "outdoorevents/OutdoorEvents";
import OutdoorEvent from "bookevent/OutdoorEvent";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<OutdoorEvents />} />
          <Route path="/outdoorEvents/:slug" element={<OutdoorEvent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}
