import { Link, useNavigate } from "react-router-dom";


function NotFound() {

  return (
    <div className="notfound-wrapper">
      <h1>404</h1>
      <h2>Oops! Page not found 🌱</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Lost plant"
      />
      <Link to="/" className="home-btn">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
