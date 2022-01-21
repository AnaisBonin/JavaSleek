import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header.jsx'

import Article from '../../components/Article/Article';
import Community from '../../components/Community/Community';
import Steps from '../../components/Steps/Steps';
import { useApp } from '../../contexts/AppProvider';

import './Project.css';

const Project = () => {
  const { selectedProject, setSelectedProject } = useApp();
  const { id: projectId } = useParams();

  const [project, setProject] = useState();
  // const project = {
  //     id: 29,
  //     title: "Repeindre son plafond",
  //     description: "prenez un pinceau et peignez",
  //     rating: 4,
  // }

  const [isSelected, setIsSelected] = useState(false);

  const [stepsDisplayed, setStepsDisplayed] = useState(true);

  const clickSteps = () => {
    setStepsDisplayed(true);
  };

  const clickCommunity = () => {
    setStepsDisplayed(false);
  };

  const projectClick = () => {
    if (!selectedProject) {
      setSelectedProject({ ...project });
    } else {
      setSelectedProject();
    }
  };

  useEffect(async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/projects/${projectId}`,
    );
    console.log(data);
    setProject(data);

    if (!data) {
      setProject({
        id: 26,
        title: 'Dormir mieux la nuit',
        description: 'et si vous changiez votre matelas?',
        rating: '1',
      });
    }
    console.log(project);
  }, [projectId]);

  useEffect(() => {
    if (!selectedProject) {

      return setIsSelected(false);
    }

    if (selectedProject.id === project.id) {
      setIsSelected(true);
    } else {
      return setIsSelected(false);
    }
  }, [project, selectedProject]);

  console.log(project);

  return (
    <main className="project-main">
      {project && (
        <>
          <section className="project-head">
            <div className="project-img"></div>
            <h1>{project.title}</h1>
            {!isSelected ? (
              <button type="button" onClick={projectClick}>
                Je compose ce projet
              </button>
            ) : (
              <button
                type="button"
                onClick={projectClick}
                className="project-selected">
                Stop working on this project
              </button>
            )}
            {isSelected && (
              <p>Article déjà possédé ? Cliquez sur la photo du produit !</p>
            )}
          </section>
          <section className="project-products-list">
            <Article />
            <Article />
            <Article />
            <div className="filet-h"></div>
          </section>
          <section className="project-steps-community">
            <div className="project-sc-buttons">
              <button
                className={
                  stepsDisplayed
                    ? 'steps-button steps-selected'
                    : 'steps-button'
                }
                onClick={clickSteps}>
                Steps
              </button>
              <button
                className={
                  !stepsDisplayed
                    ? 'community-button community-selected'
                    : 'community-button'
                }
                onClick={clickCommunity}>
                Community
              </button>
            </div>
            <div className="project-sc">
              {stepsDisplayed && <Steps />}
              {!stepsDisplayed && <Community />}
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Project;
