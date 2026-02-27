import { Routes, Route } from "react-router";
import "./App.css";
import StatsPage from "./pages/Stats";
import HomePage from "./pages/HomePage";
import SideProjects from "./pages/SideProjects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/side/projects" element={<SideProjects />} />
      </Routes>
    </>
  );
}

export default App;
