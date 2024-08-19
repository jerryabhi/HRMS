import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/font.css";
import { HomePage } from "./pages/home/HomePage";
import { Dashboard } from "./components/home/Dashboard";
import { Layout } from "./components/shared/Layout";
import { Announcement } from "./components/home/Announcement";
import { Profiletask } from "./components/home/Profiletask";
import Header from "./components/shared/Header";
import AssetPage from "./pages/home/AssetPage";
import InfoPage from "./pages/home/InfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<Dashboard />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/profile" element={<Profiletask />} />
      <Route path="/header" element={<Header />} />
      <Route path="/asset" element={<AssetPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  );
}

export default App;
