import { Routes, Route } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ToggleButton from "../components/ToggleButtons.tsx";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <ToggleButton />
      <Footer />
    </>
  );
}
