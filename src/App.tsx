import { Route, Routes, Navigate} from 'react-router';
import './App.css';

//pages
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ChannelPage from './pages/ChannelPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="main"/>}/>
        <Route path="/channel" element={<ChannelPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>  
  );
}

export default App;
