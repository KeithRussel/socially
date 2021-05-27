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
    userProfile: { firstName },
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
      <div>My Profile</div>
      {firstName}
      <h2></h2>
    </>
  );
};

export default Profile;
