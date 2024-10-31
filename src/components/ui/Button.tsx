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
      className={clsx('bg-black text-sm leading-[23.4px] font-regular rounded-full border-[1px] py-[12.5px] px-[12.8px] hover:text-black lg:text-md lg:leading-[26px] lg:py-[9px] lg:px-[20px] 2xl:text-l 2xl:leading-[31.2px] 2xl:py-[6.5px]',className)}
    >
      {children}
    </button>
  );
};

export default Button;