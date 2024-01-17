import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [Products, setProducts] = useState([true]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
        // console.log(data)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <section className="h-screen flex justify-center items-center">
        ...Loading
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-screen flex justify-center items-center">
        Error: {error.message}
      </section>
    );
  }

  return (
    <ShopContext.Provider value={{ Products }}>{children}</ShopContext.Provider>
  );
};

export default ShopProvider;
