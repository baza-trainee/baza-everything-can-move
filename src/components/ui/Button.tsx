import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  disabled,
  children, 
  className
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={clsx('bg-black text-l leading-[36px] font-regular rounded-full border-[1px] py-1 px-6 hover:text-black',className)}
    >
      {children}
    </button>
  );
};

export default Button;