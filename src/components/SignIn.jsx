

export default function SignIn() {
  return (
    <section className="sign-in">
        <div className="content">
        <h2>Log in </h2>
            <form>
               <label >
                Username 
                <input type="text" placeholder="Enter Your username" />
               </label>
               <label >
                Password
                <input type="password"  placeholder="Enter Your username"/>
               </label>
               <button type="submit">
                Sign in
               </button>

            </form>
        </div>
    </section>
  )
}
