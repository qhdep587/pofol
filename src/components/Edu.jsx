import React, { useEffect } from 'react'
import * as THREE from 'three'

const Edu = () => {
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

  return (
    <div>
      <div className="edu">
        <canvas className="mini-canvas-edu" id="mini-canvas"></canvas>
        <span>EDU</span>
        <canvas className="mini-canvas-edu" id="mini-canvas2"></canvas>
      </div>
      <div className="edu">
        {/* 학력 */}
        <ul className="edu-text-box">
          <span className="edu-title">◆</span>&nbsp;&nbsp;
          <span style={{ fontSize: '22px', color: 'ivory' }}>학력</span>
          <br />
          <li style={{ fontSize: '10px' }}>&nbsp;</li>
          <li className="list-item">
            &nbsp;&nbsp;<strong>성동공업고등학교</strong>
            &nbsp;&nbsp;&nbsp;전자기계과&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span style={{ fontSize: '15px', display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;2008.02 ~ 2011.03&nbsp;&nbsp;&nbsp;
              <div className="text-btn">졸업</div>
            </span>
          </li>
          <li className="list-item">&nbsp;</li>
          <li className="list-item2">
            &nbsp;&nbsp;<strong>학점은행제</strong>
            &nbsp;&nbsp;&nbsp;경역학과&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#1e7c60', fontWeight: 600 }}>[ </span>
            <span style={{ color: 'ivory', fontWeight: 500, fontSize: '15px' }}>
              방송통신대 편입 목표
            </span>
            <span style={{ color: '#1e7c60', fontWeight: 600 }}> ]</span>
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span style={{ fontSize: '15px', display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;2023.01 ~&nbsp;&nbsp;&nbsp;
              <div className="text-btn" style={{ background: '#660c0c' }}>
                재학중
              </div>
            </span>
          </li>
          <li style={{ fontSize: '10px' }}>&nbsp;</li>
        </ul>
        {/* 교육 */}
        <ul className="edu-text-box">
          <span className="edu-title">◆</span>&nbsp;&nbsp;
          <span style={{ fontSize: '22px', color: 'ivory' }}>교육이수</span>
          <br />
          <li style={{ fontSize: '10px' }}>&nbsp;</li>
          <li className="list-item">
            &nbsp;&nbsp;<strong>KH정보교육원</strong>
            &nbsp;&nbsp;&nbsp;<span style={{ color: '#1e7c60', fontWeight: 600 }}>[ </span>
            <span style={{ color: 'ivory', fontWeight: 500, fontSize: '15px' }}>
              Java / Spring Framework 개발자 양성과정
            </span>
            <span style={{ color: '#1e7c60', fontWeight: 600 }}> ]</span>&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span style={{ fontSize: '15px', display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;2019.09 ~ 2020.05&nbsp;&nbsp;&nbsp;
              <div className="text-btn" style={{ background: '#635506' }}>
                수료
              </div>
            </span>
          </li>
          <li style={{ fontSize: '10px' }}>&nbsp;</li>
        </ul>

        {/* 어학 */}
        <ul className="edu-text-box">
          <span className="edu-title">◆</span>&nbsp;&nbsp;
          <span style={{ fontSize: '22px', color: 'ivory' }}>어학</span>
          <br />
          <li style={{ fontSize: '10px' }}>&nbsp;</li>
          <li className="list-item">
            &nbsp;&nbsp;<strong>워킹홀리데이</strong>&nbsp;&nbsp;&nbsp;호주&nbsp;&nbsp;&nbsp;
            <span style={{ color: '#1e7c60', fontWeight: 600 }}>[ </span>
            <span style={{ color: 'ivory', fontWeight: 500, fontSize: '15px' }}>
              어학연수 / 사회경험
            </span>
            <span style={{ color: '#1e7c60', fontWeight: 600 }}> ]</span>&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="list-item list-item-sub" style={{ position: 'relative', Left: '4.2%' }}>
            <span style={{ fontSize: '15px', display: 'inline-block' }}>
              &nbsp;&nbsp;&nbsp;2018.08 ~ 2019.08&nbsp;&nbsp;&nbsp;
            </span>
          </li>
          <li>&nbsp;</li>
        </ul>
      </div>
    </div>
  )
}

export default Edu
