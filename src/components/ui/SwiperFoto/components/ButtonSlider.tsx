import { ICONS_SHARED } from '@/constants/icons/iconsSrc';
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
    designType === 'designByOlga' && 'border-olga-green hover:bg-olga-green';
  // Дефолтний стиль

  const iconStyles =
    designType === 'designByOlga' &&
    'stroke-olga-green hover:fill-olga-green-extra hover:stroke-black h-8 w-16';

  return (
    <button
      className={cn(
        buttonStyles,
        'flex items-center justify-center rounded-full border border-solid transition-all',
        designType === 'designByOlga' && 'h-8 w-16',
        designType === 'designBySvitlana' && 'h-8 w-[55px]',
        className
      )}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {designType === 'designByOlga' && (
        <IconRow
          width={64}
          height={32}
          className={cn(
            iconStyles,
            'transition-stroke duration-500 ease-in-out'
          )}
        />
      )}
      {designType === 'designBySvitlana' && (
        <ICONS_SHARED.ARROW_SV_BTN className={cn(iconStyles)} />
      )}
    </button>
  );
};
