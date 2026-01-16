import { useEffect, useRef, useState } from 'react';

export function useRepelEffect(intensity: number = 20) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate(0, 0)');

  useEffect(() => {
    // Проверка на touch-устройство
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) {
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const maxDistance = Math.max(rect.width, rect.height);

      if (distance < maxDistance) {
        const angle = Math.atan2(deltaY, deltaX);
        const offsetX = -Math.cos(angle) * intensity;
        const offsetY = -Math.sin(angle) * intensity;

        setTransform(`translate(${offsetX}px, ${offsetY}px)`);
      }
    };

    const handleMouseLeave = () => {
      setTransform('translate(0, 0)');
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return { elementRef, transform };
}
