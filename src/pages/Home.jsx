import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/layout/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'

const Home = () => {

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [currentCategory, setCurrentCategory] = useState(0)

  const hanldeSubmit = (e) => {
    e.preventDefault()
    const name = e.target.productName.value
    setProductName(name)
    e.target.productName.value = "" 
  }
  const handleClickCategory = (e) => {
    if (e.target[`data-category`] == 0) {
      getAllProducts()
    }else{

      setCurrentCategory(Number(e.target.dataset.category))
    }
  }
  const getAllProducts = () => {
    axiosEcommerce.get("products")
    .then( (res) => setProducts(res.data))
    .catch( (err) => console.log(err))  
  }
  useEffect(() => {
    if (currentCategory != 0) {
      axiosEcommerce.get(`products?categoryId=${currentCategory}`)
      .then((res)=> setProducts(res.data))
      .catch((err)=> console.log(err))
    }
  }, [currentCategory])
  useEffect(() => {
    axiosEcommerce.get("categories")
      .then( (res) => setCategories(res.data))
      .catch( (err) => console.log(err)) 
  }, [])

  useEffect(() => {
    axiosEcommerce.get("products")
    .then( (res) => {
      const productsFilter = res.data.filter( (product) => product.title.toLowerCase().includes(productName.toLowerCase()))
      setProducts(productsFilter)
    })
    .catch( (err) => console.log(err))
    
  }, [productName])

  useEffect(() => {
    if (currentCategory == 0) {
      getAllProducts()
    }
  }, [currentCategory])
  

  return (
    <main className='p-3 Home grid grid-rows-[auto,:1fr] w-full sm:grid-rows-1 sm:grid-cols-[auto,_1fr] max-w-[1200px] m-auto'>
      <form onSubmit={hanldeSubmit} className='py-6 px-2'>
        <div>
          <input className='outline-none border-b border-gray-300'
           id='productName' placeholder='What are u looking for' type="text" />
          <button><i className='bx bx-search'></i></button>
        </div>
        <ul>
          <li className='cursor-pointer' onClick={handleClickCategory} data-category={0}>All</li>
          {
            categories?.map( (category) => 
            <li className='cursor-pointer' onClick={handleClickCategory} data-category={category.id} key={category.id}>{category.name}</li>)
          }
        </ul>
      </form>
      <section className='grid gap-8 py-6 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))]'>
        {
          products?.map( (product)=> <ProductCard key={product.id} product={product} />)
        }
      </section>
    </main>
  )
}

export default Home