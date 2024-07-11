import { useEffect, useState } from 'react';
import UserDashboard from '../../components/UserDashboard';
import { useParams } from 'react-router-dom';
import { checkValidUser } from '../../services/auth.service';

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [falseUser, setFalseUser] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    const user = checkValidUser(username);
    if (user) {
      setCurrentUser(user);
    } else {
      setFalseUser(true);
    }
  }, []);
  const orders = [
    'Order 1: Item A, Item B',
    'Order 2: Item C, Item D',
    'Order 3: Item E, Item F',
    // Add more orders as needed
  ];
  return falseUser ? (
    <></>
  ) : (
    <UserDashboard user={currentUser} orders={orders} />
  );
};

export default ProfilePage;

// username-> encryptedusername -> use as token and unique identifier.
