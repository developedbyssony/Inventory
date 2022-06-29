import { useState, useEffect } from 'react';
import './App.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBS2YZE8ZLJd6Oo18NKJS3Am_QwV7EYy8s", 
          requestOptions
      ).then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]); // 컴포넌트가 마운트될 때 1회 콜백 호출

  useEffect(()=> {
    console.log('setVideos');
  },[videos]); // video가 바뀔때마다 콜백 호출

  return (
    <>
        <VideoList videos={videos} />
    </>
  );
}

export default App;
