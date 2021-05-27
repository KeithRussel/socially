import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Link from 'next/link';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const router = useRouter();

  useEffect(() => {
    if (userInfo) {
      router.push('/profile');
      console.log('userinfo enable');
    }
    console.log(userInfo);
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    console.log('Button Clicked');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginBgImage}>
        <div className={styles.bgBlack}></div>
        <Link href='#'>Socially</Link>
        <h2>Get to know with others.</h2>
      </div>

      <div className={styles.fb40}>
        <form onSubmit={submitHandler}>
          <h2>Login to Socially</h2>
          <div className='d-grid'>
            <input
              className={styles.loginInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Enter Email'
              name='email'
              required
            />

            <input
              className={styles.loginInput}
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name='psw'
              required
            />

            <button type='submit'>Submit</button>
          </div>

          <div>
            <span>
              Forgot <a href='#'>password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${serverDev}/login`);
//   const userLogin = await res.json();

//   return {
//     props: {
//       userLogin,
//     },
//   };
// };

export default Login;
