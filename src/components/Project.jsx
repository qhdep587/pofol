import React, { useEffect } from 'react'
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

  return (
    <div className="project">
      <div className="project-title">
        <canvas className="mini-canvas-pro" id="mini-canvas"></canvas>
        <span>PROJECT</span>
        <canvas className="mini-canvas-pro" id="mini-canvas2"></canvas>
      </div>
      <div className="project-contents">
        <div className="project-contents-WORK">
          <div style={{ position: 'absolute' }}>COMPANY</div>
        </div>
        <div className="project-contents-TOY">
          <div style={{ position: 'absolute' }}>TOY</div>
        </div>
      </div>
    </div>
  )
}

export default Project
