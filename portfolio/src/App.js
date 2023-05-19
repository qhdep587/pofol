import './App.css'
import LeftMenu from './layout/LeftMenu'
import MainComp from './layout/MainComp'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  window.addEventListener('scroll', cursor)
  window.addEventListener('mousemove', cursor)
  function cursor(e) {
    document.querySelector('.cursor').style.left = e.pageX + 'px'
    document.querySelector('.cursor').style.top = e.pageY - window.scrollY + 'px'
  }
  return (
    <BrowserRouter>
      <div className="mainBackground">
        <div className="mainBackgroundBlur container">
          <div className="cursor"></div>
          <LeftMenu />
          <MainComp />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
