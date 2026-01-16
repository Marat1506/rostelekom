# Дизайн: Лендинг "Премия ИТ - Летнее издание"

## Обзор

Одностраничное React-приложение с адаптивной версткой, построенное на компонентной архитектуре. Использует современные CSS-техники для анимаций и адаптивности, TypeScript для типобезопасности.

## Архитектура

### Технологический стек

- **Frontend Framework**: React 19.2.0 с TypeScript
- **Build Tool**: Vite 7.2.4
- **Styling**: CSS Modules / Styled Components
- **Animations**: CSS Transforms и Transitions

### Структура приложения

```
src/
├── components/
│   ├── HeroSection/
│   │   ├── HeroSection.tsx
│   │   └── HeroSection.module.css
│   ├── StatsSection/
│   │   ├── StatsSection.tsx
│   │   └── StatsSection.module.css
│   ├── NominationSection/
│   │   ├── NominationSection.tsx
│   │   └── NominationSection.module.css
│   ├── SocialSection/
│   │   ├── SocialSection.tsx
│   │   └── SocialSection.module.css
│   └── RepelEffect/
│       ├── RepelEffect.tsx
│       └── RepelEffect.module.css
├── hooks/
│   └── useRepelEffect.ts
├── assets/
│   ├── images/
│   └── videos/
├── App.tsx
├── App.css
└── main.tsx
```

## Компоненты и интерфейсы

### 1. HeroSection

Полноэкранный блок с фоновым видео/изображением и центрированным текстом.

```typescript
interface HeroSectionProps {
  backgroundVideo?: string;
  backgroundImage?: string;
  title: string;
  subtitle: string;
}
```

**Ответственность:**

- Отображение фонового контента (видео или изображение)
- Центрирование текста
- Адаптивное изменение размеров шрифта

### 2. StatsSection

Блок с разделенным экраном (черная/белая части) и центральным изображением.

```typescript
interface StatsSectionProps {
  leftText: string;
  rightText: string;
  centerImage: string;
}
```

**Ответственность:**

- Разделение экрана на две части с разными цветами
- Позиционирование текстов
- Интеграция RepelEffect для центрального изображения
- Адаптивная трансформация в вертикальный layout на мобильных

### 3. NominationSection

Универсальный компонент для отображения номинаций с различными layout'ами.

```typescript
interface NominationSectionProps {
  number: string; // URL изображения цифры
  title: string;
  subtitle: string;
  decorativeElement: string; // URL декоративного элемента
  layout: "layout1" | "layout2" | "layout3" | "layout4";
}
```

**Ответственность:**

- Отображение номера номинации
- Размещение текстов согласно layout
- Интеграция RepelEffect для декоративных элементов
- Адаптивное изменение расположения элементов

### 4. RepelEffect

Компонент-обертка для применения эффекта отталкивания при наведении.

```typescript
interface RepelEffectProps {
  children: React.ReactNode;
  intensity?: number; // Сила отталкивания (по умолчанию 20px)
  disabled?: boolean; // Отключение на touch-устройствах
}
```

**Ответственность:**

- Отслеживание позиции курсора
- Вычисление направления отталкивания
- Применение CSS transform
- Автоматическое отключение на touch-устройствах

### 5. SocialSection

Блок с иконками социальных сетей и кнопкой призыва к действию.

```typescript
interface SocialSectionProps {
  socialLinks: {
    odnoklassniki: string;
    vk: string;
    whatsapp: string;
  };
  ctaButtonText: string;
  onCtaClick: () => void;
}
```

**Ответственность:**

- Отображение иконок социальных сетей
- Обработка кликов на социальные иконки
- Отображение и обработка кнопки CTA

## Модели данных

### AppConfig

```typescript
interface AppConfig {
  hero: {
    backgroundVideo?: string;
    backgroundImage: string;
    title: string;
    subtitle: string;
  };
  stats: {
    leftText: string;
    rightText: string;
    centerImage: string;
  };
  nominations: NominationData[];
  social: {
    links: {
      odnoklassniki: string;
      vk: string;
      whatsapp: string;
    };
    ctaButtonText: string;
  };
}

interface NominationData {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  decorativeElement: string;
  layout: "layout1" | "layout2" | "layout3" | "layout4";
}
```

## Свойства корректности

_Свойство - это характеристика или поведение, которое должно выполняться во всех корректных выполнениях системы - по сути, формальное утверждение о том, что система должна делать. Свойства служат мостом между человекочитаемыми спецификациями и машинно-проверяемыми гарантиями корректности._

### Property 1: Адаптивное отображение без overflow

_Для любого_ размера viewport от 320px до 2560px, страница должна отображаться без горизонтальной прокрутки (overflow-x).

**Validates: Requirements 8.1**

### Property 2: Адаптивные размеры шрифтов

_Для любого_ текстового элемента, размер шрифта должен масштабироваться соответственно размеру viewport согласно определенным breakpoints (mobile < 768px, tablet 768-1023px, desktop ≥ 1024px).

**Validates: Requirements 1.4, 8.2**

### Property 3: Эффект отталкивания направлен корректно

_Для любого_ декоративного элемента с RepelEffect и любой позиции курсора внутри области элемента, transform должен смещать элемент в направлении, противоположном вектору от центра элемента к курсору.

**Validates: Requirements 2.7, 3.3, 4.5, 5.4, 6.4, 9.1**

### Property 4: Отключение hover-эффектов на touch-устройствах

_Для любого_ устройства с touch-интерфейсом (определяется через matchMedia('(hover: none)')), все hover-эффекты включая RepelEffect должны быть отключены.

**Validates: Requirements 9.5**

### Property 5: Производительность анимаций - только transforms

_Для любого_ анимированного элемента, CSS transitions должны использовать только свойства transform и opacity (не left, top, margin, width, height).

**Validates: Requirements 9.2**

### Property 6: Производительность анимаций - длительность

_Для любого_ элемента с CSS transition, значение transition-duration должно быть ≤ 300ms.

**Validates: Requirements 9.3**

### Property 7: Плавность анимаций - easing функции

_Для любого_ элемента с CSS transition, transition-timing-function не должна быть 'linear' (должна использовать easing функции типа ease, ease-in-out, cubic-bezier).

**Validates: Requirements 9.4**

### Property 8: Корректность социальных ссылок

_Для любой_ иконки социальной сети (Одноклассники, ВКонтакте, WhatsApp), href атрибут должен содержать корректный URL для шаринга в соответствующей социальной сети.

**Validates: Requirements 7.3**

### Property 9: Вертикальная трансформация layout на мобильных

_Для любого_ блока с горизонтальным layout (flex-direction: row или grid с несколькими колонками) на viewport ≥ 768px, на viewport < 768px layout должен трансформироваться в вертикальный (flex-direction: column или grid с одной колонкой).

**Validates: Requirements 2.8, 4.6, 5.6, 6.6, 8.3**

### Property 10: Минимальный размер touch targets

_Для любого_ интерактивного элемента (кнопки, ссылки) на touch-устройствах, минимальный размер области клика должен быть не менее 44x44px.

**Validates: Requirements 7.5**

## Обработка ошибок

### Загрузка изображений

- Использовать placeholder для изображений во время загрузки
- Показывать fallback-изображение при ошибке загрузки
- Lazy loading для изображений вне viewport

### Загрузка видео

- Предоставить fallback-изображение если видео не загружается
- Автоматически переключаться на изображение на медленных соединениях
- Отключать автовоспроизведение видео на мобильных устройствах

### Обработка кликов

- Предотвращать множественные клики на кнопку CTA (debounce)
- Показывать визуальную обратную связь при клике
- Логировать ошибки при неудачных переходах

## Стратегия тестирования

### Unit-тесты

Использовать **Vitest** и **React Testing Library** для unit-тестирования:

- Тестирование рендеринга каждого компонента с различными props
- Тестирование обработчиков событий (клики, hover)
- Тестирование условного рендеринга
- Тестирование edge cases (отсутствующие изображения, пустые строки)

### Property-Based тесты

Использовать **fast-check** для property-based тестирования:

- Каждый тест должен выполняться минимум 100 итераций
- Каждый тест должен быть помечен комментарием с ссылкой на свойство из дизайна
- Формат тега: `// Feature: it-award-landing, Property {number}: {property_text}`

**Примеры property-тестов:**

1. **Адаптивность**: Генерировать случайные размеры viewport и проверять отсутствие overflow
2. **Эффект отталкивания**: Генерировать случайные позиции курсора и проверять направление смещения
3. **Производительность анимаций**: Проверять, что все CSS transitions имеют duration ≤ 300ms

### Integration-тесты

- Тестирование полного flow прокрутки страницы
- Тестирование взаимодействия между компонентами
- Тестирование адаптивных breakpoints

### Visual Regression тесты

- Snapshot-тесты для каждого компонента
- Тестирование на различных размерах экрана
- Тестирование состояний hover/active

## Детали реализации

### Эффект отталкивания (RepelEffect)

Реализация через custom hook `useRepelEffect`:

```typescript
function useRepelEffect(intensity: number = 20) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate(0, 0)");

  useEffect(() => {
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
      setTransform("translate(0, 0)");
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity]);

  return { elementRef, transform };
}
```

### Адаптивные breakpoints

```css
/* Mobile */
@media (max-width: 767px) {
  /* Вертикальный layout */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Промежуточный layout */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Горизонтальный layout */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Увеличенные размеры */
}
```

### Оптимизация производительности

1. **Lazy loading изображений**: Использовать `loading="lazy"` атрибут
2. **Code splitting**: Разделить компоненты по route (если будет расширение)
3. **Мemoization**: Использовать `React.memo` для компонентов без частых изменений
4. **CSS containment**: Использовать `contain: layout style paint` для изолированных блоков
5. **will-change**: Применять `will-change: transform` для анимируемых элементов

### Accessibility

1. **Семантический HTML**: Использовать `<section>`, `<nav>`, `<button>`
2. **ARIA labels**: Добавить aria-label для иконок социальных сетей
3. **Keyboard navigation**: Обеспечить доступность всех интерактивных элементов с клавиатуры
4. **Focus indicators**: Видимые focus states для всех интерактивных элементов
5. **Alt texts**: Описательные alt-тексты для всех изображений
