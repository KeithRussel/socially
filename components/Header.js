import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import { logout } from '../actions/userActions';
import { useRouter } from 'next/router';
import styles from '../styles/styleComponents/Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    router.push('/');
    console.log('Logout Clicked');
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     router.push('/');
  //     console.log('userinfo enable');
  //   }
  //   console.log(userInfo);
  // }, [userInfo]);
  return (
    <header className={styles.header}>
      <nav className={`${styles.mainNav} container`}>
        <Link href='#'>
          <a>Socially</a>
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          {userInfo ? (
            <>
              {' '}
              <li>
                <Link href='/profile'>
                  <a>{userInfo.firstName}</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a onClick={logoutHandler}>Logout</a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href='/login'>
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href='/register'>
                  <a>Register</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
