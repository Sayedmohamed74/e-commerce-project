import { useEffect, useRef, useState } from "react";
import { handleTryCatch, urlApi } from "../utils/urlApi";
import { login } from "../utils/athu";
import Spinner from "./Spinner";

export default function SignIn() {
  const [payload, setPayload] = useState({ });
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');
  const handleChange = (e, key) => {
    const obj = {};
    obj[key] = e.target.value;
    const updataPayload = { ...payload, ...obj };
    setPayload(updataPayload);
  };
const handleLogin = (e)=>{
  e.preventDefault();
  setLoading(true)
  handleTryCatch(
    async () => {
     
       const response = await fetch(urlApi.user.login,{
         method:"POST",
         headers: { 'Content-Type': 'application/json' },
         body:JSON.stringify(payload),
        
         
       })
   
       const data = await response.json();
     
       
       if(response.status>300&&!response.ok){
         setLoading(false)
         setError(data.message)
        throw new Error()
       }
       if(response.status<300&&response.ok){
        setLoading(false)
        setError('')
       login(data.accessToken);
       }
       
     },
     (e) => {

     }
   );
}

  return (
    <section className="sign-in">
      <div className="content">
        <h2>Log in </h2>
        <form>
          <label>
            Username
            <input
              type="text"
              onChange={(e) => {
                handleChange(e, "username");
              }}
              value={payload.username||""}
              placeholder="Enter Your username"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={payload.password||""}
              onChange={(e) => {
                handleChange(e, "password");
              }}
              placeholder="Enter Your username"
            />
          </label>
          <button
            type="submit"
            onClick={handleLogin}
          >
           {loading && <Spinner/>} Sign in
          </button>
        </form>
        {error&& <p style={{
          color:"red",
        textAlign:"start"
        }} >{error}</p> }
      </div>
    </section>
  );
}
