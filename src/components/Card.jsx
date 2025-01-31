export default function Card() {
  return (
    <div className="card">
      <div className="image-product">
        <img
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="d"
        />
      </div>
      <div className="info-product">
        <h4>name</h4>
        <p>price</p>
        <button>Add Cart</button>
      </div>
    </div>
  );
}
