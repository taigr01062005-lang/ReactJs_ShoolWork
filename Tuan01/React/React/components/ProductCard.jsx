import React from 'react'
import { Button } from './Button'
import './ProductCard.css'

export const ProductCard = () => {
  return (
    <div className='card'>
        <img className='productImage' src="https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone_17_256gb-3_2.jpg?_gl=1*1dvnuat*_gcl_aw*R0NMLjE3Njg3ODY5ODUuRUFJYUlRb2JDaE1JMnR2TV9ieVdrZ01WTVBVOEFoM3g0dzF2RUFBWUFTQUFFZ0x3bl9EX0J3RQ..*_gcl_au*MjAyOTcxMjcxMy4xNzY4Nzg2OTg1*_ga*MTU5NTg2MDIyOC4xNzY4Nzg2OTg1*_ga_QLK8WFHNK9*czE3Njg3ODY5ODUkbzEkZzEkdDE3Njg3ODcwMTYkajI5JGwwJGg5NTcxODk2OTA." alt=""/>
        <h2>Ten San Pham</h2>
        <p>100000</p>
        <Button/>

    </div>
    
  )
}
