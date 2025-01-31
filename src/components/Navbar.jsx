import { Link } from "react-router";
export default function Navbar() {
  return (
    <header>
      <nav className="container">
        <div>
          <h1>Myshop</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={'Sign-in'}>Sign in</Link>
            </li>
            <li>
              <button>Log out</button>
            </li>
            <li>
              <Link to={'/Cart'} >Cart</Link >
            </li>
            <li>
              <span>welcome,x</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
