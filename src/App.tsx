import { Route, Routes, Navigate } from 'react-router';
import './App.css';

//pages
import MainPage from './pages/MainPage';
import ChannelPage from './pages/ChannelPage';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="main" />} />
        <Route path="/channel" element={<ChannelPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
