import React from 'react'
import TypeIt from 'typeit-react'

const Home = () => {
  return (
    <div className="home">
      <div className="home-item1">
        <div className="home-app">
          <TypeIt
            style={{
              color: 'ivory',
              fontSize: '18px',
              paddingTop: '5px',
              height: '100%',
            }}
            options={{ startDelay: 900, speed: 100 }}
            getBeforeInit={instance => {
              instance
                .type("Hello, I'm danny.")
                .pause(50)
                .delete(7)
                .pause(500)
                .type(' 대윤', { delay: 190 })
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
                .type(' <text class="text-bold">프론트엔드</text>&nbsp;&nbsp;')
                .pause(300)
                .move(7)
                .type('<text class="text-bold">dbs</text>', { delay: 190 })
                .delete(3, { delay: 200 })
                .type('<text class="text-bold">윤</text>입니다.', { delay: 100 })

              return instance
            }}
          ></TypeIt>
        </div>
      </div>
      <div className="home-item2">home2</div>
      <div className="home-item3">© 2023 DaeYun Lee. All Rights Reserved.</div>
    </div>
  )
}

export default Home
