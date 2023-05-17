import React from 'react'

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <div className="left-menu-item">
        port<span className="left-menu-item-ivory left-menu-item-deco">folio</span>
      </div>
      <div>
        <div className="left-menu-item-content">intro</div>
        <div className="left-menu-item-content">edu</div>
        <div className="left-menu-item-content">work</div>
      </div>
    </div>
  )
}

// <Link to = {{pathname: './orderSendConfirm', orderItemNo: selectedProducts.orderItemNo}}>
//                         <button className='wdh_130 btnType btnSize36 btnLineP' id='btn_sendConfirm'
//                             disabled={(selectedProducts.orderStatusCd === '00' || selectedProducts.orderStatusCd === '01') && !selectedProducts.claimStatusCd ? false : true}>발주/발송처리
//                         </button>
//                         </Link>

export default LeftMenu
