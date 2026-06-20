import Link from 'next/link';
import { Baby } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Baby size={28} />
        <span className="gradient-text">Little Steps</span>
      </Link>
      <div className={styles.navLinks}>
        <Link href="/search" className={styles.navLink}>Find Care</Link>
        <Link href="/providers" className={styles.navLink}>For Providers</Link>
        <Link href="/about" className={styles.navLink}>About Us</Link>
      </div>
      <div className={styles.actions}>
        <Link href="/login" className="btn-secondary">Log In</Link>
        <Link href="/register" className="btn-primary">Sign Up</Link>
      </div>
    </nav>
  );
}
