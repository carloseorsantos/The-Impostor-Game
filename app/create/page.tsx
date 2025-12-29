"use client";

import PlayersList from "@/components/players-list";
import { useState } from "react";

export default function CreatePage() {
  const [playersList, setPlayersList] = useState<Player[]>([]);

  const handleAddNewPlayer = (player: Player) => {
    setPlayersList([...playersList, player]);
  };

  const handleRemovePlayer = (id: string) => {
    const newPlayerlist = playersList.filter((player) => player.id !== id);
    setPlayersList(newPlayerlist);
  };

  const handleCreateGame = () => {
    if (playersList.length < 3) return;
    localStorage.setItem("players", JSON.stringify(playersList));
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans gap-4">
      <h1>Insira o nome dos participantes</h1>
      <PlayersList
        list={playersList}
        handleAddNewPlayer={handleAddNewPlayer}
        handleRemovePlayer={handleRemovePlayer}
      />
      {playersList.length >= 3 && (
        <button
          className="btn btn-wide bg-white text-black border-[#e5e5e5] disabled:text-gray-400"
          onClick={() => handleCreateGame()}
          disabled={playersList.length < 3}
        >
          Próximo
        </button>
      )}
    </div>
  );
}
