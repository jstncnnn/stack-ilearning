import React from 'react';
import './SingleCard.css';

interface Props {
  card: {
    id: number;
    src: string;
    matched: boolean;
  };
  handleChoice: (card: { id: number; src: string; matched: boolean }) => void;
  flipped: boolean;
  disabled: boolean;
}

const SingleCard: React.FC<Props> = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="front" />
        <img className="back" src="/img/Cover.png" onClick={handleClick} alt="back" />
      </div>
    </div>
  );
};

export default SingleCard;