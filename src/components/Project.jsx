/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as THREE from "three";

const Project = () => {
  useEffect(() => {
    MiniCanvas(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [goStop, setGoStop] = useState(true);
  function MiniCanvas(num) {
    //장면
    const scene = new THREE.Scene();

    //카메라
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 50;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 0.95);

    //렌더러
    let canvas;
    if (num === 1) {
      canvas = document.querySelector("#mini-canvas");
    } else {
      canvas = document.querySelector("#mini-canvas" + num);
    }
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    //도형
    const Octahedron1_geometry = new THREE.OctahedronGeometry(0.3, 0);
    const Octahedron1_material = new THREE.MeshNormalMaterial({});
    const Octahedron1 = new THREE.Mesh(
      Octahedron1_geometry,
      Octahedron1_material
    );
    scene.add(Octahedron1);
    Octahedron1.position.set(0, 0, 0);

    const rose_geometry = new THREE.TorusKnotGeometry(5.8, 0.1, 100, 20, 12, 1);
    const rose_material = new THREE.MeshLambertMaterial({ color: "#9b0707" });
    const rose = new THREE.Mesh(rose_geometry, rose_material);
    scene.add(rose);

    //빛
    const ambientLight = new THREE.AmbientLight("#c0c0c0", 0.5);
    const directionalLight = new THREE.DirectionalLight("ivory", 0.35);
    directionalLight.position.set(-2, 4, 3);
    scene.add(ambientLight);
    scene.add(directionalLight);

    function render(time) {
      time *= 0.0005; // 회전 속도

      //회전
      rose.rotation.z -= 0.005;
      Octahedron1.rotation.z = time * 4;
      Octahedron1.rotation.x = time * 4;
      Octahedron1.rotation.y = time * 4;

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

    switch (num) {
      case 1:
        MiniCanvas(2);
        break;
      case 2:
        MiniCanvas(3);
        break;
      case 3:
        MiniCanvas(4);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    let carousel = "";
    let startX = "";
    let startScrollLeft = "";
    let mCheck = false;
    const isMobile = () => {
      const user = navigator.userAgent;
      mCheck = false;

      if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
        mCheck = true;
      }

      return mCheck;
    };
    isMobile();

    if (mCheck) {
      ///모바일 일 때
      carousel = document.querySelector(".carousel")[0];
      let carousel_scrollWidth =
        document.querySelector(".carousel")[0].scrollWidth;
      let carousel_clientWidth =
        document.querySelector(".carousel")[0].clientWidth;
      let carousel_width = carousel_scrollWidth - carousel_clientWidth;

      let isDragging = false;
      const dragStart = (e) => {
        setGoStop(true);
        isDragging = true;
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
      };
      const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        if (carousel.scrollLeft < 3) {
          document.querySelector("#left1").classList.add("opa5");
        } else if (carousel.scrollLeft > carousel_width - 30) {
          document.querySelector("#right1").classList.add("opa5");
        } else {
          document.querySelector("#left1").classList.remove("opa5");
          document.querySelector("#right1").classList.remove("opa5");
        }
        setGoStop(false);
      };
      const dragStop = (e) => {
        isDragging = false;
      };

      if (isDragging) {
        document.querySelector(".project").classList.add("stop-scrollY");
      } else {
        document.querySelector(".project").classList.remove("stop-scrollY");
      }

      carousel.addEventListener("touchstart", dragStart);
      carousel.addEventListener("touchmove", dragging);
      carousel.addEventListener("touchend", dragStop);
    } else {
      //pc일때
      carousel = document.querySelector(".carousel");
      let carousel_scrollWidth =
        document.querySelector(".carousel").scrollWidth;
      let carousel_clientWidth =
        document.querySelector(".carousel").clientWidth;
      let carousel_width = carousel_scrollWidth - carousel_clientWidth;

      let isDragging = false;
      const dragStart = (e) => {
        setGoStop(true);
        isDragging = true;
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
      };
      const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX) - 160;
        if (carousel.scrollLeft < 3) {
          document.querySelector("#left1").classList.add("opa5");
        } else if (carousel.scrollLeft > carousel_width - 30) {
          document.querySelector("#right1").classList.add("opa5");
        } else {
          document.querySelector("#left1").classList.remove("opa5");
          document.querySelector("#right1").classList.remove("opa5");
        }
        setGoStop(false);
      };
      const dragStop = (e) => {
        isDragging = false;
      };
      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      carousel.addEventListener("mouseup", dragStop);
    }
  }, []);
  useEffect(() => {
    let carousel = "";
    let startX = "";
    let startScrollLeft = "";
    let mCheck = false;
    const isMobile = () => {
      const user = navigator.userAgent;
      mCheck = false;

      if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
        mCheck = true;
      }

      return mCheck;
    };
    isMobile();

    if (mCheck) {
      ///모바일 일 때
      carousel = document.querySelector(".carousel2");
      let carousel_scrollWidth =
        document.querySelector(".carousel2").scrollWidth;
      let carousel_clientWidth =
        document.querySelector(".carousel2").clientWidth;
      let carousel_width = carousel_scrollWidth - carousel_clientWidth;

      let isDragging = false;
      const dragStart = (e) => {
        setGoStop(true);
        isDragging = true;
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
      };
      const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        if (carousel.scrollLeft < 3) {
          document.querySelector("#left1").classList.add("opa5");
        } else if (carousel.scrollLeft > carousel_width - 30) {
          document.querySelector("#right1").classList.add("opa5");
        } else {
          document.querySelector("#left1").classList.remove("opa5");
          document.querySelector("#right1").classList.remove("opa5");
        }
        setGoStop(false);
      };
      const dragStop = (e) => {
        isDragging = false;
      };

      if (isDragging) {
        document.querySelector(".project").classList.add("stop-scrollY");
      } else {
        document.querySelector(".project").classList.remove("stop-scrollY");
      }

      carousel.addEventListener("touchstart", dragStart);
      carousel.addEventListener("touchmove", dragging);
      carousel.addEventListener("touchend", dragStop);
    } else {
      //pc일때
      carousel = document.querySelector(".carousel2");
      let carousel_scrollWidth =
        document.querySelector(".carousel2").scrollWidth;
      let carousel_clientWidth =
        document.querySelector(".carousel2").clientWidth;
      let carousel_width = carousel_scrollWidth - carousel_clientWidth;

      let isDragging = false;
      const dragStart = (e) => {
        setGoStop(true);
        isDragging = true;
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
      };
      const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX) - 160;
        if (carousel.scrollLeft < 3) {
          document.querySelector("#left2").classList.add("opa5");
        } else if (carousel.scrollLeft > carousel_width - 30) {
          document.querySelector("#right2").classList.add("opa5");
        } else {
          document.querySelector("#left2").classList.remove("opa5");
          document.querySelector("#right2").classList.remove("opa5");
        }
        setGoStop(false);
      };
      const dragStop = (e) => {
        isDragging = false;
      };
      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      carousel.addEventListener("mouseup", dragStop);
    }
  }, []);

  Timer();
  const [tf, setTf] = useState(true);
  function Timer() {
    setTimeout(() => {
      if (tf) setTf(!tf);
    }, 2200);
  }

  //모달state
  const [projectCate, setProjectCate] = useState("COMPANY"); //프로젝트 카테고리
  const [projectTitle, setProjectTitle] = useState("cuckoo(쿠쿠)"); //프로젝트 제목
  const [projectSubTitle, setProjectSubTitle] = useState("UI/UX 개선 사업"); //프로젝트 부제목
  const [projectInfo, setProjectInfo] = useState(
    "2021.05 ~ 2023.07 (3개월) / 프론트엔드 / 모바일화면"
  ); //프로젝트 소개
  const [projectSkill, setProjectSkill] = useState([
    "Html",
    "Expression Language Tag",
    "Jira",
    "Github",
  ]); //프로젝트 스킬
  const [endNum, setEndNum] = useState(3); //사진갯수
  const [currentNum, setCurrentNum] = useState(1); //현재사진 카운트
  const [photoUrl, setPhotoUrl] = useState("cuckoo-main"); //사진url
  const [content, setContent] = useState(
    <>
      Thymeleaf 태그 사용하여 작업했습니다. <br></br> ui/ux 고도화업무 및 협업
      jira, github 이용 <br></br>객체화 및 타임딜 기능 개발"
    </>
  );
  const cardClick = (e, num) => {
    if (goStop) {
      switch (num) {
        case 11: //쿠쿠
          setProjectCate("COMPANY");
          setProjectTitle("cuckoo(쿠쿠)");
          setProjectSubTitle("UI/UX 개선 사업");
          setProjectInfo("2021.05 ~ 2023.07 (3개월) / FE / 모바일화면");
          setProjectSkill([
            "Html",
            "Expression Language Tag",
            "Jira",
            "Github",
          ]);
          setEndNum(3);
          setPhotoUrl("cuckoo-main");
          setContent(
            <>
              Thymeleaf 태그 사용하는 <br></br> ui/ux 고도화 작업 프로젝트
              였으며,
              <br></br>pc화면 mobile화 및<br></br>타임딜 기능 개발, 객체화 작업
              등 진행했습니다.<br></br>협업은 jira, github 이용했습니다.
              <br></br>
            </>
          );
          break;
        case 12: //마켓컬리
          setProjectCate("COMPANY");
          setProjectTitle("마켓컬리");
          setProjectSubTitle("3p 파트너센터 / 파트너어드민");
          setProjectInfo("2021.07 ~ 2023.06 (23개월) / BE,FE");
          setProjectSkill([
            "Java",
            "SpringBoot",
            "React",
            "JS",
            "MySQL",
            "Kafka",
            "Redis",
            "Github",
            "Slack",
            "Confluence",
            "Datadog",
            "Swagger",
          ]);
          setEndNum(19);
          setPhotoUrl("kurly-main");
          setContent(
            <>
              기획 단계 이후 바로 투입되어<br></br>
              agile방식으로 진행 했던 프로젝트입니다.<br></br>
              <br></br>
              마켓컬리의 판매자가 이용하는 파트너 센터와<br></br>
              판매자 및 상품을 관리하는 RM, MD 등 <br></br>관리자가 이용하는
              파트너 어드민이 있습니다.<br></br>
              <br></br>
              파트너 / 계정 / 상품 / 배송 / <br></br>주문 / 정산 / 대시보드 /
              보안상 이력 등의 <br></br>여러 도메인이 있었고 모든 부분에
              참여했습니다.<br></br>
              git과 젠킨스 자동빌드를 사용하였고,<br></br>
              aws서버에 배포 전 리뷰를 받고 진행하는 과정까지 맡았습니다.
              <br></br>
              <br></br>
              초기 view구축이 급한 단계에는 프론트 담당으로<br></br>
              여러 라이브러리로 그리드 위주의 화면을 만들고 <br></br>
              axios이용 rest api방식의 연동을 했습니다.<br></br>
              ssr, csr, seo, component, props, hooks, <br></br>router, life
              cycle 등의 이해를 동반하며 작업했습니다.<br></br>
              <br></br>
              화면이 진행된 후 <br></br>백엔드와 프론트를 같이 담당했습니다.
              <br></br>
              spring boot와 mysql이용하여 api 생성 및 수정 작업<br></br>
              kafka연동 / 계좌인증, 사업자인증 등<br></br>외부 api도
              연동하였습니다.<br></br>
              <br></br>
              보수 단계에서는 마켓컬리의 기획자 및<br></br>PM분과 slack으로
              소통하며 작업했고,<br></br>
              협업 툴은 jira, confluence, slack, swagger, datadog 등<br></br>
              이용했습니다.
              <br></br>
              <br></br>
              DB테이블과 기획의<br></br>많은 재수정을 경험해서 유익했고,
              <br></br>
              마켓컬리의 많은 판매자 수와<br></br>많은 상품옵션 및 상세이미지
              등에 의해서<br></br>
              많은 트래픽, 조회 건 수 등 데이터 무게에 관한<br></br>이슈 경험을
              한 것이 가장 유익했습니다.
            </>
          );
          break;
        case 13: //stx
          setProjectCate("COMPANY");
          setProjectTitle("STX");
          setProjectSubTitle("계약직 계약/인사 관리시스템 구축");
          setProjectInfo("2020.10 ~ 2021.06 (9개월) / BE, FE");
          setProjectSkill(["Java", "Spring", "JS", "Github"]);
          setEndNum(1);
          setPhotoUrl("stx-main");
          setContent(
            <>
              인사 시스템과 <br></br>업무 포탈 시스템을 담당 하였습니다.
              <br></br>
              <br></br>
              계약직 근로자의 <br></br>복무, 교육, 급여, 당직<br></br>, 총무,
              기타 등등을 관리하는 시스템으로<br></br>특정 권한으로 들어갈 수
              있는<br></br>관리자 페이지에서 따로 관리를 할 수 있습니다.
              <br></br>
              <br></br>사용 중 데이터가 잘못되거나<br></br>시스템 상 오류가
              생기면<br></br>
              로그를 보고 이슈를 해결하는<br></br>업무를 주로 하였습니다.
              <br></br>
              <br></br>
              업무포탈은 spring / jsp 기반이며 <br></br>ajax 이용하여 api 연동
              하였고<br></br>
              형상관리는 git 을 이용하였습니다.
            </>
          );
          break;
        case 14: //위젯누리
          setProjectCate("COMPANY");
          setProjectTitle("위젯누리");
          setProjectSubTitle("자사 솔루션 프로그램");
          setProjectInfo("2020.06 ~ 2020.09 (4개월) / FE");
          setProjectSkill(["ExtJs", "ChartJs"]);
          setEndNum(7);
          setPhotoUrl("wn-main");
          setContent(
            <>
              ExtJs 이용하여 <br></br>데스크탑 디자인 기반의<br></br>
              자사 솔루션 <br></br>( 화이트리스트, 장비관리시스템 등 )<br></br>
              디자인, 퍼블, 프론트 부분 담당하였고<br></br>
              <br></br>대시보드는 chart라이브러리 이용하였습니다.
            </>
          );
          break;
        case 21: //포폴메이킹
          setProjectCate("SIDE");
          setProjectTitle("Portfolio 메이킹");
          setProjectSubTitle("프론트앤드 Portfolio");
          setProjectInfo("제작 기간 (6개월)");
          setProjectSkill([
            "React",
            "ReduxToolkit",
            "JavaScript",
            "ThreeJs",
            "Html",
            "Css",
            "github",
            "GoogleAnalytics",
          ]);
          setEndNum(7);
          setPhotoUrl("pofol-main");
          setContent(
            <>
              새로운 디자인트랜드로 그라디언트가 각광받아<br></br>
              포트폴리오 컨셉을 그라디언트로 잡았고, <br></br>고급스러운
              분위기의 진한녹색과, <br></br>메인 문구처럼 나의 개화를 계획하며
              <br></br>꽃 = 마스코트 느낌으로 작업했다!
              <br></br>메포폴 작업 과정 및 기술설명
            </>
          );
          break;

        default:
          break;
      }
      document.querySelector(".modal-view").style.display = "block";
    }
  };

  return (
    <div className="project">
      <div className="modal-view">
        <div className="modal-view-card">
          {/* 모달 */}
          <div
            style={{ width: "100%", height: "1.5vh", display: "inline-block" }}
          >
            <div className="modal-view-card-title">
              <canvas className="mini-canvas-pro" id="mini-canvas3"></canvas>
              <span style={{ color: "ivory", fontSize: 13 }}>
                {projectCate}{" "}
              </span>
              PROJECT&nbsp;
              <canvas className="mini-canvas-pro" id="mini-canvas4"></canvas>
            </div>
            <button
              className="x-btn"
              onClick={() => {
                document.querySelector(".modal-view-card-cont").scrollTop = 0;
                document.querySelector(".modal-view").style.display = "none";
                setCurrentNum(1);
              }}
            >
              close
            </button>
          </div>
          <hr
            style={{
              display: "block",
              border: "1px solid rgba(14, 101, 72, 0.4)",
            }}
          ></hr>
          <div className="modal-view-card-cont">
            <span className="edu-title">◆</span>
            &nbsp;&nbsp;{projectTitle}&nbsp;&nbsp;
            <span style={{ color: "#1e7c60", fontWeight: 400, fontSize: 13 }}>
              &nbsp; [&nbsp;
            </span>
            <span style={{ color: "snow", fontSize: 13 }}>
              {projectSubTitle}
            </span>
            <span style={{ color: "#1e7c60", fontWeight: 400, fontSize: 13 }}>
              &nbsp; ]
            </span>
            <br></br>
            <br></br>
            <span style={{ color: "#a2a7a5", fontSize: "0.8em" }}>
              {projectInfo}
            </span>
            <br></br>
            <div className="modal-view-card-cont-skill">
              <span style={{ color: "#1e7c60", fontWeight: 400, fontSize: 13 }}>
                &nbsp;[&nbsp;
              </span>
              <span>
                {projectSkill.map((item, idx) => {
                  if (idx + 1 === projectSkill.length) {
                    return <>{item}</>;
                  } else if (idx + 1 === 5 || idx + 1 === 10) {
                    return (
                      <>
                        {item}
                        <span
                          key={"skill" + idx}
                          style={{
                            color: "#1e7c60",
                            fontWeight: 400,
                            fontSize: 13,
                          }}
                        >
                          &nbsp;&nbsp;/&nbsp;&nbsp;
                        </span>
                        <br></br>
                      </>
                    );
                  } else {
                    return (
                      <>
                        {item}
                        <span
                          key={"skill" + idx}
                          style={{
                            color: "#1e7c60",
                            fontWeight: 400,
                            fontSize: 13,
                          }}
                        >
                          &nbsp;&nbsp;/&nbsp;&nbsp;
                        </span>
                      </>
                    );
                  }
                })}
              </span>
              <span style={{ color: "#1e7c60", fontWeight: 400, fontSize: 13 }}>
                &nbsp;]
              </span>
            </div>
            <br></br>
            <img
              className="modal-view-card-cont-img"
              src={require("../common/project/" +
                photoUrl +
                currentNum +
                ".png")}
              draggable="false"
              alt={{ projectTitle } + "photo" + { currentNum }}
            />
            <div
              style={{
                width: "100%",
                height: "1.5vh",
                display: "inline-block",
              }}
            >
              <button
                className="imgBtn"
                onClick={() => {
                  if (currentNum > 1) setCurrentNum(() => currentNum - 1);
                  else if (currentNum === 1) {
                    setCurrentNum(endNum);
                  }
                }}
              >
                {"<"}
              </button>
              &nbsp;
              <span style={{ position: "relative", top: "-1vh", fontSize: 15 }}>
                &nbsp;{currentNum} / {endNum}&nbsp;
              </span>
              &nbsp;
              <button
                className="imgBtn"
                onClick={() => {
                  if (currentNum < endNum) setCurrentNum(() => currentNum + 1);
                  else if (currentNum === endNum) {
                    setCurrentNum(1);
                  }
                }}
              >
                {">"}
              </button>
            </div>
            <br></br>
            <div
              style={{
                width: "60%",
                paddingLeft: "20%",
                paddingTop: "2%",
                paddingBottom: "2%",
              }}
            >
              {content}
            </div>
            <br></br>
          </div>
        </div>
      </div>
      {/* 여까지 모달*/}

      <div className="project-contents">
        <div className="project-contents-COMPANY">
          <div style={{ position: "absolute" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMPANY
            <canvas className="mini-canvas-pro" id="mini-canvas"></canvas>
          </div>
          <div className="wrapper">
            <i id="left1" className="i1 opa5">
              <img
                className="angle-bracket"
                src={require("../common/card/lc.png")}
                alt="l-angle-bracket"
              />
            </i>
            <div
              className="alim-move-pro"
              style={{ display: tf ? "" : "none" }}
            >
              <img
                className="alim-move-pro"
                src={require("../common/image/pointer.png")}
                alt="pointer_img"
              />
            </div>
            <ul className="carousel">
              <li
                className="card-pro"
                style={{
                  marginLeft: "16px",
                }}
                onClick={(e) => {
                  cardClick(e, 11);
                }}
              >
                <div className="img">
                  <img
                    src={require("../common/project/cuckoo-main1.png")}
                    draggable="false"
                    alt="1"
                  />
                </div>
                <h3>쿠쿠</h3>
                <span>
                  <span style={{ color: "#1e7c60", fontWeight: 600 }}>[ </span>
                  <span
                    className="f15"
                    style={{ color: "ivory", fontWeight: 500 }}
                  >
                    <span className="f15" style={{ display: "inline-block" }}>
                      <div className="text-btn">role</div>&nbsp;&nbsp;
                    </span>
                    FE
                  </span>
                  <span style={{ color: "#1e7c60", fontWeight: 600 }}> ]</span>
                </span>
                <span>2021.05 ~ 2023.07 (3개월)</span>
              </li>
              <li
                className="card-pro"
                onClick={(e) => {
                  cardClick(e, 12);
                }}
              >
                <div className="img">
                  <img
                    src={require("../common/project/kurly-main1.png")}
                    draggable="false"
                    alt="2"
                  />
                </div>
                <h3>마켓컬리</h3>
                <span>
                  <span style={{ color: "#1e7c60", fontWeight: 600 }}>[ </span>
                  <span
                    className="f15"
                    style={{ color: "ivory", fontWeight: 500 }}
                  >
                    <span className="f15" style={{ display: "inline-block" }}>
                      <div className="text-btn">role</div>&nbsp;&nbsp;
                    </span>
                    BE, FE
                  </span>
                  <span style={{ color: "#1e7c60", fontWeight: 600 }}> ]</span>
                </span>
                <span>2021.07 ~ 2023.06 (23개월)</span>
              </li>
              <li
                className="card-pro"
                onClick={(e) => {
                  cardClick(e, 13);
                }}
              >
                <div className="img">
                  <img
                    src={require("../common/project/stx-main1.png")}
                    draggable="false"
                    alt="stx-img"
                  />
                </div>
                <h3>STX</h3>
                <span>
                  <span style={{ color: "#1e7c60", fontWeight: 600 }}>[ </span>
                  <span
                    className="f15"
                    style={{ color: "ivory", fontWeight: 500 }}
                  >
                    <span className="f15" style={{ display: "inline-block" }}>
                      <div className="text-btn">role</div>&nbsp;&nbsp;
                    </span>
                    BE, FE
                  </span>
                  <span style={{ color: "#1e7c60", fontWeight: 600 }}> ]</span>
                </span>
                <span>2020.10 ~ 2021.06 (9개월)</span>
              </li>
              <li
                className="card-pro"
                onClick={(e) => {
                  cardClick(e, 14);
                }}
              >
                <div className="img">
                  <img
                    src={require("../common/project/wn-main6.png")}
                    draggable="false"
                    alt="5"
                  />
                </div>
                <h3>위젯누리</h3>
                <span>
                  <span style={{ color: "#1e7c60", fontWeight: 600 }}>[ </span>
                  <span
                    className="f15"
                    style={{ color: "ivory", fontWeight: 500 }}
                  >
                    <span className="f15" style={{ display: "inline-block" }}>
                      <div className="text-btn">role</div>&nbsp;&nbsp;
                    </span>
                    FE
                  </span>
                  <span style={{ color: "#1e7c60", fontWeight: 600 }}> ]</span>
                </span>
                <span>2020.06 ~ 2020.09 (4개월)</span>
              </li>
            </ul>
            <i id="right1" className="i1">
              <img
                className="angle-bracket"
                src={require("../common/card/rc.png")}
                draggable="false"
                alt="r-angle-bracket"
              />
            </i>
          </div>
        </div>
        <div className="project-contents-SIDE">
          <div style={{ position: "absolute" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SIDE
            <canvas className="mini-canvas-pro" id="mini-canvas2"></canvas>
          </div>
          <div className="wrapper">
            <i id="left2" className="i2 opa5">
              <img
                className="angle-bracket2"
                src={require("../common/card/lc.png")}
                draggable="false"
                alt="l-angle-bracket"
              />
            </i>
            <ul className="carousel2">
              <li
                className="card-pro"
                onClick={(e) => {
                  cardClick(e, 21);
                }}
                style={{
                  marginLeft: "16px",
                }}
              >
                <div className="img">
                  <img
                    src={require("../common/project/pofol-main1.png")}
                    draggable="false"
                    alt="1"
                  />
                </div>
                <h3>Portfolio 메이킹</h3>
                {/* <span>깃에도 정리(three컴포넌트 등)</span>
                <span>구글애널리틱스/구글태그 표현</span> */}
                <span>
                  <span style={{ color: "#1e7c60", fontWeight: 600 }}>[ </span>
                  <span
                    className="f15"
                    style={{ color: "ivory", fontWeight: 500 }}
                  >
                    <span className="f15" style={{ display: "inline-block" }}>
                      <div className="text-btn">role</div>&nbsp;&nbsp;
                    </span>
                    All
                  </span>
                  <span style={{ color: "#1e7c60", fontWeight: 600 }}> ]</span>
                </span>
                <span>제작 기간 (총 6개월)</span>
              </li>
              <li
                className="card-pro"
                onClick={(e) => {
                  cardClick(e, 22);
                }}
              >
                <div className="img">
                  <img
                    src={require("../common/card/2.jpg")}
                    draggable="false"
                    alt="2"
                  />
                </div>
                <h3>ot</h3>
                <span>123123</span>
                <span>123123</span>
              </li>
              <li
                className="card-pro"
                onClick={(e) => {
                  cardClick(e, 23);
                }}
              >
                <div className="img">
                  <img
                    src={require("../common/card/3.jpg")}
                    draggable="false"
                    alt="3"
                  />
                </div>
                <h3>위시켓</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
              <li
                className="card-pro"
                onClick={(e) => {
                  cardClick(e, 24);
                }}
              >
                <div className="img">
                  <img
                    src={require("../common/card/4.jpg")}
                    draggable="false"
                    alt="4"
                  />
                </div>
                <h3>알파카</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
              <li
                className="card-pro"
                onClick={(e) => {
                  cardClick(e, 25);
                }}
              >
                <div className="img">
                  <img
                    src={require("../common/card/5.jpg")}
                    draggable="false"
                    alt="5"
                  />
                </div>
                <h3>5번사진</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
              <li
                className="card-pro"
                onClick={(e) => {
                  cardClick(e, 26);
                }}
              >
                <div className="img">
                  <img
                    src={require("../common/card/6.jpg")}
                    draggable="false"
                    alt="6"
                  />
                </div>
                <h3>6번사진</h3>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
                <span>ㅁㄴㅇㅁㄴㅇ</span>
              </li>
            </ul>
            <i id="right2" className="i2">
              <img
                className="angle-bracket2"
                src={require("../common/card/rc.png")}
                alt="r-angle-bracket"
              />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
