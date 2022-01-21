import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Article from '../../components/Article/Article';
import Community from '../../components/Community/Community';
import Steps from '../../components/Steps/Steps';

const Project = () => {
  const [project, setProject] = useState(true);
  const { id: projectId } = useParams();

  // useEffect(async () => {
  //   const { data } = await axios.get(
  //     `${process.env.REACT_APP_API_URL}/projects/${projectId}`,
  //   );

  //   setProject(data);
  // }, [projectId]);

  return (
    project && (
      <main className="project-main">
        <section className="project-head">
          <div className="project-img"></div>
          <h1>Project Title</h1>
          <button type="button">Je compose ce projet</button>
          <p>Article déjà possédé ? Cliquez sur la photo du produit !</p>
        </section>
        <section className="project-products-list">
          <Article />
          <Article />
          <Article />
        </section>
        <section className='project-steps-community'>
          <div>
            <button>Steps</button>
            <button>Community</button>
          </div>
          <div>
            <Steps />
            <Community />
          </div>
        </section>
      </main>
    )
  );
};

export default Project;
