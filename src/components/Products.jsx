import Card from "./Card";
export default function Products() {
    
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState('');
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
             console.log(response);
             const data = await response.json();
             console.log(data);
             
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
             console.log(e);
           }
         );
      }
  return (
    <section className="products">
        <div className="container">
            <div className="content">
                
        <Card/>
            </div>
        </div>
    </section>
  )
}
