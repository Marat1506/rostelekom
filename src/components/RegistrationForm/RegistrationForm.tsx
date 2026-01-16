import { useState, type FormEvent } from 'react';
import styles from './RegistrationForm.module.css';

interface RegistrationFormProps {
  onClose: () => void;
  onSubmit: (name: string, email: string) => void;
}

export function RegistrationForm({ onClose, onSubmit }: RegistrationFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      onSubmit(name, email);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>Регистрация на конкурс</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя"
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш email"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
