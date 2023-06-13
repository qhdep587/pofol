import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Project = () => {
  useEffect(() => {
    MyCanvas();
  }, []);

  function MyCanvas() {
    //장면
    const scene = new THREE.Scene();

    //카메라
    const fov = 50;
    const aspect = 2;
    const near = 1;
    const far = 4000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 20, 100);
    camera.lookAt(0, 0, 0);

    //렌더러
    const canvas = document.querySelector("#project-canvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    //벽 텍스처
    // const texture = new THREE.TextureLoader().load(require('../common/image/blackWall.jpg'))

    //도형
    const roomBox_geo = new THREE.BoxGeometry(50, 50, 50);
    const roomBox_mat = new THREE.MeshStandardMaterial({
      color: 0x333333,
      // map: texture,
    });
    // const roomBox = new THREE.Mesh(roomBox_geo, roomBox_mat)
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
    );
    roomBox_mat.side = THREE.BackSide;
    scene.add(roomBox);

    //마우스컨트롤
    const controll = new OrbitControls(camera, renderer.domElement);
    controll.enableDamping = true;
    controll.minDistance = 20;
    controll.maxDistance = 100;
    controll.update();

    //빛
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    // const directionalLight = new THREE.DirectionalLight('ivory', 0.6)
    // directionalLight.position.set(-2, 4, 3)
    scene.add(ambientLight);
    // scene.add(directionalLight)

    // function resizeRendererToDisplaySize(renderer) {
    //   const canvas = renderer.domElement
    //   const width = canvas.clientWidth
    //   const height = canvas.clientHeight
    //   const needResize = canvas.width !== width || canvas.height !== height
    //   if (needResize) {
    //     renderer.setSize(width, height, false)
    //   }
    //   return needResize
    // }

    const resizeRendererToDisplaySize = () => {
      const container = renderer.domElement;
      camera.aspect = container.clientWidth / container.clientHeight;
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(devicePixelRatio);

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();

      roomBox.scale.set(camera.aspect * 1.55, 0.75, 1);
    };

    const animate = () => {
      roomBox.material.uniforms.time.value += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(() => animate());
    };

    function render(time) {
      time *= 0.0005; // 회전 속도

      //회전
      // Octahedron1.rotation.z = time * 4

      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
      if (resizeRendererToDisplaySize()) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      requestAnimationFrame(render);
    }
    render();

    animate();
  }
  return (
    <div className="project">
      <canvas className="project-canvas-item" id="project-canvas"></canvas>
    </div>
  );
};

export default Project;
