import { Link } from "react-router";
import { useUser } from "../provider/ProviderUser";
import { logout } from "../utils/athu";
export default function Navbar() {
  const {user}=useUser();
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
           {!Object.keys(user).length &&  <li>
              <Link to={'Sign-in'}>Sign in</Link>
            </li>}
           {Object.keys(user).length ? (
            <>
             <li>
              <button onClick={logout}>Log out</button>
            </li>
            <li>
              <Link to={'/Cart'} >Cart</Link >
            </li>
            <li>
              <span>welcome,{user.firstName}</span>
            </li>
            </>
           ):''}
          </ul>
        </div>
      </nav>
    </header>
  );
}
