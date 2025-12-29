'use client';

import { useEffect, useState } from 'react';
import { wordCategories } from '../create/category/utils/words';
import { WordCard } from '@/components/word-card';
import { useRouter } from 'next/navigation';

type Player = {
  id: string;
  name: string;
};

export default function GamePage() {
    const router = useRouter();

  const [players, setPlayers] = useState<Player[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [word, setWord] = useState<string | null>(null);
  const [impostorIndex, setImpostorIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedPlayers = localStorage.getItem('players');
    const storedCategory = localStorage.getItem('category');

    if(!storedPlayers){
        return router.push("/create")
    }

    if(!storedCategory){
        return router.push("/create/category")
    }

    const parsedPlayers: Player[] = JSON.parse(storedPlayers);

    const category = wordCategories.find(
      c => c.value === storedCategory
    );

    if (!category) return;

    const randomWord =
      category.words[
        Math.floor(Math.random() * category.words.length)
      ];

    const randomImpostorIndex = Math.floor(
      Math.random() * parsedPlayers.length
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPlayers(parsedPlayers);
    setWord(randomWord);
    setImpostorIndex(randomImpostorIndex);
    setLoading(false);
  }, [router]);

  const nextPlayer = () => {
    setCurrentIndex(prev => prev + 1);
  };

  if (loading) {
    return <p className="p-6 text-center">Carregando jogo...</p>;
  }

  if (currentIndex >= players.length) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Todos viram seu papel</h1>
        <p>Comecem o jogo 🚀</p>
      </div>
    );
  }

  const currentPlayer = players[currentIndex];
  const isImpostor = currentIndex === impostorIndex;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-xl font-semibold">
        {currentPlayer.name}, é sua vez
      </h1>

      <WordCard
        isImpostor={isImpostor}
        word={word!}
      />

      <button
        onClick={nextPlayer}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold"
      >
        {currentIndex === players.length - 1 ? 'Iniciar Jogo' : 'Próximo jogador'}
      </button>

      <p className="text-sm text-neutral-500">
        {currentIndex + 1} / {players.length}
      </p>
    </main>
  );
}
