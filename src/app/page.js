import Link from 'next/link';
import { Search, ShieldCheck, Clock, MapPin } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Trusted <span className="gradient-text">24x7 Childcare</span> Whenever You Need It.
          </h1>
          <p className={styles.subtitle}>
            Connect with verified daycare centers, crèches, and caregivers offering flexible hourly, daily, and monthly plans. Safety and peace of mind, round the clock.
          </p>
          <div className={styles.actions}>
            <Link href="/search" className="btn-primary">Find a Center</Link>
            <Link href="/providers" className="btn-secondary">I'm a Provider</Link>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.blob}></div>
          <div className={styles.glassCard}>
            <Clock size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3>Flexible & 24/7</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Whether you work night shifts or need emergency sitting, our verified centers are always open.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose Little Steps?</h2>
        <div className={styles.featuresGrid}>
          <div className={`card ${styles.featureCard}`}>
            <div className={styles.featureIcon}><ShieldCheck size={32} /></div>
            <h3>Verified Caregivers</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Every center and caregiver undergoes strict background checks and verification.</p>
          </div>
          <div className={`card ${styles.featureCard}`}>
            <div className={styles.featureIcon}><MapPin size={32} /></div>
            <h3>Nearby Centers</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Find trusted facilities right in your neighborhood with real-time availability.</p>
          </div>
          <div className={`card ${styles.featureCard}`}>
            <div className={styles.featureIcon}><Search size={32} /></div>
            <h3>Transparent Pricing</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Compare hourly, daily, or monthly plans easily before you book a slot.</p>
          </div>
        </div>
      </section>
    </>
  );
}
