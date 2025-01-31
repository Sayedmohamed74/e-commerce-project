export default function Cart() {
  return (
    <section className="cart">
      <div className="content">
        <h2>Your Cart</h2>
        <ul>
          <li className="card-cart">
            <div className="info-product-cart">
              <div className="image-product-cart">
                <img
                  src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div>
                <p className="name-product-cart">name</p>
                <span className="price-product-cart">300S$</span>
              </div>
            </div>
            <div className="action-cart">
              <div className="count">
                <button>-</button>
                <p>2</p>
                <button>+</button>
              </div>
              <button className="remove-cart">Remove</button>
            </div>
          </li>
          <li className="card-cart">
            <div className="info-product-cart">
              <div className="image-product-cart">
                <img
                  src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div>
                <p className="name-product-cart">name</p>
                <span className="price-product-cart">300S$</span>
              </div>
            </div>
            <div className="action-cart">
              <div className="count">
                <button>-</button>
                <p>2</p>
                <button>+</button>
              </div>
              <button className="remove-cart">Remove</button>
            </div>
          </li>
          <li className="card-cart">
            <div className="info-product-cart">
              <div className="image-product-cart">
                <img
                  src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div>
                <p className="name-product-cart">name</p>
                <span className="price-product-cart">300S$</span>
              </div>
            </div>
            <div className="action-cart">
              <div className="count">
                <button>-</button>
                <p>2</p>
                <button>+</button>
              </div>
              <button className="remove-cart">Remove</button>
            </div>
          </li>
        </ul>
        <div className="all">
          <div className="total">
            <span>Total: 444$ </span>
          </div>
          <button className="remove-all-cart">Remove all product</button>
        </div>
      </div>
    </section>
  );
}
