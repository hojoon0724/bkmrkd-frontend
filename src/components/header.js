import Logo from './icons/logo';
import Hello from './header/hello';
import LogoutBtn from './header/logoutBtn';

function Header({ onButtonClick }) {
  return (
    <div className="header">
      <ul className="nav__menu">
        <div className="header-container">
          <div className="header-top-section">
            <Logo />
          </div>
          <div className="header-bottom-section">
            <Hello />
            <LogoutBtn />
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Header;
