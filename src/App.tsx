import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection/HeroSection';
import { StatsSection } from './components/StatsSection/StatsSection';
import { NominationSection } from './components/NominationSection/NominationSection';
import { SocialSection } from './components/SocialSection/SocialSection';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';
import './App.css';

interface Registration {
  name: string;
  email: string;
  timestamp: string;
}

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    // Проверяем, зарегистрирован ли пользователь
    const registered = localStorage.getItem('isRegistered');
    if (registered === 'true') {
      setIsRegistered(true);
    }
  }, []);

  const handleCtaClick = () => {
    if (isRegistered) {
      alert('Вы уже зарегистрированы на конкурс!');
      return;
    }
    setShowForm(true);
  };

  const handleFormSubmit = (name: string, email: string) => {
    // Получаем существующие регистрации
    const existingData = localStorage.getItem('registrations');
    const registrations: Registration[] = existingData ? JSON.parse(existingData) : [];

    // Добавляем новую регистрацию
    const newRegistration: Registration = {
      name,
      email,
      timestamp: new Date().toISOString()
    };
    registrations.push(newRegistration);

    // Сохраняем в localStorage
    localStorage.setItem('registrations', JSON.stringify(registrations));
    localStorage.setItem('isRegistered', 'true');

    setIsRegistered(true);
    setShowForm(false);
    alert('Спасибо за регистрацию!');
  };

  return (
    <div className="app">
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        title="Премия ИТ"
        subtitle="Летнее издание"
      />

      <StatsSection
        leftText="4 номинации"
        rightText="100 призёров"
        centerImage="https://static.tildacdn.info/tild6231-3961-4533-a636-646166643234/Pngtreeround_colorfu.png"
      />

      <NominationSection
        layout="layout1"
        number="https://static.tildacdn.info/tild3033-3539-4130-a430-393666363462/1.png"
        title="Лучшие в своём деле"
        subtitle="50 призёров от руководителей ССП"
        decorativeElement="https://static.tildacdn.info/tild3232-6637-4138-b861-663733663564/123.png"
      />

      <NominationSection
        layout="layout2"
        number="https://static.tildacdn.info/tild3332-3764-4333-b836-373564623163/2.png"
        title="Сделали что-то выдающееся"
        subtitle="5 призёров от ДИТ"
        decorativeElement="https://static.tildacdn.info/tild3062-6662-4966-b930-333636363465/Group_1.png"
      />

      <NominationSection
        layout="layout3"
        number="https://static.tildacdn.info/tild3131-6531-4839-b533-383863363862/3.png"
        title="Вышли за рамки должностных инструкций"
        subtitle="11 призёров от HR и Опер блока"
        decorativeElement="https://static.tildacdn.info/tild6463-3338-4462-b934-326136623163/Group_21314.png"
      />

      <NominationSection
        layout="layout4"
        number="https://static.tildacdn.info/tild3966-6134-4430-b762-373362386234/43.png"
        title="Работают так, как никто другой не может"
        subtitle="Много призёров по статистическим показателям"
        decorativeElement="https://static.tildacdn.info/tild3162-6666-4439-a663-653465616433/Group34.png"
      />

      <SocialSection
        socialLinks={{
          odnoklassniki: 'https://connect.ok.ru/offer?url=' + encodeURIComponent(window.location.href),
          vk: 'https://vk.com/share.php?url=' + encodeURIComponent(window.location.href),
          whatsapp: 'https://wa.me/?text=' + encodeURIComponent(window.location.href)
        }}
        ctaButtonText="А пожалуй, я пойду"
        onCtaClick={handleCtaClick}
      />

      {showForm && (
        <RegistrationForm
          onClose={() => setShowForm(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
}

export default App;
