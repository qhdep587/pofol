import React from 'react'
import AppRouter from '../routes/AppRouter'
const MainComp = () => {
  return (
    <div className="MainComp container">
      <div className="MainCompChild">
        <div className="MainCompItem header">HEADER</div>
      </div>
      <div className="MainCompChild">
        <div className="MainCompItem content">
          <AppRouter></AppRouter>
        </div>
      </div>
    </div>
  )
}

export default MainComp
