import { useEffect, useState } from 'react';
import UserDashboard from '../../components/UserDashboard';
import { useParams } from 'react-router-dom';
import { checkValidUser } from '../../services/auth.service';

const ProfilePage = () => {
  const [falseUser, setFalseUser] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    const user = checkValidUser(username);
    if (!user) {
      setFalseUser(true);
    }
  }, []);
  return falseUser ? (
    <>
      <h1>You are not authorized to view this profile</h1>
    </>
  ) : (
    <UserDashboard />
  );
};

export default ProfilePage;
