import React, { useEffect } from 'react'
import * as THREE from 'three'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Work = () => {
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

  const navigate = useNavigate()
  const linkFn = (target, num) => {
    if (num > 0) {
      for (let i = 1; i < 5; i++) {
        document.getElementById('menu' + i).className = 'left-menu-item-content'
      }
      document.getElementById('menu' + num).className += ' active'
      navRouter(num)
    }
  }

  const navRouter = goto => {
    if (goto === 'home') {
      for (let i = 1; i < 5; i++) {
        document.getElementById('menu' + i).className = 'left-menu-item-content'
      }
    }

    switch (goto) {
      case 1:
        navigate('/intro')
        break
      case 2:
        navigate('/edu')
        break
      case 3:
        navigate('/work')
        break
      case 4:
        navigate('/project')
        break
      default:
        navigate('/')
        break
    }
  }

  return (
    <div>
      <div className="work">
        <div className="titleBox">
          <canvas className="mini-canvas-edu" id="mini-canvas"></canvas>
          <span>WORK</span>
          <canvas className="mini-canvas-edu" id="mini-canvas2"></canvas>
        </div>
        <br></br>
        <ul className="edu-text-box">
          <span className="edu-title">◆</span>&nbsp;&nbsp;
          <span className="f20">핵심역량</span>
          <li style={{ fontSize: '10px' }}>&nbsp;</li>
          <li className="list-item" style={{ fontSize: '17px' }}>
            &nbsp;&nbsp;- 많은 트래픽, 데이터 무게에 관한 이슈 경험
          </li>
          <li className="list-item" style={{ fontSize: '17px' }}>
            &nbsp;&nbsp;- kafka연동 / 계좌인증, 사업자인증 등
          </li>
          <li className="list-item" style={{ fontSize: '17px' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;외부 api 연동 경험
          </li>
          <li className="list-item" style={{ fontSize: '17px' }}>
            &nbsp;&nbsp;- rest api방식의 api생성 및 프론트 연동 경험
          </li>
          <li className="list-item" style={{ fontSize: '17px' }}>
            &nbsp;&nbsp;- react 주요 기술 이해
          </li>
          <li className="list-item" style={{ fontSize: '17px' }}>
            &nbsp;&nbsp;- agile경험
          </li>
          <li style={{ fontSize: '10px' }}>&nbsp;</li>
        </ul>
        <ul className="edu-text-box">
          <span className="edu-title">◆</span>&nbsp;&nbsp;
          <span className="f20">경력</span>
          <li style={{ fontSize: '10px' }}>&nbsp;</li>
          <li className="list-item">
            &nbsp;&nbsp;<strong>위젯누리</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#1e7c60', fontWeight: 600 }}>[ </span>
            <span className="f15" style={{ color: 'ivory', fontWeight: 500 }}>
              <span className="f15" style={{ display: 'inline-block' }}>
                <div className="text-btn">role</div>&nbsp;&nbsp;
              </span>
              퍼블리시 / 프론트엔드
            </span>
            <span style={{ color: '#1e7c60', fontWeight: 600 }}> ]</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;2020.07 ~ 2020.09&nbsp;&nbsp;&nbsp;
            </span>
          </li>
          <li className="list-item" style={{ height: '10px' }} />
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span style={{ color: '#1e7c60', fontWeight: 600 }}>
              &nbsp;&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;&nbsp;
            </span>
            <div className="text-btn" style={{ background: '#82097e' }}>
              HTML5
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#635506' }}>
              CSS3
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#0e646e' }}>
              JavaScript
            </div>
            &nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            &nbsp;&nbsp;&nbsp;
            <div className="text-btn" style={{ background: '#226e0b' }}>
              JQuery
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#660c0c' }}>
              ExtJS
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#580663' }}>
              PhotoShop
            </div>
            &nbsp;
          </li>
          <li className="list-item" style={{ height: '10px' }} />
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;담당업무&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;extJs이용하여
            </span>
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;데스크탑 디자인 기반의 솔루션
            </span>
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> ( </span>
              백신,장비관리 등<span style={{ color: '#1e7c60', fontWeight: 600 }}> )</span>
            </span>
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;퍼블, 프론트작업
            </span>
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;chart라이브러리 이용하여 대시보드 작업
            </span>
          </li>
          <li className="list-item">&nbsp;</li>
          <li className="list-item" style={{ height: '10px' }} />
          <li className="list-item" style={{ height: '10px' }} />
          <li className="list-item">
            &nbsp;&nbsp;<strong>시드아이티</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#1e7c60', fontWeight: 600 }}>[ </span>
            <span className="f15" style={{ color: 'ivory', fontWeight: 500 }}>
              <span className="f15" style={{ display: 'inline-block' }}>
                <div className="text-btn">role</div>&nbsp;&nbsp;
              </span>
              프론트엔드 / 백엔드
            </span>
            <span style={{ color: '#1e7c60', fontWeight: 600 }}> ]</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;2020.10 ~ 2023.07
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> ( </span>
              재직중
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> )</span>
            </span>
            &nbsp;&nbsp;&nbsp;
          </li>
          <li className="list-item" style={{ height: '10px' }} />
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span style={{ color: '#1e7c60', fontWeight: 600 }}>
              &nbsp;&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;&nbsp;
            </span>
            <div className="text-btn" style={{ background: '#82097e' }}>
              Java
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#635506' }}>
              SpringBoot
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#0e646e' }}>
              React
            </div>
            &nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            &nbsp;&nbsp;&nbsp;
            <div className="text-btn" style={{ background: '#226e0b' }}>
              JavaScript
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#660c0c' }}>
              MySQL
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#580663' }}>
              Kafka
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#849908' }}>
              Git
            </div>
            &nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            &nbsp;&nbsp;&nbsp;
            <div className="text-btn" style={{ background: '#960f47' }}>
              Slack
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#139492' }}>
              Jira
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#9c8610' }}>
              confluence
            </div>
            &nbsp;
            <div className="text-btn" style={{ background: '#0e5202' }}>
              swagger
            </div>
            &nbsp;
          </li>
          <li className="list-item" style={{ height: '10px' }} />
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;담당업무&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;개발지원
            </span>
          </li>
          <li className="list-item" style={{ height: '10px' }} />
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;프로젝트&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            </span>
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;- <span style={{ color: '#1e7c60', fontWeight: 600 }}> ( </span>
              STX<span style={{ color: '#1e7c60', fontWeight: 600 }}> )</span> 계약직 계약/인사
              관리시스템 구축
            </span>
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;2020.10 ~ 2021.06
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> ( </span>9 개월
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> )</span>
            </span>
            &nbsp;&nbsp;&nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;- <span style={{ color: '#1e7c60', fontWeight: 600 }}> ( </span>
              마켓컬리
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> )</span> 3p 파트너센터 /
              파트너어드민
            </span>
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;2021.07 ~ 2023.06
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> ( </span>1년 11개월
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> )</span>
            </span>
            &nbsp;&nbsp;&nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;- <span style={{ color: '#1e7c60', fontWeight: 600 }}> ( </span>
              쿠쿠
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> )</span> 쿠쿠 UI/UX 개선 사업
            </span>
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span className="f15" style={{ display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;2021.05 ~ 2023.07
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> ( </span>3 개월
              <span style={{ color: '#1e7c60', fontWeight: 600 }}> )</span>
            </span>
            &nbsp;&nbsp;&nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <Link className="link" to="/project" onClick={e => linkFn(e.target, 4)}>
              &nbsp;&nbsp;&nbsp;project &gt;&gt;&nbsp;&nbsp;&nbsp;
            </Link>
          </li>
          <li style={{ fontSize: '10px' }}>&nbsp;</li>
          <li>&nbsp;</li>
        </ul>
      </div>
    </div>
  )
}

export default Work
