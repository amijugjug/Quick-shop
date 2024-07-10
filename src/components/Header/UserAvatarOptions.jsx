import Dropdown from '../atoms/Dropdown';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../../services/user.service';

import UserAvatar from '../../static/assets/user-avatar.svg';
import { logout } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';

const UserAvatarOptions = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    })();
  }, []);

  const onSelect = (option) => {
    if (option.value === 'Logout') {
      logout(navigate);
    }
  };

  const options = [{ label: 'Logout', value: 'Logout' }];

  return (
    <Dropdown
      options={options}
      onSelect={onSelect}
      placeholder="User"
      placeholderImage={UserAvatar}
    />
  );
};

export default UserAvatarOptions;
