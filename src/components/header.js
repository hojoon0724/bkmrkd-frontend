import Logo from './icons/logo'
import MobileAddNew from './header/mobileAddnew'
import NewEntryBtn from './header/newEntryBtn'
import Hello from './header/hello'
import LogoutBtn from './header/logoutBtn'

function Header() {
  return (
    <div className="header">
      <MobileAddNew />
      <ul className="nav__menu">
        <div class="header-container">
          <div class="header-top-section">
            <Logo />
            <NewEntryBtn />
          </div>
          <div className="header-bottom-section">
            <Hello />
            <LogoutBtn />
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Header
