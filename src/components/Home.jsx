import React, { useEffect } from "react";
import TypeIt from "typeit-react";
import * as THREE from "three";

const Home = () => {
  useEffect(() => {
    MyCanvas();
  }, []);

  function MyCanvas() {
    //장면
    const scene = new THREE.Scene();

    //카메라
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 50;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 16);

    //렌더러
    const canvas = document.querySelector("#canvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    //도형
    const Octahedron1_geometry = new THREE.OctahedronGeometry(1.4, 0);
    const Octahedron1_material = new THREE.MeshPhongMaterial({
      color: "#9c8402",
    });
    const Octahedron1 = new THREE.Mesh(
      Octahedron1_geometry,
      Octahedron1_material
    );
    scene.add(Octahedron1);

    const Octahedron2_geometry = new THREE.OctahedronGeometry(1.4, 0);
    const Octahedron2_material = new THREE.MeshPhongMaterial({
      color: "#9c8402",
    });
    const Octahedron2 = new THREE.Mesh(
      Octahedron2_geometry,
      Octahedron2_material
    );
    scene.add(Octahedron2);

    const Octahedron3_geometry = new THREE.OctahedronGeometry(1.4, 0);
    const Octahedron3_material = new THREE.MeshPhongMaterial({
      color: "#9c8402",
    });
    const Octahedron3 = new THREE.Mesh(
      Octahedron3_geometry,
      Octahedron3_material
    );
    scene.add(Octahedron3);

    const Octahedron4_geometry = new THREE.OctahedronGeometry(1.4, 0);
    const Octahedron4_material = new THREE.MeshPhongMaterial({
      color: "#9c8402",
    });
    const Octahedron4 = new THREE.Mesh(
      Octahedron4_geometry,
      Octahedron4_material
    );
    scene.add(Octahedron3);

    const leaf_geometry = new THREE.CapsuleGeometry(4, 9, 1, 2);
    const leaf_material = new THREE.MeshStandardMaterial({
      color: "rgb(0, 64, 0)",
    });
    const leaf = new THREE.Mesh(leaf_geometry, leaf_material);
    leaf.position.set(6, 6, -8);
    leaf.rotation.set(1.2, 0.2, -0.7);
    scene.add(leaf);
    // const geometry2 = new THREE.TorusGeometry(2.2, 0.22, 16, 100)
    // const material2 = new THREE.MeshStandardMaterial({ color: 'orange' })
    // const torus2 = new THREE.Mesh(geometry2, material2)
    // scene.add(torus2)
    // const geometry3 = new THREE.TorusGeometry(4, 0.3, 16, 100)
    // const material3 = new THREE.MeshStandardMaterial({ color: 'brown' })
    // const torus3 = new THREE.Mesh(geometry3, material3)
    // scene.add(torus3)
    // const geometry4 = new THREE.TorusGeometry(5.5, 0.2, 16, 100)
    // const material4 = new THREE.MeshStandardMaterial({ color: 'green' })
    // const torus4 = new THREE.Mesh(geometry4, material4)
    // scene.add(torus4)
    // const geometry5 = new THREE.TorusGeometry(8, 0.2, 16, 100)
    // const material5 = new THREE.MeshStandardMaterial({ color: 'gold' })
    // const torus5 = new THREE.Mesh(geometry5, material5)
    // torus5.position.set(0, 0, -2)
    // scene.add(torus5)
    const rose_geometry = new THREE.TorusKnotGeometry(5.8, 0.3, 100, 20, 12, 1);
    const rose_material = new THREE.MeshLambertMaterial({ color: "#9b0707" });
    const rose = new THREE.Mesh(rose_geometry, rose_material);
    scene.add(rose);

    //빛
    const ambientLight = new THREE.AmbientLight("#c0c0c0", 0.3);
    const directionalLight = new THREE.DirectionalLight("ivory", 0.5);
    directionalLight.position.set(-2, 5, 3);
    scene.add(ambientLight);
    scene.add(directionalLight);

    function render(time) {
      time *= 0.0005; // 회전 속도

      //회전
      // torus2.rotation.x = time
      // torus2.rotation.y = time / 0.6
      // torus3.rotation.x = time / 0.5
      // torus3.rotation.y = time / 2
      // torus4.rotation.x = time * 1.5
      // torus4.rotation.y = time * 0.5
      // torus5.rotation.x = time * 1.5
      // torus5.rotation.y = time / 0.3
      rose.rotation.z = time / 2;
      // rose.rotation.x = time * 0.1
      // rose.rotation.y = time / 3
      Octahedron1.rotation.z = time * 4;
      Octahedron1.rotation.x = time * 4;
      Octahedron1.rotation.y = time * 4;
      Octahedron2.rotation.z = time * 1;
      Octahedron2.rotation.x = time * 1;
      Octahedron2.rotation.y = time * 1;
      Octahedron3.rotation.z = time * 2;
      Octahedron3.rotation.x = time * 2;
      Octahedron3.rotation.y = time * 2;
      Octahedron4.rotation.z = time * 3;
      Octahedron4.rotation.x = time * 3;
      Octahedron4.rotation.y = time * 3;
      // leaf.rotation.z = time * 3;
      // leaf.rotation.x = time * 10;
      // leaf.rotation.y = time / 1.5;

      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      requestAnimationFrame(render);
    }
    render();

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
  }

  return (
    <div className="home">
      <div className="home-item1">
        <div className="home-app">
          <div className="home-app-slideup1">
            <TypeIt
              style={{
                color: "ivory",
                fontSize: "18px",
                paddingTop: "5px",
                height: "100%",
              }}
              options={{ startDelay: 900, speed: 100 }}
              getBeforeInit={(instance) => {
                instance
                  .type("Hello, I'm danny.")
                  .pause(50)
                  .delete(7)
                  .pause(500)
                  .type(" 대윤", { delay: 190 })
                  .pause(300)
                  .delete(13)
                  .pause(600)
                  .type(
                    '안녕하세요.&nbsp;&nbsp;개발자&nbsp;&nbsp;<text class="text-bold">이대</text>',
                    {
                      delay: 100,
                    }
                  )
                  .pause(700)
                  .move(-7)
                  .type(
                    ' <text class="text-bold">프론트엔드</text>&nbsp;&nbsp;'
                  )
                  .pause(300)
                  .move(7)
                  .type('<text class="text-bold">dbs</text>', { delay: 190 })
                  .delete(3, { delay: 200 })
                  .type('<text class="text-bold">윤</text>입니다.', {
                    delay: 100,
                  });

                return instance;
              }}
            ></TypeIt>
          </div>
        </div>
      </div>
      <div className="home-item2">
        <canvas className="canvas-item" id="canvas"></canvas>
      </div>
      <div className="home-item3">© 2023 DaeYun Lee. All Rights Reserved.</div>
    </div>
  );
};

export default Home;
