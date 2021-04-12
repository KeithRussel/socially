import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginBgImage}>
        <div className={styles.bgBlack}></div>
        <Link href='#'>Socially</Link>
        <h2>Get to know with others.</h2>
      </div>
      <form>
        <div>
          <label for='uname'>
            <b>Username</b>
          </label>
          <input
            type='text'
            placeholder='Enter Username'
            name='uname'
            required
          />

          <label for='psw'>
            <b>Password</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='psw'
            required
          />

          <button type='submit'>Login</button>
        </div>

        <div>
          <button type='button'>Cancel</button>
          <span>
            Forgot <a href='#'>password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}
