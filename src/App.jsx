import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import Products from './pages/Products'
import Header from './components/layout/Header'
import NotFound from './pages/NotFound'
import ProtectedAuth from './components/ProtectedAuth'
import Cart from './components/cart/Cart'
import ProductDetail from './components/products/ProductDetail'
import Footer from './components/layout/Footer'

function App() {


  return (
    <section className='grid grid-rows-[auto,_1fr] min-h-screen font-[Yantramanav]'>
      <Header/>
      <Routes>

        <Route path='/' element= {<Home/>}/>

        <Route path='/products' element= {<Products/>}/>

        <Route path='/Login' element= {<Login/>} /> 
        
        <Route element= {<ProtectedAuth/>}>
          <Route path='/purchases' element= {<Purchases/>} />
        </Route>

        <Route path='/products/:id' element= {<Products/>}/> 

        <Route path='/*' element={<NotFound/>} />

      </Routes>

      <Cart/>
      <Footer/>
    </section>
  )
}

export default App
