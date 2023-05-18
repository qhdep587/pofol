import './App.css'
import AppRouter from './routes/AppRouter'
import HeaderLayout from './layout/HeaderLayout'
import LeftMenu from './layout/LeftMenu'
import MainComp from './layout/MainComp'

const App = () => {
  window.addEventListener('scroll', cursor)
  window.addEventListener('mousemove', cursor)
  function cursor(e) {
    document.querySelector('.cursor').style.left = e.pageX + 'px'
    document.querySelector('.cursor').style.top = e.pageY - window.scrollY + 'px'
  }
  return (
    <div className="mainBackground">
      <div className="mainBackgroundBlur container">
        <div className="cursor"></div>
        <LeftMenu />
        <MainComp>
          {/* <HeaderLayout /> */}
          {/* <AppRouter /> */}
        </MainComp>
      </div>
    </div>
  )
}

export default App
