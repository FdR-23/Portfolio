import React from 'react';
import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t } = useTranslation('global');

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="reveal text-center">
          <h2 className="section-title flex-center">
            {t('contact.title')}
          </h2>
          <p className="contact-desc">{t('contact.desc')}</p>

          <div className="contact-links">
            <a
              href="https://github.com/FdR-23"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor">
                <path d="M36,12c-13.3,0-24,10.8-24,24c0,10.6,6.9,19.6,16.4,22.8c1.2,0.2,1.6-0.5,1.6-1.2c0-0.6,0-2.2,0-4.3c-6.7,1.5-8.1-2.9-8.1-2.9c-1.1-2.8-2.7-3.5-2.7-3.5c-2.2-1.5,0.2-1.5,0.2-1.5c2.4,0.2,3.7,2.5,3.7,2.5c2.1,3.7,5.6,2.6,7,2c0.2-1.6,0.8-2.6,1.5-3.2c-5.3-0.6-10.9-2.7-10.9-11.9c0-2.6,0.9-4.8,2.5-6.5c-0.2-0.6-1.1-3,0.2-6.2c0,0,2-0.6,6.5,2.5c1.9-0.5,3.9-0.8,5.9-0.8c2,0,4,0.3,5.9,0.8c4.5-3.1,6.5-2.5,6.5-2.5c1.3,3.2,0.4,5.6,0.2,6.2c1.5,1.7,2.5,3.9,2.5,6.5c0,9.2-5.6,11.3-11,11.9c0.9,0.7,1.6,2.2,1.6,4.4c0,3.2,0,5.8,0,6.5c0,0.6,0.4,1.4,1.7,1.2C53.1,55.6,60,46.6,60,36C60,22.8,49.3,12,36,12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/federico-rampi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor">
                <path d="M56,16H16c-2.2,0-4,1.8-4,4v32c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V20C60,17.8,58.2,16,56,16z M30,44c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2V32c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2V44z M28,28c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S30.2,28,28,28z M52,44c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2v-6c0-1.1-0.9-2-2-2s-2,0.9-2,2v6c0,1.1-0.9,2-2,2h-4c-1.1,0-2-0.9-2-2V32c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2c1.2-1.1,2.4-2,4-2c3.3,0,6,2.7,6,6V44z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:federicorampi@email.com"
              className="contact-link"
            >
              <svg width="20" height="20" viewBox="0 0 72 72" fill="currentColor">
                <path d="M56,20H16c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V24C60,21.8,58.2,20,56,20z M52,28L36,38L20,28V26l16,10l16-10V28z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
