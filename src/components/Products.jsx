import { useEffect, useRef, useState } from "react";
import { handleTryCatch, urlApi } from "../utils/urlApi";
import Card from "./Card";
import Spinner from "./Spinner";
export default function Products() {
  const pageIndex = useRef(0);
  const [product, setProduct] = useState({ products: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleGetProduct = () => {
    setLoading(true);
    handleTryCatch(
      async () => {
        const response = await fetch(
          urlApi.product + `?limit=10&skip=${pageIndex.current}`,
          {
            method: "GET",
          }
        );
        console.log(response);
        const data = await response.json();
        console.log(data);

        if (response.status > 300 && !response.ok) {
          setLoading(false);
          setError(data.message);
          throw new Error();
        }
        if (response.status < 300 && response.ok) {
          setLoading(false);
          setError("");
          setProduct({
            ...data,
            products: [...product.products, ...data.products],
          });
        }
      },
      (e) => {
        setData({ products: [], total: 0 });
        console.log(e);
      }
    );
  };

  useEffect(() => {
    handleGetProduct();
  }, []);
  return (
    <section className="products">
      <div className="container">
        <div className="content">
          {product?.products?.map((data) => (
            <Card data={data} />
          ))}
        </div>
        {product.products.length >= 10 ? (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <button
              onClick={() => {
                pageIndex.current = pageIndex.current + 10;
                handleGetProduct();
              }}
              className="btn-more"
            >
              {loading && <Spinner />}
              Load More
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
