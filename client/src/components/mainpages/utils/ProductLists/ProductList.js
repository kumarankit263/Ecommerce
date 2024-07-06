import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'
import BtnRender from './BtnRender'

const ProductList = ({product,isAdmin}) => {

  return (
    <div className='product_card'>
      {
        isAdmin && <input type='checkbox' checked={product.checked}/>
      }
        <img src={product.images.url} alt=''/>

        <div className='product_box'>
            <h2 title={product.title}>{product.title}</h2>
            <span>${product.price}</span>
            <p>{product.description}</p>
        </div>

       <BtnRender product={product}/>
    </div>
  )
}

export default ProductList
