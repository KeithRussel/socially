import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import styles from '../styles/styleComponents/Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
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
          <li>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </li>
          <li>
            <a onClick={logoutHandler}>Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
