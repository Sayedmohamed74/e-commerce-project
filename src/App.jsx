import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import SignIn from './components/SignIn'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <main>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Sign-in' element={<SignIn/>}/>
      </Routes>
    </main>
    </BrowserRouter>
   
    </>
  )
}

export default App
