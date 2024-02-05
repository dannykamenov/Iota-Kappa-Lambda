import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/core/header/Header";
import Home from "./components/core/home/Home";
import Footer from "./components/core/footer/Footer";
import Leadership from "./components/main/leadership/Leadership";
import Help from "./components/main/help/Help";
import Contact from "./components/main/contact/Contact";
import Events from "./components/main/events/Events";
import EventLoaded from "./components/main/events/EventLoaded";

import { KindeProvider } from "@kinde-oss/kinde-auth-react";

function App() {
  return (
    <KindeProvider
      clientId="30fc6ebf2cd4425d93709c21a580eeb2"
      domain="https://sorostdev.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/events-and-photos" element={<Events />} />
          <Route path="/events-and-photos/:id" element={<EventLoaded />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </KindeProvider>
  );
}

export default App;
