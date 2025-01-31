export default function Card({data}) {
  return (
    <div className="card">
      <div className="image-product">
        <img
          src={data.images[0]}
          alt="d"
        />
      </div>
      <div className="info-product">
        <h4>{data.title}</h4>
        <p>{data.price}$</p>
        <button>Add Cart</button>
      </div>
    </div>
  );
}
