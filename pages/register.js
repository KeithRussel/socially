import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Link from 'next/link';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const router = useRouter();

  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password did not match');
    } else {
      dispatch(register(firstName, lastName, email, password));
    }
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
          <h2>Register to Socially</h2>
          <div className='d-grid'>
            <input
              className={styles.loginInput}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              placeholder='Enter Firstname'
              name='firstName'
              required
            />
            <input
              className={styles.loginInput}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              placeholder='Enter Lastname'
              name='lastName'
              required
            />
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
            <input
              className={styles.loginInput}
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name='psw'
              required
            />

            <button type='submit'>Submit</button>
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

export default Register;
