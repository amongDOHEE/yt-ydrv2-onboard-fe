import {useNavigate} from 'react-router-dom';

const LogoutButton: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const clickLogout = () => {
    localStorage.clear();
    navigate('/main', {replace: true});
  };

  return (
    <div className="loginButton">
      <button className="logout-button" onClick={clickLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
