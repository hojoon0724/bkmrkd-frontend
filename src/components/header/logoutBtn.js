import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../../actions';

function LogoutBtn() {
  const navigate = useNavigate();
  async function handleLogout() {
    await logoutAction({});
    navigate('/');
  }

  return (
    <div>
      <li className="logout-button" onClick={handleLogout}>
        Logout{' '}
      </li>
    </div>
  );
}

export default LogoutBtn;
