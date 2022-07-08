import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Youtube from './service/youtube';

const httpClient = axios.create({
  baseURL : 'https://www.googleapis.com/youtube/v3/',
  parmas : {key : process.env.REACT_APP_YOUTUBE_API_KEY},
});
const youtubeInjection = new Youtube(httpClient);
// 유닛 테스트시에는 네트워크 통신을 하는 객체가 아닌
// 정해진 데이터를 리턴하는 객체를 만들어 주입해주면 된다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtubeInjection}/>
  </React.StrictMode>
);