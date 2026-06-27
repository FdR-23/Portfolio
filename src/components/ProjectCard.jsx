import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';

function ProjectCard({ project }) {
  const { t } = useTranslation('global');

  return (
    <Dialog>
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="flex flex-col items-center m-4 rounded-lg shadow-md md:flex-row bg-gray-500/20 dark:bg-transparent dark:md:hover:shadow-white/20 md:w-11/12 md:h-72 md:hover:shadow-lg"
      >
        <img
          className="rounded-t-lg object-fit md:shadow-md md:shadow-black md:m-4 md:h-auto md:w-80 md:rounded-lg dark:md:shadow-md dark:md:shadow-white/50"
          src={project.image}
          alt={project.title}
        />
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-col justify-start flex-grow p-6"
        >
          <h3 className={`mb-2 text-xl font-medium dark:[text-shadow:-2px_1px_8px_rgb(118_118_118_/_40%)] ${project.titleColor}`}>
            {project.title}
          </h3>
          <p className="mb-4 text-base text-gray-700 dark:text-white">
            {t(project.introKey)}.<br />
            {t(project.intro2Key)}
          </p>
          <div className="flex flex-row justify-end">
            <DialogTrigger asChild>
              <Button variant="outline" size="xs">
                {t('projects.bnb_vermas')}
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </div>

      <DialogContent className="dark:bg-gray-700 dark:text-white">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <p className="py-4">{t(project.modalDescKey)}</p>
        <h3 className="text-lg font-bold">{t('projects.modal_tecnologia')}</h3>
        <div className="flex flex-row flex-wrap justify-center">
          {project.techs.map((tech, i) => (
            <img key={i} className="w-8 m-1 mx-2" src={tech} alt={`tech-${i}`} />
          ))}
        </div>
        <DialogFooter className="flex flex-wrap items-center justify-center">
          <DialogClose asChild>
            <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="shadow-inner shadow-white dark:bg-white/10 dark:hover:shadow-md dark:hover:shadow-white">
                <svg className="mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,8.08899 7.69202,8.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z" />
                </svg>
                Deploy
              </Button>
            </a>
          </DialogClose>
          <DialogClose asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="shadow-inner shadow-white dark:bg-white/10 dark:hover:shadow-md dark:hover:shadow-white">
                <svg className="mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 640 640">
                  <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                </svg>
                {t('projects.bnb_codigo')}
              </Button>
            </a>
          </DialogClose>
          {project.hasDemo && project.repoBackUrl && (
            <DialogClose asChild>
              <a href={project.repoBackUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="shadow-inner shadow-white dark:bg-white/10 dark:hover:shadow-md dark:hover:shadow-white">
                  <svg className="mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 640 640">
                    <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                  </svg>
                  {t('projects.bnb_code_back')}
                </Button>
              </a>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectCard;
