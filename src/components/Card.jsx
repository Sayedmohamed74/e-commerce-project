import { useNavigate } from "react-router";
import { useUser } from "../provider/ProviderUser";
import { handleTryCatch, urlApi } from "../utils/urlApi";
import { useState } from "react";
import Spinner from "./Spinner";

export default function Card({ data }) {
  const { user } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isAddToCart, setIsAddCart] = useState(false);
 
  function handleAddToCart() {
    if (localStorage.getItem("token")) {
      handleTryCatch(async () => {
        setLoading(true);
        const response = await fetch(urlApi.cart.addCart, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.id,
            merge: true,
            products: [
              {
                id: data.id,
                quantity: 1,
              },
            ],
          }),
        });
    
        const dataResponse = await response.json();
        
        if (response.ok) {
          setIsAddCart(true);
          setLoading(false);
        }
      });
    } else {
      navigate("/Sign-in");
    }
  }
  return (
    <div className="card">
      <div className="image-product">
        <img src={data.images[0]} alt="d" />
      </div>
      <div className="info-product">
        <h4>{data.title}</h4>
        <p>{data.price}$</p>
        {isAddToCart ? (
          <button disabled>Added To Cart</button>
        ) : (
          <button onClick={handleAddToCart}>
            {loading&&<Spinner/>}
            Add Cart</button>
        )}
      </div>
    </div>
  );
}
