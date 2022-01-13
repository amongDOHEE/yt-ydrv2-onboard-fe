import { Route, Routes, Navigate} from 'react-router';
import './App.css';

//pages
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="main"/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>  
  );
}

export default App;
