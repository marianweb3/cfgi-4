import React from "react";
import ReactDOM from "react-dom";
import { CloseModalSVGIcon } from "../../SVGIcons";

interface ModalProps {
  title: string;
  subTitle?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ title, subTitle, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#141414] py-[30px] px-12 rounded-[32px] border-2 border-[#FFFFFF1A] relative w-full max-w-[1054px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[10px]">
            <h3 className="font-work-sans font-bold text-[40px] leading-[44px] tracking-wider text-white">
              {title}
            </h3>
            {subTitle ? (
              <p className="font-work-sans font-semibold text-[14px] leading-[19.6px] tracking-wider text-[#ffffffb3]">
                {subTitle}
              </p>
            ) : null}
          </div>
          <button
            className="size-10 bg-[#1E1E1E] border border-[#232323] flex items-center justify-center rounded-full"
            onClick={onClose}
          >
            <CloseModalSVGIcon />
          </button>
        </div>
        <div className="mt-[54px]">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
