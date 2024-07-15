interface ActionButtonProps {
  label: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
}

const ActionButton = ({
  label,
  onClick,
  type,
  className,
}: ActionButtonProps) => {
  return (
    <button
      type={type}
      className={`px-8 py-[17px] border-2 border-[#FFFFFF33] rounded-full hover:bg-white hover:text-black transition font-semibold text-[20px] leading-[30px] tracking-wider ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ActionButton;
