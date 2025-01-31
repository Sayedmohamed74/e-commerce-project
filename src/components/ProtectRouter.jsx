import { Navigate, Outlet } from "react-router";
import { useUser } from "../provider/ProviderUser"


export default function ProtectRouter() {
    const {user}=useUser();
  return(
    <>
    { Object.keys(user).length ?<Outlet/>:<Navigate to={'/'} />}
    </>
  )
   
  

}
