import Link from 'next/link';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Log in to your Little Steps account</p>
        
        <form>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input type="email" id="email" className={styles.input} placeholder="you@example.com" required />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.input} placeholder="••••••••" required />
          </div>
          
          <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Log In</button>
        </form>
        
        <div className={styles.switchAuth}>
          Don't have an account? <Link href="/register" className={styles.switchLink}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
