import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation('global');

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <p className="hero-tag reveal">{t('hero.tag')}</p>
          <h1 className="hero-title reveal">
            {t('hero.title1')}<br />{t('hero.title2')}
          </h1>
          <p className="hero-desc reveal">
            {t('hero.desc')}
          </p>
          <div className="hero-buttons reveal">
            <a href="#work" className="btn btn-primary">{t('hero.btnWork')}</a>
            <a href="#about" className="btn btn-outline">{t('hero.btnAbout')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
