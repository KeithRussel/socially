import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/profileActions';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userDetails = useSelector((state) => state.userDetails);
  const {
    loading,
    error,
    userProfile: {
      user: { firstName, lastName },
      bio,
      location,
    },
  } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    } else {
      dispatch(getUserProfile());
    }
  }, [dispatch, userInfo]);
  return (
    <>
      <Layout title='Profile' />
      <h1>My Profile</h1>
      <div>
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>Bio: {bio}</p>
        <p>location: {location}</p>
      </div>
    </>
  );
};

export default Profile;
