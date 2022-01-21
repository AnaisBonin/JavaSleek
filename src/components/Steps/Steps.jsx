import { useState, useEffect } from 'react';
import axios from 'axios';

import Step from '../Step/Step';

import './Steps.css';

const Steps = () => {
  // const [stepslist, setStepslist] = useState();

  const stepslist = [
    {
      title: 'Lessiver les murs',
      description: `Verser dans le seau 2 litres d'eau tiède et ajouter deux cuillères à café de lessive dégraissante. ... Nettoyer une première fois l'éponge. ... Commencer à frotter le mur de bas en haut pour éviter les coulures sales. ... Nettoyer tout le mur progressivement et toujours de bas en haut.`,
      video:
        'https://www.incidence-deco.com/lessiver-un-mur-pourquoi-quand-et-comment/',
    },
    {
      title: 'Appliquer une sous couche',
      description: `Protégez vos surfaces avec des bâches et du ruban de masquage. Une fois totalement sèches et poncées, dépoussiérez les surfaces à peindre. Passez votre sous-couche de peinture en une seule couche à l'aide d'un rouleau à poils de 10 à 12 mm. Patientez jusqu'au lendemain pour appliquer la peinture de finition.`,
      video: 'https://www.youtube.com/watch?v=VYDs5thvSaM',
    },
    {
      title: 'Peindre une première couche',
      description: `Aussi appelée primaire d'accrochage ou peinture d'apprêt, elle est indispensable dans 90 % des cas. C'est une peinture blanche qui doit être appliquée après la préparation de la surface à peindre (rebouchage des trous, application d'un enduit, ponçage) et avant la peinture de finition.`,
      video: 'https://www.youtube.com/watch?v=QAZ0EzeP9ME',
    },
    {
      title: 'Appliquer une deuxième couche',
      description: `Comment passer une deuxième couche de peinture au plafond ? Commencez la bande suivante, en chevauchant toujours la surface précédente d'une longueur de rouleau. Maintenez le tempo et ne faites pas de pause avant d'avoir peint toute la surface. Respectez toujours les délais entre les différentes couches de peinture.`,
      video: 'https://www.youtube.com/watch?v=QxdKlpA4lIw',
    },
    {
      title: 'Vernir pour protéger',
      description: `Optez pour un vernis compatible avec la peinture acrylique. ...
      Choisissez la finition du vernis de protection. ...
      Appliquez le vernis protecteur sur l'objet peint.`,
      video: 'https://www.youtube.com/watch?v=aHLwvVPx-fs',
    },
  ];

  // useEffect(async () => {
  //   const { data } = await axios.get(
  //     `http://localhost:8000/api/steps`,
  //   );

  //   setStepslist(data);
  // }, []);

  return (
    <section className="steps-section">
      {stepslist.map((step, i) => {
        console.log(step);
        return (
          <Step
            title={step.title}
            description={step.description}
            order={i+1}
            steps={step.video}
            key={i}
          />
        );
      })}
    </section>
  );
};

export default Steps;
