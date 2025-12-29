"use client";

import { useState } from "react";

type PlayerListProps = {
  list: Player[];
  handleAddNewPlayer: (player: Player) => void;
  handleRemovePlayer: (id: string) => void;
};
export default function PlayersList({
  list,
  handleAddNewPlayer,
  handleRemovePlayer,
}: PlayerListProps) {
  const [name, setName] = useState<string>("");

  const handleAddPlayer = () => {
    if(name === "" || list.length === 10) return;
    const player: Player = {
      id: crypto.randomUUID(),
      name,
      impostor: false,
    };
    handleAddNewPlayer(player);
    setName("");
  };

  const handleRemove = (id: string) => {
    handleRemovePlayer(id);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full gap-2">
        <input
          type="text"
          placeholder="Nome"
          className="input bg-white text-black border-[#e5e5e5]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
        />
        <button
          className="btn shadow-none text-xl bg-white text-black border-[#e5e5e5]"
          onClick={() => handleAddPlayer()}
        >
          +
        </button>
      </div>
      <div>
        <ul className="list rounded-box gap-2 bg-transparent">
          {list &&
            list.map((item, index) => (
              <li className="list-row bg-white text-black border-[#e5e5e5] shadow-md" key={item.id}>
                <div className="text-4xl font-thin opacity-30 tabular-nums">
                  {index + 1}
                </div>
                <div className="flex items-center">
                  <div>{item.name}</div>
                </div>
                <button
                  className="btn btn-square btn-ghost"
                  onClick={() => handleRemove(item.id)}
                >
                  🗑️
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
