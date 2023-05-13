import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductCart } from '../../store/slices/cart.slice'

const ProductCard = ( { product } ) => {

    const dispatch = useDispatch()

    const hanldeClickAddProduct = (e) => {
        e.preventDefault()
        dispatch(addProductCart({
            "productId": product.id,
            "quantity" : 1,
        }))
        
    }
    
  return (
    <Link to={`/products/${product.id}`} className='border-[1px] border-gray-300 rounded-md grid shadow-md shadow-slate-800/30'>
        <div className='p-4 border-b-[1px] border-gray-300 h-[200px] flex justify-center items-center relative group'>
            <img className='w-full h-full object-contain group-hover:opacity-0 transition-opacity' src={product.images[0].url} alt="" />
            <img className='w-full h-full object-contain opacity-0 absolute hover:opacity-100 transition-opacity' src={product.images[1].url} alt="" />
        </div>
        <section className='p-4 relative grid'>
            <h4 className='text-gray-400 font-bold'>{product.brand}</h4>
            <h3 className='text-sm font-bold ml-2'>{product.title}</h3>

            <h4 className='text-gray-400 font-bold mt-4'>Price</h4>
            <span className='text-sm font-bold ml-2'>${product.price}</span>

            <button onClick={hanldeClickAddProduct} className='absolute right-4 bottom-4 bg-red-500 p-2 text-white text-xl rounded-full w-[45px] aspect-square hover:bg-red-400 transition-colors'>
                <i className='bx bx-cart-alt' ></i>
            </button>
        </section>
    </Link>
  )
}

export default ProductCard