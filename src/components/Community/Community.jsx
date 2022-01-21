import CommunityMessage from '../CommunityMessage/CommunityMessage';

import './Community.css';

const Community = () => {
  const messages = [
    {
      name: 'Anaïs Bonin',
      nf: 'AB',
      message: "J'adore ce tuto c'est fantastique !",
      suggestion: 'Spatule plate',
    },
    {
      name: 'Francesco Viglione',
      nf: 'FV',
      message: "J'ai un peu galéré mais grace à la vidéo c'est un succès",
      suggestion: 'Peinture séchage rapide',
    },
    {
      name: 'Claire Durand',
      nf: 'CD',
      message: "C'était pas mon projet préféré, je regarderai d'autres tuto",
      suggestion: 'Rouleau extra large',
    },
  ];
  
  return (
    <section className="community-section">
      {messages.map((message, i) => {
        return (
          <CommunityMessage
            name={message.name}
            nf={message.nf}
            content={message.message}
            suggestion={message.suggestion}
            key={i}
          />
        );
      })}
    </section>
  );
};

export default Community;
