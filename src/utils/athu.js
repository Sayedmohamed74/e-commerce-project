const login=(token)=>{
    localStorage.setItem('token',token)
   
    window.open('/','_self');
}
const logout=()=>{
    localStorage.clear();
    window.open('/','_self');
}

export {login,logout}