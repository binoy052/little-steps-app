"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../login/page.module.css';

export default function RegisterPage() {
  const [role, setRole] = useState('parent');

  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <h1 className={styles.title}>Create an Account</h1>
        <p className={styles.subtitle}>Join Little Steps today</p>
        
        <div className={styles.roleSelector}>
          <div 
            className={`${styles.roleOption} ${role === 'parent' ? styles.active : ''}`}
            onClick={() => setRole('parent')}
          >
            I'm a Parent
          </div>
          <div 
            className={`${styles.roleOption} ${role === 'provider' ? styles.active : ''}`}
            onClick={() => setRole('provider')}
          >
            I'm a Provider
          </div>
        </div>

        <form>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Full Name</label>
            <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email Address</label>
            <input type="email" id="email" className={styles.input} placeholder="you@example.com" required />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.input} placeholder="••••••••" required />
          </div>
          
          <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Sign Up</button>
        </form>
        
        <div className={styles.switchAuth}>
          Already have an account? <Link href="/login" className={styles.switchLink}>Log In</Link>
        </div>
      </div>
    </div>
  );
}
