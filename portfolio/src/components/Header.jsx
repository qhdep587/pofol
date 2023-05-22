/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Header = () => {
  useEffect(() => {
    fetchData()
  }, [])

  const [temp, setTemp] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  const fetchData = async () => {
    try {
      const res = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=40041c8ff66919f9b9684fe448e0e407&units=metric'
      )
      // API 호출 성공 시 처리할 로직
      setTemp(res.data.main.temp.toFixed(1))
      console.log('날씨 : ' + res.data.weather[0].main)
      console.log('상세날씨설명 : ' + res.data.weather[0].description)
      console.log('날씨 이미지 : ' + res.data.weather[0].icon)
      console.log('바람   : ' + res.data.wind.speed)
      console.log('나라   : ' + res.data.sys.country)
      console.log('도시이름  : ' + res.data.name)
      console.log('구름  : ' + res.data.clouds.all + '%')

      setImgUrl('http://openweathermap.org/img/w/' + res.data.weather[0].icon + '.png')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="MainCompItem header">
      <div className="header-item">
        <div className="header-item1">{temp}°C</div>
        <text className="header-item2">|</text>
        <img className="header-item3" src={imgUrl} />
      </div>
    </div>
  )
}

export default Header
