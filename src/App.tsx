import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "./models";

const App = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         const response = await axios.get("https://fakestoreapi.com/products");
         setProducts(response.data);
      };
      fetchProducts();
   }, []);

   return (
      <div className="App">
         <h1>Products</h1>
         <ul>
            {products.map((product: IProduct) => (
               <li key={product.id}>
                  <h4>{product.title}</h4>
                  <img src={product.image} alt="" />
               </li>
            ))}
         </ul>
      </div>
   );
};

export default App;
