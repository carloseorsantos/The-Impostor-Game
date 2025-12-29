import { Dispatch, SetStateAction } from "react";

type ModalProps = {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
};

export default function Modal({
  children,
  isModalOpen,
  setIsModalOpen,
  title,
}: ModalProps) {
  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle"
      open={isModalOpen}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg pt-4">{title}</h3>
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setIsModalOpen(false)}
        >
          ✕
        </button>
        {children}
        <div className="modal-action">
          <button className="btn" onClick={() => setIsModalOpen(false)}>
            Fechar
          </button>
        </div>
      </div>
    </dialog>
  );
}
