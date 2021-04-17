import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href='#'>
          <a>Socially</a>
        </Link>
        <ul>
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
            <Link href='!#'>
              <a>Logout</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
