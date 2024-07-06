import React from 'react'
import { GlobalState } from '../../../../GlobalState'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

const BtnRender = (product) => {

    const state = useContext(GlobalState)
  const [isAdmin] = state.userAPI.isAdmin
  const addCart = state.userAPI.addCart

  return (
    <div className='row_btn'>
    {
      isAdmin ? 
   <>
      <Link id='btn_buy' to={`#!`} >
      Delete
      </Link>
      <Link id='btn_view' to={`detail/${product._id}`}>
          Edit
      </Link>
      </>
      :
      <>
    <Link id='btn_buy' to={`#!`} onClick={()=> addCart(product)}>
      Buy
      </Link>
      <Link id='btn_view' to={`detail/${product._id}`}>
          View
      </Link>
      </>
}
</div>
  )
}

export default BtnRender
