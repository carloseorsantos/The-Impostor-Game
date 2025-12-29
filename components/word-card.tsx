import { useState } from 'react';

type WordCardProps = {
  word: string;
  isImpostor: boolean;
};

export function WordCard({ word, isImpostor }: WordCardProps) {
  const [holding, setHolding] = useState(false);

  const content = isImpostor
    ? 'Você é o Impostor 😈'
    : word;

  return (
    <div
      className="w-64 h-40 rounded-2xl bg-neutral-900 text-white flex items-center justify-center text-2xl font-bold text-center select-none"
      onMouseDown={() => setHolding(true)}
      onMouseUp={() => setHolding(false)}
      onMouseLeave={() => setHolding(false)}
      onTouchStart={() => setHolding(true)}
      onTouchEnd={() => setHolding(false)}
    >
      {holding ? content : 'Segure para ver'}
    </div>
  );
}
