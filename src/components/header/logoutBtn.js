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
      <div className="logout-button" onClick={handleLogout}>
        Logout{' '}
      </div>
    </div>
  );
}

export default LogoutBtn;
