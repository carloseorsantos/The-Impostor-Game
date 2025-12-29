"use client";

import Modal from "@/components/ui/Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isRulesModalOpen, setIsRulesModalOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <Modal
        title="The Impostor Game"
        isModalOpen={isRulesModalOpen}
        setIsModalOpen={setIsRulesModalOpen}
      >
        <p className="py-4">
          🎯 <strong>Objetivo</strong>
          <br />
          Descobrir quem é o Impostor antes que ele engane todos os jogadores.
          <br />
          <br />
          👥 <strong>Jogadores</strong>
          <br />
          Mínimo: 3 jogadores · Máximo: 10 jogadores.
          <br />
          Em cada partida, 1 jogador é o Impostor e os demais são Tripulantes.
          <br />
          <br />
          🔑 <strong>Como funciona</strong>
          <br />
          Todos os jogadores recebem uma palavra secreta.
          <br />
          O Impostor NÃO recebe a palavra.
          <br />
          A palavra é a mesma para todos os tripulantes.
          <br />
          <br />
          🔄 <strong>Rodadas</strong>
          <br />
          Em cada rodada, os jogadores dão uma dica curta.
          <br />
          As respostas devem ser sutis, sem revelar a palavra.
          <br />
          O Impostor tenta se misturar sem levantar suspeitas.
          <br />
          <br />
          🗳️ <strong>Votação</strong>
          <br />
          Após as rodadas, todos votam em quem acreditam ser o Impostor.
          <br />
          O mais votado é eliminado.
          <br />
          <br />
          🏆 <strong>Vitória</strong>
          <br />
          ✅ Tripulantes vencem ao eliminar o Impostor.
          <br />
          😈 Impostor vence se não for descoberto.
          <br />
          <br />
          ⚠️ <strong>Regras importantes</strong>
          <br />
          Não diga a palavra.
          <br />
          Não use gestos ou combinações externas.
        </p>
      </Modal>

      <div className="flex flex-col gap-4">
        <button className="btn bg-white text-black border-[#e5e5e5] w-62.5" onClick={() => router.push("/create")}>
        Criar Partida
      </button>
      <button className="btn bg-white text-black border-[#e5e5e5] w-62.5 disabled:text-gray-500" disabled>
        Online (Em breve)
      </button>
      <button className="btn bg-white text-black border-[#e5e5e5] w-62.5" onClick={() => setIsRulesModalOpen(true)}>
        Regras
      </button>
      </div>
    </div>
  );
}
