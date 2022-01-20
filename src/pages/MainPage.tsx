import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {CheckToken} from '../api/auth';
import LoginButton from '../components/LoginButton';

const MainPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [isvalid, setValid] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('auth_token');

    if (accessToken !== null) {
      (async () => {
        setValid(await CheckToken(accessToken));
      })();
    }
  }, []);

  useEffect(() => {
    if (isvalid) {
      setValid(false);
      navigate('/channel', {replace: true});
    }
  }, [isvalid]);

  return (
    <div className="loginPage">
      <img
        className="logo-image"
        alt="sandbox-logo"
        src="https://platum.kr/wp-content/uploads/2018/09/aaa.png"
      />
      <LoginButton />
    </div>
  );
};

export default MainPage;
