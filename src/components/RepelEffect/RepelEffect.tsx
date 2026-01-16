import { ReactNode } from 'react';
import { useRepelEffect } from '../../hooks/useRepelEffect';
import styles from './RepelEffect.module.css';

interface RepelEffectProps {
  children: ReactNode;
  intensity?: number;
  disabled?: boolean;
}

export function RepelEffect({ children, intensity = 20, disabled = false }: RepelEffectProps) {
  const { elementRef, transform } = useRepelEffect(disabled ? 0 : intensity);

  return (
    <div
      ref={elementRef}
      className={styles.repelContainer}
      style={{ transform }}
    >
      {children}
    </div>
  );
}
