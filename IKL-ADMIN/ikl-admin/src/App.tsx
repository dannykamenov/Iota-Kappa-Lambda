import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/core/dashboard/Dashboard";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/core/header/Header";
import "./firebase";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
