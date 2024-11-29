import IconRow from '../../../../../public/assets/icons/IconArrowWithoutBorder.svg';
import { cn } from '@/lib/utils';
import { useDesignStore } from '@/useDesignStore';

export const ButtonSlide = ({
  onClick,
  className,
  ariaLabel,
}: {
  onClick: () => void;
  className?: string;
  ariaLabel: string;
}) => {
  const { designType } = useDesignStore();

  // Встановлюємо стилі залежно від типу дизайну
  const buttonStyles =
    designType === 'designByOlga'
      ? 'border-olga-green hover:bg-olga-green'
      : 'border-svitlana-purple hover:bg-svitlana-purple';

  const iconStyles =
    designType === 'designByOlga'
      ? 'stroke-olga-green hover:fill-olga-green-extra hover:stroke-black'
      : 'stroke-svitlana-purple hover:fill-svitlana-purple-extra stroke-white';

  return (
    <button
      className={cn(
        className,
        buttonStyles,
        'flex h-8 w-16 items-center justify-center rounded-[40px] border-[1px] border-solid transition-all'
      )}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <IconRow
        width={64}
        height={32}
        className={cn(
          iconStyles,
          'transition-stroke duration-1000 ease-in-out'
        )}
      />
    </button>
  );
};
