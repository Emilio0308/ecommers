import React from 'react'
import { dateToDDMMYYYY } from '../../utils/Date'

const PurchaseCard = ( { purchase } ) => {
  return (
    <article className='grid grid-cols-2 text-sm sm:text-base p-2 min-h-[80px]'>
        <section className='flex items-center gap-2'>
            <div className='h-full aspect-square flex justify-center items-center max-w-[50px]'>
                <img className='object-contain aspect-square' loading='lazy' src={purchase.product.images[0].url} alt="" />
            </div>
            <h4>{purchase.product.title}</h4>
        </section>

        <section className='grid text-center gap-1 grid-rows-2 sm:grid-cols-3'>
            <span className='text-gray-400 lex justify-center items-center'>{dateToDDMMYYYY(purchase.createdAt)}</span>
            <div className='grid grid-cols-2'>
                <span className='border-[1px] border-gray-400 w-[40px] mx-auto flex justify-center items-center'>
                    {purchase.quantity}
                </span>
                <h4 className='font-bold  flex justify-center items-center'>
                {(purchase.product.price * purchase.quantity).toFixed(1)}
                </h4>
            </div>
            
        </section>
    </article>
  )
}

export default PurchaseCard