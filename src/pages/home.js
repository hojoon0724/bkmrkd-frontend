import Auth from '../components/auth';
import Logo from '../components/icons/logo';

function Home() {
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="logo-box">
          <Logo />
        </div>
        <div className="auth-box">
          <Auth />
        </div>
      </div>
    </div>
  );
}

export default Home;
