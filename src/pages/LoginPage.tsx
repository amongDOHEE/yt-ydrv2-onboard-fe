import LogoutButton from "../components/LogoutButton";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <div className="loginPage">
      <p className="login-text">로그인에 성공하였습니다.</p>
      <LogoutButton/>
    </div>
  );
};

export default LoginPage;