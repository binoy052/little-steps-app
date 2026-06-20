import Link from 'next/link';
import { MapPin } from 'lucide-react';
import styles from './page.module.css';

// Mock data for initial frontend implementation
const mockCenters = [
  {
    id: 1,
    name: "Sunshine Kids 24/7 Daycare",
    location: "Downtown, Metro City",
    is24x7: true,
    price: "$15/hr",
    features: ["Infants", "Toddlers", "CCTV"],
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Happy Hearts Crèche",
    location: "Westside, Metro City",
    is24x7: false,
    price: "$40/day",
    features: ["Toddlers", "Preschool", "Meals Included"],
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Night Owls Childcare",
    location: "North Hills, Metro City",
    is24x7: true,
    price: "$20/hr",
    features: ["All Ages", "Night Shifts", "Emergency"],
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&w=500&q=80"
  }
];

export default function SearchPage() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <input type="text" placeholder="Search by location..." className={styles.searchInput} />
        
        <div className={styles.filterGroup}>
          <h3 className={styles.filterTitle}>Availability</h3>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" defaultChecked /> 24x7 Open
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" /> Night Shift Support
          </label>
        </div>

        <div className={styles.filterGroup}>
          <h3 className={styles.filterTitle}>Age Group</h3>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" /> Infants (0-2 yrs)
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" /> Toddlers (2-4 yrs)
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" /> Preschool (4-6 yrs)
          </label>
        </div>

        <div className={styles.filterGroup}>
          <h3 className={styles.filterTitle}>Pricing Plan</h3>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" /> Hourly
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" /> Daily
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" /> Monthly
          </label>
        </div>
        
        <button className="btn-primary" style={{width: '100%'}}>Apply Filters</button>
      </aside>

      <main className={styles.mainContent}>
        <h2 style={{ marginBottom: '2rem' }}>{mockCenters.length} Centers Found</h2>
        <div className={styles.grid}>
          {mockCenters.map(center => (
            <Link href={`/center/${center.id}`} key={center.id} className={styles.centerCard}>
              <div className={styles.cardImage} style={{ backgroundImage: `url(${center.image})` }}>
                {center.is24x7 && <span className={styles.badge}>24x7 Open</span>}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.centerName}>{center.name}</h3>
                <div className={styles.centerLocation}>
                  <MapPin size={16} /> {center.location}
                </div>
                <div className={styles.features}>
                  {center.features.map(f => (
                    <span key={f} className={styles.featureTag}>{f}</span>
                  ))}
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>{center.price}</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '0.875rem' }}>View Details &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
