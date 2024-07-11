
import { useNavigate } from 'react-router-dom';

import { useToast } from '../../context/Toast.context';
import { logout, verifySession } from '../../services/auth.service';
import { getCookie } from '../../services/helpers/storageHelpers/cookie.helper';
import UserAvatar from '../../static/assets/user-avatar.svg';
import Dropdown from '../atoms/Dropdown';

const UserAvatarOptions = () => {
  const navigate = useNavigate();
  const { notify } = useToast();

  const onSelect = (option) => {
    if (option.value === 'Logout') {
      logout(navigate);
      notify('success', 'You have been logged out');
    }
    if (option.value === 'Dashboard') {
      const username = getCookie('token');
      navigate(`/profile/${username}`);
    }
  };

  const options = [
    { label: 'Dashboard', value: 'Dashboard' },
    { label: 'Logout', value: 'Logout' },
  ];
  return (
    <Dropdown
      options={options}
      onSelect={onSelect}
      placeholder="User"
      placeholderImage={UserAvatar}
      onDropDownClick={verifySession}
    />
  );
};

export default UserAvatarOptions;
