import styles from './HeroSection.module.css';

interface HeroSectionProps {
  backgroundVideo?: string;
  backgroundImage?: string;
  title: string;
  subtitle: string;
}

export function HeroSection({ backgroundVideo, backgroundImage, title, subtitle }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      {backgroundVideo ? (
        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={backgroundImage}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
