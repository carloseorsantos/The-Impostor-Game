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

  const handleAddPlayer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || list.length === 10) return;
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
    <div className="flex flex-col gap-6 pt-12">
      <div>
        <form onSubmit={handleAddPlayer} className="flex w-full gap-2">
          <input
            type="text"
            placeholder="Nome"
            className="input bg-white text-black border-[#e5e5e5]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            autoCapitalize="words"
          />
          <button
            type="submit"
            className="btn shadow-none text-xl bg-white text-black border-[#e5e5e5]"
          >
            +
          </button>
        </form>
      </div>
      <div>
        <ul className="list rounded-box gap-2 bg-transparent">
          {list &&
            list.map((item, index) => (
              <li
                className="list-row bg-white text-black border-[#e5e5e5] shadow-md"
                key={item.id}
              >
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ff0000"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor={undefined}
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M10,2l-1,1h-4c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1h2h10h2c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1h-4l-1,-1zM5,7v13c0,1.105 0.895,2 2,2h10c1.105,0 2,-0.895 2,-2v-13z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
