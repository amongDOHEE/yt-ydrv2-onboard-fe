import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router';
import { onGoogleLogin } from '../api/authLogic';

const clientId = process.env.REACT_APP_KEY;

const LoginButton: React.FC = () : JSX.Element => {
  const navigate = useNavigate();

  const onSuccess = async(response : any) => {
    const { profileObj : { email }, accessToken } = response;
    if(await onGoogleLogin (email, accessToken)) {
      navigate("/login", { replace: true });
    }
    else {
      console.error("login fail: wrong token.")
    }
  }
  
  const onFailure = (error : Error) => {
    console.log(error);
  }

  return(
    <div>
      <GoogleLogin
      clientId={clientId}
      responseType={"id_token"}
      onSuccess={onSuccess}
      onFailure={onFailure}
      />
    </div>
  );
};

export default LoginButton;