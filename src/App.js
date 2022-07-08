import { useCallback, useState, useEffect } from 'react';
import styles from './App.module.css';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import Header from './components/search_header/search_header'

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  const search = useCallback(query => {
    setSelectedVideo(null);
     youtube
     .search(query)
     .then(videos => 
      setVideos(videos)
    );
  },[]);

  useEffect(()=> {
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  },[youtube]);
  
  return (
    <div className={styles.app}>
      <Header onSearch={search}/>
      <section className={styles.content}>
        { selectedVideo && (
        <div className={styles.detail}>
        <VideoDetail video={selectedVideo} />
        </div>
         )}
        <div className={styles.list}>
        <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo ? 'list' : 'grid' }/>
        </div>
      </section>
    </div>
  );
}

export default App;
