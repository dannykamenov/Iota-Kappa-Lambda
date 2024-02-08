import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/core/dashboard/Dashboard";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/core/header/Header";
import "./firebase";
import ManageComponent from "./components/core/manage/Manage";
import EditComponent from "./components/core/manage/EditComponent";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PhotosComponent from "./components/core/photos/Photos";
import UserList from "./components/core/userlist/UserList";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-events" element={<ManageComponent />} />
            <Route path="/dashboard/:id" element={<EditComponent />} />
            <Route path="/photo-gallery" element={<PhotosComponent />} />
            <Route path="/user-list" element={<UserList />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
