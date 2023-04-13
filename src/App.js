import "./App.css";
import NavbarTop from "./Components/NavbarTop";
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/index.scss";
import Content from "./Components/Content";
import WhyUs from "./Components/WhyUs";

function App() {
  return (
    <>
      <NavbarTop />
      <Content />
      <WhyUs />
    </>
  );
}

export default App;
