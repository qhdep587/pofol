import React, { useEffect } from 'react'
import * as THREE from 'three'
import { RGBADepthPacking } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Intro = () => {
  useEffect(() => {
    MyCanvas1()
    MyCanvas2()
  }, [])

  function MyCanvas1() {
    //장면
    const scene = new THREE.Scene()

    //카메라
    const fov = 50
    const aspect = 2
    const near = 1
    const far = 4000
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 100)

    //렌더러
    const canvas = document.querySelector('#intro-canvas1')
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })

    const roomBox = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 128, 128),
      new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 1.0 },
        },
        vertexShader: `
        varying vec3 vEC;
        uniform float time;

        float iqhash(float n) {
          return fract(sin(n) * 43758.5453);
        }

        float noise(vec3 x) {
          vec3 p = floor(x);
          vec3 f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          float n = p.x + p.y * 57.0 + 113.0 * p.z;
          return mix(mix(mix(iqhash(n), iqhash(n + 1.0), f.x),
                     mix(iqhash(n + 57.0), iqhash(n + 58.0), f.x), f.y),
                     mix(mix(iqhash(n + 113.0), iqhash(n + 114.0), f.x),
                     mix(iqhash(n + 170.0), iqhash(n + 171.0), f.x), f.y), f.z);
        }

        float xmb_noise2(vec3 x) {
          return cos(x.z * 4.0) * cos(x.z + time / 10.0 + x.x);
        }

        void main() {
          vec4 pos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vec3 v = vec3(pos.x, 0.0, pos.y);
          vec3 v2 = v;
          vec3 v3 = v;

          v.y = xmb_noise2(v2) / 8.0;

          v3.x -= time / 5.0;
          v3.x /= 4.0;

          v3.z -= time / 10.0;
          v3.y -= time / 100.0;

          v.z -= noise(v3 * 7.0) / 15.0;
          v.y -= noise(v3 * 7.0) / 15.0 + cos(v.x * 2.0 - time / 2.0) / 5.0 - 0.3;

          vEC = v;
          gl_Position = vec4(v, 1.0);
        }
      `,
        fragmentShader: `
        uniform float time;
        varying vec3 vEC;

        void main()
        {
           const vec3 up = vec3(0.0, 0.0, 1.0);
           vec3 x = dFdx(vEC);
           vec3 y = dFdy(vEC);
           vec3 normal = normalize(cross(x, y));
           float c = 1.0 - dot(normal, up);
           c = (1.0 - cos(c * c)) / 3.0;
           gl_FragColor = vec4(1.0, 1.0, 1.0, c * 1.5);
        }
      `,
        extensions: {
          derivatives: true,
          fragDepth: false,
          drawBuffers: false,
          shaderTextureLOD: false,
        },
        side: THREE.DoubleSide,
        transparent: true,
        depthTest: false,
      })
    )
    scene.add(roomBox)

    const resizeRendererToDisplaySize = () => {
      const container = renderer.domElement
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
      renderer.setPixelRatio(devicePixelRatio)

      roomBox.scale.set(camera.aspect * 1.55, 0.75, 1)
    }

    window.addEventListener('resize', resizeRendererToDisplaySize)

    const animate = () => {
      roomBox.material.uniforms.time.value += 0.01

      renderer.render(scene, camera)
      requestAnimationFrame(() => animate())
    }

    function render(time) {
      time *= 0.0005 // 회전 속도

      const canvas = renderer.domElement
      camera.aspect = canvas.clientWidth / canvas.clientHeight
      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
      if (resizeRendererToDisplaySize()) {
        const canvas = renderer.domElement
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
      }
      requestAnimationFrame(render)
    }
    render()

    animate()
  }

  function MyCanvas2() {
    //장면
    const scene = new THREE.Scene()

    //카메라
    const fov = 75
    const aspect = 2
    const near = 0.1
    const far = 100
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 35)

    //렌더러
    const canvas = document.querySelector('#intro-canvas2')
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace

    //벽 텍스처
    const texture1 = new THREE.TextureLoader().load(require('../common/image/res2.jpg'))
    const texture2 = new THREE.TextureLoader().load(require('../common/image/resItem.png'))
    const greenWood = new THREE.TextureLoader().load(require('../common/image/greenwood.jpg'))

    //마우스컨트롤
    const controll = new OrbitControls(camera, renderer.domElement)
    controll.enableDamping = true
    controll.minDistance = 40
    controll.maxDistance = 1000
    controll.enableZoom = false
    controll.update()

    //도형
    const pic_geometry = new THREE.BoxGeometry(25, 20)
    const pic_material = new THREE.MeshLambertMaterial({
      map: texture1,
      transparent: true,
      opacity: 1,
    })
    const pic = new THREE.Mesh(pic_geometry, pic_material)
    pic.position.set(0, 0, -1)
    pic.rotation.set(-0.05, 0, 0)
    scene.add(pic)

    const pic_geometry2 = new THREE.PlaneGeometry(18, 18)
    const pic_material2 = new THREE.MeshBasicMaterial({
      map: texture2,
      transparent: true,
      opacity: 1,
      alpha: true,
    })
    const pic2 = new THREE.Mesh(pic_geometry2, pic_material2)
    pic2.position.set(4, -2, 1)
    scene.add(pic2)

    const pic_geometry3 = new THREE.BoxGeometry(28, 23)
    const pic_material3 = [
      new THREE.MeshBasicMaterial({
        color: 'black',
      }),
      new THREE.MeshBasicMaterial({
        color: 'black',
      }),
      new THREE.MeshBasicMaterial({
        color: 'black',
      }),
      new THREE.MeshBasicMaterial({
        color: 'black',
      }),
      new THREE.MeshBasicMaterial({
        map: greenWood,
      }),
      new THREE.MeshBasicMaterial({
        color: 'black',
      }),
    ]
    const pic3 = new THREE.Mesh(pic_geometry3, pic_material3)
    pic3.position.set(0, 0, -1.1)
    pic3.rotation.set(-0.05, 0, 0)
    scene.add(pic3)

    //빛
    const ambientLight = new THREE.AmbientLight('white', 0.7)
    const directionalLight = new THREE.DirectionalLight('gray', 0.1)
    const directionalLight2 = new THREE.DirectionalLight('#750f0f', 1)
    directionalLight.position.set(0, 0, 4)
    directionalLight2.position.set(0, 0, 4)
    scene.add(ambientLight)
    scene.add(directionalLight)
    scene.add(directionalLight2)

    // const helper = new THREE.DirectionalLightHelper(directionalLight)
    // scene.add(helper)

    function render(time) {
      //회전
      // pic.rotation.y -= 0.0005
      // pic2.rotation.y -= 0.0005
      // pic3.rotation.y -= 0.0005

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
        <canvas className="intro-canvas-item1" id="intro-canvas1"></canvas>
        <canvas className="intro-canvas-item2" id="intro-canvas2"></canvas>
      </div>
      <div className="intro-item">intro2</div>
    </div>
  )
}

export default Intro
