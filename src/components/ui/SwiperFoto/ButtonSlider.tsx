import clsx from 'clsx';
import IconRow from '../../../../public/assets/icons/IconArrowWithoutBorder.svg';

export const ButtonSlide = ({
  onClick,
  className,
  ariaLabel,
}: {
  onClick: () => void;
  className?: string;
  ariaLabel: string;
}) => {
  return (
    <button
      className={clsx(
        className,
        'flex h-8 w-16 items-center justify-center rounded-[40px] border-[1px] border-solid border-olga-green transition-all hover:bg-olga-green'
      )}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <IconRow
        width={64}
        height={32}
        className="transition-srtoke stroke-olga-green duration-1000 ease-in-out hover:fill-olga-green-extra hover:stroke-black"
      />
    </button>
  );
};
