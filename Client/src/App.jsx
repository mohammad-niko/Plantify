import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../src/css/HeaderStyle.css";
import "../src/css/HomeMainStyle.css";
import "../src/css/ShopMainStyle.css";
import "../src/css/ErrorStyle.css"
import {useRoutes} from "react-router-dom";
import routes from "./Routes/routes";

function App() {
  const element = useRoutes(routes)
  return (
    <>
    {element}
    </>
  );
}

export default App;
