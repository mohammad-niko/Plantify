import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../src/css/HeaderStyle.css";
import "../src/css/MainStyle.css";
import Header from "./Components/headerSide/Header";
import HeroSection from "./Components/headerSide/HeroSection";
import Main from "./Components/main/Main";

function App() {
  return (
    <>
      <section className="hero">
        <Header />
        <HeroSection />
      </section>
      <main>
        <Main />
      </main>
    </>
  );
}

export default App;
