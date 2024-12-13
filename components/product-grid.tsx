"use client"

import { Product } from '@/sanity.types'
import { AnimatePresence, } from 'framer-motion';
import React from 'react'
import ProductThub from './product-thumbnail';

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
      {products?.map((product) => {
        return (
        <AnimatePresence key={product._id}>
          
           <ProductThub key={product._id} product={product} />
          
        </AnimatePresence>
      );
       })}
    </div>
  )
}

export default ProductGrid