import styles from './SocialSection.module.css';

interface SocialSectionProps {
  socialLinks: {
    odnoklassniki: string;
    vk: string;
    whatsapp: string;
  };
  ctaButtonText: string;
  onCtaClick: () => void;
}

export function SocialSection({ socialLinks, ctaButtonText, onCtaClick }: SocialSectionProps) {
  return (
    <section className={styles.social}>
      <div className={styles.content}>
        <div className={styles.socialIcons}>
          <a 
            href={socialLinks.odnoklassniki} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Поделиться в Одноклассниках"
          >
            <div className={styles.iconCircle} style={{ backgroundColor: '#ee8208' }}>
              <span className={styles.iconText}>OK</span>
            </div>
          </a>
          
          <a 
            href={socialLinks.vk} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Поделиться ВКонтакте"
          >
            <div className={styles.iconCircle} style={{ backgroundColor: '#0077ff' }}>
              <span className={styles.iconText}>VK</span>
            </div>
          </a>
          
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Поделиться в WhatsApp"
          >
            <div className={styles.iconCircle} style={{ backgroundColor: '#000000' }}>
              <span className={styles.iconText}>WA</span>
            </div>
          </a>
        </div>
        
        <button 
          className={styles.ctaButton}
          onClick={onCtaClick}
        >
          {ctaButtonText}
        </button>
      </div>
    </section>
  );
}
