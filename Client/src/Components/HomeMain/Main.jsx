import Container from "react-bootstrap/Container";
import ProductCard from "./product/ProductCard";
import { useSelector } from "react-redux";
import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";
import Toast from "./product/Toast";

function HomeMain() {
  const products = useSelector((store) => store.Product.products) || [];
  //Toast
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type = "success") => {
    const id = uuid();
    setToasts((prevToasts) => [
      ...prevToasts,
      { id, message, type, show: true },
    ]);
  };
  
  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  }, []);

  return (
    <Container className="main-container">
      {products.map((item) => (
        <ProductCard key={item.id} data={item} onAddToCart={addToast} />
      ))}
      <div className="toast-container">
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            show={toast.show}
            onClose={() => removeToast(toast.id)}
            toastIndex={index}
          />
        ))}
      </div>
    </Container>
  );
}

export default HomeMain;
