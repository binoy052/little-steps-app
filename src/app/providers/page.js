import Link from 'next/link';
import { CalendarCheck, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import styles from './page.module.css';

export default function ProvidersPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Partner with <span className="gradient-text">Little Steps</span>
        </h1>
        <p className={styles.subtitle}>
          Join our network of verified childcare providers. Manage your capacity, set your own pricing plans, and connect with parents looking for trusted care 24/7.
        </p>
        <Link href="/register?role=provider" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          Apply to Become a Provider
        </Link>
      </section>

      <section className={styles.benefitsGrid}>
        <div className={`card ${styles.benefitCard}`}>
          <div className={styles.iconWrapper}><TrendingUp size={32} /></div>
          <h3>Increase Utilization</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Fill empty slots easily by making your real-time availability visible to thousands of local parents.</p>
        </div>
        
        <div className={`card ${styles.benefitCard}`}>
          <div className={styles.iconWrapper}><CalendarCheck size={32} /></div>
          <h3>Flexible Scheduling</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Offer hourly drop-ins, night shifts, or monthly subscriptions. You control your capacity and timings.</p>
        </div>

        <div className={`card ${styles.benefitCard}`}>
          <div className={styles.iconWrapper}><Users size={32} /></div>
          <h3>Manage Staff</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Easily add and verify your caregivers so parents know exactly who is watching their children.</p>
        </div>

        <div className={`card ${styles.benefitCard}`}>
          <div className={styles.iconWrapper}><ShieldCheck size={32} /></div>
          <h3>Build Trust</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Our verified provider badge gives parents peace of mind, increasing your booking conversion rates.</p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Digitize Your Daycare?</h2>
        <p className={styles.ctaText}>
          Streamline your operations, reduce administrative overhead, and focus on what matters most — providing excellent childcare.
        </p>
        <Link href="/register?role=provider" className={styles.ctaButton}>
          Start Your Application
        </Link>
      </section>
    </div>
  );
}
