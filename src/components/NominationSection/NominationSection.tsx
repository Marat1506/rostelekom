import { RepelEffect } from '../RepelEffect/RepelEffect';
import styles from './NominationSection.module.css';

interface NominationSectionProps {
  number: string;
  title: string;
  subtitle: string;
  decorativeElement: string;
  layout: 'layout1' | 'layout2' | 'layout3' | 'layout4';
}

export function NominationSection({ 
  number, 
  title, 
  subtitle, 
  decorativeElement, 
  layout 
}: NominationSectionProps) {
  return (
    <section className={`${styles.nomination} ${styles[layout]}`}>
      <div className={styles.content}>
        {layout === 'layout1' && (
          <>
            <div className={styles.numberContainer}>
              <img src={number} alt="" className={styles.number} />
              <div className={styles.decorativeWrapper}>
                <RepelEffect intensity={25}>
                  <img src={decorativeElement} alt="" className={styles.decorative} />
                </RepelEffect>
              </div>
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Лучшие в <br></br> своём деле</h2>
              <p className={styles.subtitle}>50 призёров <br></br>  от руководителей ССП</p>
            </div>
          </>
        )}
        
        {layout === 'layout2' && (
          <>
            <div className={styles.numberContainer}>
              <img src={number} alt="" className={styles.number} />
              <div className={styles.textAbove}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
              </div>
            </div>
            <RepelEffect intensity={25}>
              <img src={decorativeElement} alt="" className={styles.decorative} />
            </RepelEffect>
          </>
        )}
        
        {layout === 'layout3' && (
          <>
            <div className={styles.numberContainer}>
              <img src={number} alt="" className={styles.number} />
              <h2 className={styles.titleAbove}>{title}</h2>
            </div>
            <div className={styles.bottomSection}>
              <RepelEffect intensity={25}>
                <img src={decorativeElement} alt="" className={styles.decorative} />
              </RepelEffect>
              <p className={styles.subtitleAbove}>{subtitle}</p>
            </div>
          </>
        )}
        
        {layout === 'layout4' && (
          <>
            <div className={styles.topSection}>
              <h2 className={styles.title}>Работают так, <br></br> как никто другой <br></br> не может</h2>
            </div>
            <div className={styles.centerSection}>
              <div>
                <img src={number} alt="" className={styles.number} />
                <RepelEffect intensity={25}>
                  <img src={decorativeElement} alt="" className={styles.decorative} />
                </RepelEffect>
              </div>
              <div className={styles.rightSection}>
                <p className={styles.subtitle}>{subtitle}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
