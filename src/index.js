import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Youtube from './components/service/youtube';

const youtubeInjection = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
// 유닛 테스트시에는 네트워크 통신을 하는 객체가 아닌
// 정해진 데이터를 리턴하는 객체를 만들어 주입해주면 된다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtubeInjection}/>
  </React.StrictMode>
);