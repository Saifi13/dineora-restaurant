import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Hero from "./hero";
import Menu from "./menu";
import Dine from "./components/Dine";
import Reviews from "./components/Reviews";
import Feast from "./components/feast";
import Footer from "./components/footer";
import MenuPage from "./menuPage";
import StoryPage from "./storyPage";
import ScrollTextReveal from "./components/ScrollTextReveal";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Dine />
      <Reviews />
      <Feast />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollTextReveal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
