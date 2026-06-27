import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import projects from './projectsConfig';

function Proyects() {
  const { t } = useTranslation('global');

  return (
    <div id="proyects" className="max-w-full p-2 m-2 rounded-lg">
      <section className="h-full max-w-full p-4 rounded-lg lg:p-8 sm:h-full">
        <h2 className="m-2 text-3xl font-medium tracking-widest text-center text-blue-900 font-alegraya dark:text-blue-600 lg:text-5xl lg:m-4 dark:[text-shadow:-2px_1px_8px_rgb(118_118_118_/_40%)]">
          {t('projects.title')}
        </h2>
        <div className="flex flex-col items-center justify-center m-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Proyects;
