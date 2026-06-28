import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import projects from '../../data/projects';

function Proyects() {
  const { t } = useTranslation('global');
  const [expanded, setExpanded] = useState(null);
  const MAX_TECHS = 8;

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="work" className="proyects-section">
      <div className="container">
        <div className="reveal section-head">
          <h2 className="section-title">{t('projects.title')}</h2>
        </div>

        {projects.map((project) => {
          const visibleTechs = project.techs.slice(0, MAX_TECHS);
          const extraCount = project.techs.length - MAX_TECHS;

          return (
            <div className="proyect-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="proyect-thumb"
                loading="lazy"
              />

              <div className="proyect-body">
                <h3 className="proyect-title">{project.title}</h3>

                <p className="proyect-desc">
                  {t(project.introKey)}
                </p>

                {expanded === project.id && (
                  <p className="proyect-desc2">{t(project.intro2Key)}</p>
                )}

                <button className="proyect-expand" onClick={() => toggleExpand(project.id)}>
                  {expanded === project.id
                    ? t('projects.bnb_vermenos')
                    : t('projects.bnb_vermas')}
                </button>

                <div className="proyect-techs">
                  {visibleTechs.map((tech, i) => (
                    <img key={i} src={tech} alt="" className="proyect-tech" />
                  ))}
                  {extraCount > 0 && (
                    <span className="proyect-techx">+{extraCount}</span>
                  )}
                </div>

                <div className="proyect-actions">
                  {project.deployUrl && (
                    <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="proyect-btn">
                      <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
                        <path fillRule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,8.08899 7.69202,8.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z"/>
                      </svg>
                      {project.hasDemo ? 'Demo' : 'Deploy'}
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="proyect-btn">
                      <svg width="12" height="12" viewBox="0 0 640 640" fill="currentColor"><path d="M320 0C143.2 0 0 143.2 0 320c0 141.4 91.7 261.4 219 303.8 16 2.9 21.8-7 21.8-15.5 0-7.6-.3-32.8-.4-59.6-89.1 19.4-107.9-38-107.9-38-14.6-37-35.6-46.9-35.6-46.9-29.1-19.9 2.2-19.5 2.2-19.5 32.2 2.3 49.1 33 49.1 33 28.6 49 75 34.9 93.3 26.7 2.9-20.8 11.2-34.9 20.4-43-71.2-8.1-146-35.6-146-158.4 0-35 12.5-63.6 33-86-3.3-8.1-14.3-40.8 3.1-84.8 0 0 26.9-8.6 88 32.8 25.5-7.1 52.9-10.6 80-10.8 27.1.2 54.5 3.7 80 10.8 61.1-41.4 88-32.8 88-32.8 17.4 44 6.4 76.7 3.1 84.8 20.5 22.4 33 51 33 86 0 122.9-74.9 150.3-146.2 158.3 11.5 9.9 21.7 29.5 21.7 59.4 0 42.9-.4 77.4-.4 88 0 8.6 5.8 18.5 22 15.4C548.4 581.2 640 461.3 640 320 640 143.2 496.8 0 320 0z"/></svg>
                      {t('projects.bnb_codigo')}
                    </a>
                  )}
                  {project.repoBackUrl && (
                    <a href={project.repoBackUrl} target="_blank" rel="noopener noreferrer" className="proyect-btn">
                      <svg width="12" height="12" viewBox="0 0 640 640" fill="currentColor"><path d="M320 0C143.2 0 0 143.2 0 320c0 141.4 91.7 261.4 219 303.8 16 2.9 21.8-7 21.8-15.5 0-7.6-.3-32.8-.4-59.6-89.1 19.4-107.9-38-107.9-38-14.6-37-35.6-46.9-35.6-46.9-29.1-19.9 2.2-19.5 2.2-19.5 32.2 2.3 49.1 33 49.1 33 28.6 49 75 34.9 93.3 26.7 2.9-20.8 11.2-34.9 20.4-43-71.2-8.1-146-35.6-146-158.4 0-35 12.5-63.6 33-86-3.3-8.1-14.3-40.8 3.1-84.8 0 0 26.9-8.6 88 32.8 25.5-7.1 52.9-10.6 80-10.8 27.1.2 54.5 3.7 80 10.8 61.1-41.4 88-32.8 88-32.8 17.4 44 6.4 76.7 3.1 84.8 20.5 22.4 33 51 33 86 0 122.9-74.9 150.3-146.2 158.3 11.5 9.9 21.7 29.5 21.7 59.4 0 42.9-.4 77.4-.4 88 0 8.6 5.8 18.5 22 15.4C548.4 581.2 640 461.3 640 320 640 143.2 496.8 0 320 0z"/></svg>
                      {t('projects.bnb_code_back')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Proyects;
