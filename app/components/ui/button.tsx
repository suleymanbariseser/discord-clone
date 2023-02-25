import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void
};

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={clsx(
        'bg-blue-700 w-full p-2 rounded-sm hover:bg-blue-800 active:bg-blue-900',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
