/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import * as THREE from 'three'

const Project = () => {
  useEffect(() => {
    MiniCanvas()
    MiniCanvas2()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function MiniCanvas() {
    //장면
    const scene = new THREE.Scene()

    //카메라
    const fov = 75
    const aspect = 2
    const near = 0.1
    const far = 50
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 0.95)

    //렌더러
    const canvas = document.querySelector('#mini-canvas')
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })

    //도형
    const Octahedron1_geometry = new THREE.OctahedronGeometry(0.3, 0)
    const Octahedron1_material = new THREE.MeshNormalMaterial({})
    const Octahedron1 = new THREE.Mesh(Octahedron1_geometry, Octahedron1_material)
    scene.add(Octahedron1)
    Octahedron1.position.set(0, 0, 0)

    const rose_geometry = new THREE.TorusKnotGeometry(5.8, 0.1, 100, 20, 12, 1)
    const rose_material = new THREE.MeshLambertMaterial({ color: '#9b0707' })
    const rose = new THREE.Mesh(rose_geometry, rose_material)
    scene.add(rose)

    //빛
    const ambientLight = new THREE.AmbientLight('#c0c0c0', 0.5)
    const directionalLight = new THREE.DirectionalLight('ivory', 0.35)
    directionalLight.position.set(-2, 4, 3)
    scene.add(ambientLight)
    scene.add(directionalLight)

    function render(time) {
      time *= 0.0005 // 회전 속도

      //회전
      rose.rotation.z -= 0.005
      Octahedron1.rotation.z = time * 4
      Octahedron1.rotation.x = time * 4
      Octahedron1.rotation.y = time * 4

      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
      }
      requestAnimationFrame(render)
    }
    render()

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const needResize = canvas.width !== width || canvas.height !== height
      if (needResize) {
        renderer.setSize(width, height, false)
      }
      return needResize
    }
  }
  function MiniCanvas2() {
    //장면
    const scene = new THREE.Scene()

    //카메라
    const fov = 75
    const aspect = 2
    const near = 0.1
    const far = 50
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 1)

    //렌더러
    const canvas = document.querySelector('#mini-canvas2')
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })

    //도형
    const Octahedron1_geometry = new THREE.OctahedronGeometry(0.3, 0)
    const Octahedron1_material = new THREE.MeshNormalMaterial({})
    const Octahedron1 = new THREE.Mesh(Octahedron1_geometry, Octahedron1_material)
    scene.add(Octahedron1)
    Octahedron1.position.set(0, 0, 0)

    const rose_geometry = new THREE.TorusKnotGeometry(5.8, 0.1, 100, 20, 12, 1)
    const rose_material = new THREE.MeshLambertMaterial({ color: '#9b0707' })
    const rose = new THREE.Mesh(rose_geometry, rose_material)
    scene.add(rose)

    //빛
    const ambientLight = new THREE.AmbientLight('#c0c0c0', 0.5)
    const directionalLight = new THREE.DirectionalLight('ivory', 0.35)
    directionalLight.position.set(-2, 4, 3)
    scene.add(ambientLight)
    scene.add(directionalLight)

    function render(time) {
      time *= 0.0005 // 회전 속도

      //회전
      rose.rotation.z -= 0.005
      Octahedron1.rotation.z = time * 4
      Octahedron1.rotation.x = time * 4
      Octahedron1.rotation.y = time * 4

      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
      }
      requestAnimationFrame(render)
    }
    render()

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const needResize = canvas.width !== width || canvas.height !== height
      if (needResize) {
        renderer.setSize(width, height, false)
      }
      return needResize
    }
  }

  let carousel = ''
  let arrowBtns = ''
  let startX = ''
  let startScrollLeft = ''
  let firstCardWidth = ''
  let mCheck = false

  useEffect(() => {
    const isMobile = () => {
      const user = navigator.userAgent
      mCheck = false

      if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
        mCheck = true
      }

      return mCheck
    }
    isMobile()

    if (mCheck) {
      ///모바일 일 때
      carousel = document.querySelector('.carousel')
      firstCardWidth = carousel.querySelector('.card-pro').offsetWidth
      arrowBtns = document.querySelectorAll('.i1')
      let carousel_scrollWidth = document.querySelector('.carousel').scrollWidth
      let carousel_clientWidth = document.querySelector('.carousel').clientWidth
      let carousel_width = carousel_scrollWidth - carousel_clientWidth

      let isDragging = false
      const dragStart = e => {
        isDragging = true
        startX = e.pageX
        startScrollLeft = carousel.scrollLeft
      }
      const dragging = e => {
        if (!isDragging) return
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
        if (carousel.scrollLeft < 3) {
          document.querySelector('#left1').classList.add('opa5')
        } else if (carousel.scrollLeft > carousel_width - 30) {
          document.querySelector('#right1').classList.add('opa5')
        } else {
          document.querySelector('#left1').classList.remove('opa5')
          document.querySelector('#right1').classList.remove('opa5')
        }
      }
      const dragStop = e => {
        isDragging = false
      }

      if (isDragging) {
        document.querySelector('.project').classList.add('stop-scrollY')
      } else {
        document.querySelector('.project').classList.remove('stop-scrollY')
      }

      carousel.addEventListener('touchstart', dragStart)
      carousel.addEventListener('touchmove', dragging)
      carousel.addEventListener('touchend', dragStop)
    } else {
      //pc일때
      carousel = document.querySelector('.carousel')
      let carousel_scrollWidth = document.querySelector('.carousel').scrollWidth
      let carousel_clientWidth = document.querySelector('.carousel').clientWidth
      let carousel_width = carousel_scrollWidth - carousel_clientWidth
      firstCardWidth = carousel.querySelector('.card-pro').offsetWidth
      arrowBtns = document.querySelectorAll('.i1')

      let isDragging = false
      const dragStart = e => {
        isDragging = true
        startX = e.pageX
        startScrollLeft = carousel.scrollLeft
      }
      const dragging = e => {
        if (!isDragging) return
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX) - 160
        if (carousel.scrollLeft < 3) {
          document.querySelector('#left1').classList.add('opa5')
        } else if (carousel.scrollLeft > carousel_width - 30) {
          document.querySelector('#right1').classList.add('opa5')
        } else {
          document.querySelector('#left1').classList.remove('opa5')
          document.querySelector('#right1').classList.remove('opa5')
        }
      }
      const dragStop = e => {
        isDragging = false
      }
      carousel.addEventListener('mousedown', dragStart)
      carousel.addEventListener('mousemove', dragging)
      carousel.addEventListener('mouseup', dragStop)
    }
  }, [])

  Timer()
  const [tf, setTf] = useState(true)
  function Timer() {
    setTimeout(() => {
      if (tf) setTf(!tf)
    }, 2200)
  }
  return (
    <div className="project">
      <div className="project-contents">
        <div className="project-contents-COMPANY">
          <div style={{ position: 'absolute' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMPANY
            <canvas className="mini-canvas-pro" id="mini-canvas"></canvas>
          </div>
          <div className="wrapper">
            <i id="left1" className="i1 opa5">
              <img
                className="angle-bracket"
                src={require('../common/card/lc.png')}
                alt="l-angle-bracket"
              />
            </i>
            <div className="alim-move-pro" style={{ display: tf ? '' : 'none' }}>
              <img
                className="alim-move-pro"
                src={require('../common/image/pointer.png')}
                alt="pointer_img"
              />
            </div>
            <ul className="carousel">
              <li
                className="card-pro"
                style={{
                  marginLeft: '16px',
                }}
              >
                <div className="img">
                  <img src={require('../common/card/1.jpg')} draggable="false" alt="1" />
                </div>
                <h3>쿠쿠</h3>
                <span>123123</span>
                <span>123123</span>
              </li>
              <li className="card-pro">
                <div className="img">
                  <img src={require('../common/card/2.jpg')} draggable="false" alt="2" />
                </div>
                <h3>컬리 back-end</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
              <li className="card-pro">
                <div className="img">
                  <img src={require('../common/card/3.jpg')} draggable="false" alt="3" />
                </div>
                <h3>컬리 front-end</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
              <li className="card-pro">
                <div className="img">
                  <img src={require('../common/card/stx.png')} draggable="false" alt="stx-img" />
                </div>
                <h3>(STX) 계약직 계약/인사 관리시스템 구축</h3>
                <span>
                  <span style={{ color: '#1e7c60', fontWeight: 600 }}>[ </span>
                  <span className="f15" style={{ color: 'ivory', fontWeight: 500 }}>
                    <span className="f15" style={{ display: 'inline-block' }}>
                      <div className="text-btn">role</div>&nbsp;&nbsp;
                    </span>
                    프론트엔드
                  </span>
                  <span style={{ color: '#1e7c60', fontWeight: 600 }}> ]</span>
                </span>
                <span>2020.10~2021.06 (9개월)</span>
              </li>
              <li className="card-pro">
                <div className="img">
                  <img src={require('../common/card/5.jpg')} draggable="false" alt="5" />
                </div>
                <h3>위젯누리꺼 모음</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
            </ul>
            <i id="right1" className="i1">
              <img
                className="angle-bracket"
                src={require('../common/card/rc.png')}
                draggable="false"
                alt="r-angle-bracket"
              />
            </i>
          </div>
        </div>
        <div className="project-contents-SIDE">
          <div style={{ position: 'absolute' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SIDE
            <canvas className="mini-canvas-pro" id="mini-canvas2"></canvas>
          </div>
          <div className="wrapper">
            <i className="i2">
              <img
                className="angle-bracket2"
                src={require('../common/card/lc.png')}
                draggable="false"
                alt="l-angle-bracket"
              />
            </i>
            <ul className="carousel2">
              <li
                className="card-pro"
                style={{
                  marginLeft: '16px',
                }}
              >
                <div className="img">
                  <img src={require('../common/card/1.jpg')} draggable="false" alt="1" />
                </div>
                <h3>포트폴리오 메이킹</h3>
                <span>깃에도 정리(three컴포넌트 등)</span>
                <span>구글애널리틱스/구글태그 표현</span>
              </li>
              <li className="card-pro">
                <div className="img">
                  <img src={require('../common/card/2.jpg')} draggable="false" alt="2" />
                </div>
                <h3>ot</h3>
                <span>123123</span>
                <span>123123</span>
              </li>
              <li className="card-pro">
                <div className="img">
                  <img src={require('../common/card/3.jpg')} draggable="false" alt="3" />
                </div>
                <h3>위시켓</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
              <li className="card-pro">
                <div className="img">
                  <img src={require('../common/card/4.jpg')} draggable="false" alt="4" />
                </div>
                <h3>알파카</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
              <li className="card-pro">
                <div className="img">
                  <img src={require('../common/card/5.jpg')} draggable="false" alt="5" />
                </div>
                <h3>5번사진</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
              <li className="card-pro">
                <div className="img">
                  <img src={require('../common/card/6.jpg')} draggable="false" alt="6" />
                </div>
                <h3>6번사진</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
            </ul>
            <i className="i2">
              <img
                className="angle-bracket2"
                src={require('../common/card/rc.png')}
                alt="r-angle-bracket"
              />
            </i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
