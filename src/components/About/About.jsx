import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation('global');

  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="reveal">
          <h2 className="about-title">{t('about.title')}</h2>
        </div>
        <div className="about-text reveal">
          <p>{t('about.intro1')}</p>
          <p>{t('about.intro2')}</p>
          <p>{t('about.intro3')}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
