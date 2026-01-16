import { RepelEffect } from '../RepelEffect/RepelEffect';
import styles from './StatsSection.module.css';

interface StatsSectionProps {
  leftText: string;
  rightText: string;
  centerImage: string;
}

export function StatsSection({ leftText, rightText, centerImage }: StatsSectionProps) {
  return (
    <section className={styles.stats}>
      <div className={styles.leftSection}>
        <h2 className={styles.leftText}>{leftText}</h2>
      </div>
      
      <div className={styles.rightSection}>
        <h2 className={styles.rightText}>{rightText}</h2>
      </div>
      
      <div className={styles.centerImageContainer}>
        <RepelEffect intensity={30}>
          <img 
            src={centerImage} 
            alt="Центральное изображение" 
            className={styles.centerImage}
          />
        </RepelEffect>
      </div>
    </section>
  );
}
