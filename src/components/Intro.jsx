import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Intro = () => {
  useEffect(() => {
    MyCanvas()
  }, [])

  function MyCanvas() {
    //장면
    const scene = new THREE.Scene()

    //카메라
    const fov = 50
    const aspect = 2
    const near = 1
    const far = 4000
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 20, 100)
    camera.lookAt(0, 0, 0)

    //렌더러
    const canvas = document.querySelector('#intro-canvas')
    const renderer = new THREE.WebGLRenderer({ canvas })

    //벽 텍스처
    const texture = new THREE.TextureLoader().load(require('../common/image/greenWall.jpg'))

    //도형
    const roomBox_geo = new THREE.BoxGeometry(200, 200, 200)
    const roomBox_mat = new THREE.MeshStandardMaterial({
      // color: 0x333333,
      map: texture,
    })
    const roomBox = new THREE.Mesh(roomBox_geo, roomBox_mat)
    roomBox_mat.side = THREE.BackSide
    scene.add(roomBox)

    //마우스컨트롤
    const controll = new OrbitControls(camera, renderer.domElement)
    controll.enableDamping = true
    controll.minDistance = 20
    controll.maxDistance = 100
    controll.update()

    //빛
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
    // const directionalLight = new THREE.DirectionalLight('ivory', 0.6)
    // directionalLight.position.set(-2, 4, 3)
    scene.add(ambientLight)
    // scene.add(directionalLight)

    function render(time) {
      time *= 0.0005 // 회전 속도

      //회전
      // Octahedron1.rotation.z = time * 4

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
    <div className="intro">
      <div className="intro-item">
        <canvas className="intro-canvas-item" id="intro-canvas"></canvas>
      </div>
      {/* <div className="intro-item">intro2</div> */}
    </div>
  )
}

export default Intro
