import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/font.css";
import { HomePage } from "./pages/home/HomePage";
import AssetPage from "./pages/home/AssetPage";
import InfoPage from "./pages/home/InfoPage";
import Timeoff from "./pages/home/Timeoff";
import Todo from "./pages/home/Todo";
import Documents from "./pages/home/Documents";
import Goals from "./pages/home/Goals";
import Sidebar from "./components/shared/Sidebar";
import Peoplepage from "./pages/home/Peoplepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/asset" element={<AssetPage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/time-off" element={<Timeoff />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/sidebars" element={<Sidebar />} />
      <Route path="/users" element={<Peoplepage />} />
    </Routes>
  );
}

export default App;
