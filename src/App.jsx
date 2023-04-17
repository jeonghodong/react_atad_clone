import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/HomePage";
import MainLayout from "./pages/MainLayout";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import BusinessPage from "./pages/BusinessPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/business" element={<BusinessPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
