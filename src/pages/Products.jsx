import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductDetail from '../components/products/ProductDetail'

const Products = () => {
  const {id} = useParams()
  
  return (
    <main className='p-3 w-full'>
      <ProductDetail productId={id}/>
    </main>
  )
}

export default Products















// SUponiendo que querramos tener una pagima de home y otra de products debemos hacer que solo products genere las product cart y el home reemplazar todo el contenido ademas actualizar la ruta en App.jsx
{/* <Route path='/products/:id' element= {<ProductDetail/>}/> */}

// import React, { useEffect, useMemo, useState } from 'react'
// import ProductCard from '../components/layout/ProductCard'
// import { axiosEcommerce } from '../utils/configAxios' 

// const Products = () => {

//   const [categories, setCategories] = useState([])
//   const [products, setProducts] = useState([])
//   const [productName, setProductName] = useState("")
//   const [currentCategory, setCurrentCategory] = useState(0)

//   const hanldeSubmit = (e) => {
//     e.preventDefault()
//     const name = e.target.productName.value
//     setProductName(name)
//   }
//   const productsByName = useMemo(() =>{
//     return products.filter( (product) => product.title.toLowerCase().includes(productName.toLowerCase()))
//   } , [ productName , products ])

//   const handleClickCategory = (e) => {
//     setCurrentCategory(Number(e.target.dataset.category))
//   }

//   useEffect(() => {
//     if (currentCategory != 0) {
//       axiosEcommerce.get(`products?categoryId=${currentCategory}`)
//       .then((res)=> setProducts(res.data))
//       .catch((err)=> console.log(err))
//     }
//   }, [currentCategory])
  

//   useEffect(() => {
//     axiosEcommerce.get("categories")
//       .then( (res) => setCategories(res.data))
//       .catch( (err) => console.log(err)) 
//   }, [])

//   useEffect(() => {
//     if (currentCategory == 0) {
//       axiosEcommerce.get("products")
//     .then( (res) => setProducts(res.data))
//     .catch( (err) => console.log(err))
      
//     }
//   }, [currentCategory])
  

//   return (
//     <main className='p-3 grid grid-rows-[auto,:1fr] w-full sm:grid-rows-1 sm:grid-cols-[auto,_1fr] max-w-[1200px] m-auto'>
//       <form onSubmit={hanldeSubmit}>
//         <div>
//           <input id='productName' placeholder='What are u looking for' type="text" />
//           <button><i className='bx bx-search'></i></button>
//         </div>
//         <ul>
//           <li className='cursor-pointer' onClick={handleClickCategory} data-category={0}>All</li>
//           {
//             categories?.map( (category) => 
//             <li className='cursor-pointer' onClick={handleClickCategory} data-category={category.id} key={category.id}>{category.name}</li>)
//           }
//         </ul>
//       </form>
//       <section className='grid gap-8 py-6 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))]'>
//         {
//           productsByName?.map( (product)=> <ProductCard key={product.id} product={product} />)
//         }
//       </section>
//     </main>
//   )
// }

// export default Products