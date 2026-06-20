import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>About <span className="gradient-text">Little Steps</span></h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Bridging the gap between working parents and reliable 24x7 childcare.
        </p>
      </div>

      <div className={styles.content}>
        <p>
          With increasing numbers of working parents, shift-based jobs, single-parent households, and nuclear families, there is a growing need for safe, reliable, and flexible childcare solutions available round-the-clock. 
        </p>
        <p>
          Parents often struggle to find trustworthy crèches or daycare centers that offer transparent availability, verified caregivers, and flexible plans.
        </p>
        <p>
          <span className={styles.highlight}>Little Steps</span> aims to bridge this gap by providing a centralized digital platform that connects parents with verified childcare centers and caregivers offering 24×7 daycare, crèche, and babysitting services.
        </p>
        <p>
          Our mission is to reduce the stress of working parents by providing a digitized and transparent childcare ecosystem where safety, flexibility, and reliability come first.
        </p>
      </div>
    </div>
  );
}
