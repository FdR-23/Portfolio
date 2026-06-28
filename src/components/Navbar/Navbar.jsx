import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Cv_spanish from '../../assets/Cv/Cv_Rampi_Federico_Spanish.pdf';
import Cv_english from '../../assets/Cv/Cv_Rampi_Federico_English.pdf';

function Navbar() {
  const { t, i18n } = useTranslation('global');
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const cvUrl = i18n.language === 'es' ? Cv_spanish : Cv_english;

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">FR</a>

        <nav className="navbar-links hide-mobile">
          <a href="#work" className="navbar-link">{t('navbar.nav1')}</a>
          <a href="#about" className="navbar-link">{t('navbar.nav2')}</a>
          <a href="#contact" className="navbar-link">{t('navbar.nav3')}</a>
          <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="navbar-link-cv">CV</a>
        </nav>

        <div className="navbar-actions">
          {/* Language toggle */}
          <div className="navbar-lang">
            <button
              onClick={() => i18n.changeLanguage('es')}
              className={`navbar-lang-btn${i18n.language === 'es' ? ' active' : ''}`}
            >
              es
            </button>
            <span className="navbar-lang-sep">/</span>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`navbar-lang-btn${i18n.language === 'en' ? ' active' : ''}`}
            >
              en
            </button>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="navbar-toggle"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
