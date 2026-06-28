import React from 'react';
import { useTranslation } from 'react-i18next';

import css from '../../assets/Skills_svg/css.svg';
import js from '../../assets/Skills_svg/js.svg';
import html from '../../assets/Skills_svg/html.svg';
import tailwind from '../../assets/Skills_svg/tailwind.svg';
import react from '../../assets/Skills_svg/react.svg';
import redux from '../../assets/Skills_svg/redux.svg';
import nextjs from '../../assets/Skills_svg/nextjs.svg';
import node from '../../assets/Skills_svg/node.svg';
import express from '../../assets/Skills_svg/express.svg';
import postgresql from '../../assets/Skills_svg/postgresql.svg';
import sequelize from '../../assets/Skills_svg/sequelize.svg';
import mongoose from '../../assets/Skills_svg/mongoose.svg';
import mongodb from '../../assets/Skills_svg/mongodb.svg';
import reactnative from '../../assets/Skills_svg/react_native.svg';
import git from '../../assets/Skills_svg/git.svg';
import github from '../../assets/Skills_svg/github1.svg';
import figma from '../../assets/Skills_svg/figma-icon.svg';
import postman from '../../assets/Skills_svg/postman.svg';
import trello from '../../assets/Skills_svg/trello.svg';

const skillGroups = [
  {
    titleKey: 'skills.frontend',
    items: [
      { label: 'React', icon: react },
      { label: 'JavaScript', icon: js },
      { label: 'TypeScript', icon: null },
      { label: 'HTML', icon: html },
      { label: 'CSS', icon: css },
      { label: 'Tailwind', icon: tailwind },
      { label: 'Next.js', icon: nextjs },
      { label: 'Redux', icon: redux },
      { label: 'React Native', icon: reactnative },
    ],
  },
  {
    titleKey: 'skills.backend',
    items: [
      { label: 'Node.js', icon: node },
      { label: 'Express', icon: express },
      { label: 'PostgreSQL', icon: postgresql },
      { label: 'Sequelize', icon: sequelize },
      { label: 'MongoDB', icon: mongodb },
      { label: 'Mongoose', icon: mongoose },
    ],
  },
  {
    titleKey: 'skills.tools',
    items: [
      { label: 'Git', icon: git },
      { label: 'GitHub', icon: github },
      { label: 'Figma', icon: figma },
      { label: 'Postman', icon: postman },
      { label: 'Trello', icon: trello },
    ],
  },
];

function Skills() {
  const { t } = useTranslation('global');

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="reveal section-head">
          <h2 className="section-title">{t('skills.title')}</h2>
        </div>

        {skillGroups.map((group, gi) => (
          <div className="skills-group reveal" key={gi}>
            <p className="skills-group-title">{t(group.titleKey)}</p>
            <div className="skills-pills">
              {group.items.map((item, ii) => (
                <span className="skill-pill" key={ii}>
                  {item.icon && <img src={item.icon} alt="" />}
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
