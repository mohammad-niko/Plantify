import { Outlet } from "react-router-dom";
import Header from "../Components/headerSide/Header";
import HeroSection from "../Components/headerSide/HeroSection";

function AppLayout() {
  return (
    <>
      <section className="hero">
        <Header />
        <HeroSection />
      </section>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
