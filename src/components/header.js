import Logo from './icons/logo';
import MobileAddNew from './header/mobileAddnew';
import NewEntryBtn from './header/newEntryBtn';
import Hello from './header/hello';
import LogoutBtn from './header/logoutBtn';

function Header({ onButtonClick }) {
  return (
    <div className="header">
      <MobileAddNew action={onButtonClick} />
      <ul className="nav__menu">
        <div className="header-container">
          <div className="header-top-section">
            <Logo />

            <NewEntryBtn action={onButtonClick} />
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
