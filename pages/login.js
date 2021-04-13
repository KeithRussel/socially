import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Login.module.css';

function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginBgImage}>
        <div className={styles.bgBlack}></div>
        <Link href='#'>Socially</Link>
        <h2>Get to know with others.</h2>
      </div>

      <div className='m-auto'>
        <form>
          <h2>Login to Socially</h2>
          <div className='d-grid'>
            <input
              className={styles.loginInput}
              type='text'
              placeholder='Enter Username'
              name='uname'
              required
            />

            <input
              className={styles.loginInput}
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
            />

            <input type='submit' value='Submit' />
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

export default Login;
