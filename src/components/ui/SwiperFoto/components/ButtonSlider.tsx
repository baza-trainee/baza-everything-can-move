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
      : designType === 'designBySvitlana'
        ? 'border-svitlana-purple hover:bg-white'
        : 'border-default hover:bg-default'; // Дефолтний стиль

  const iconStyles =
    designType === 'designByOlga'
      ? 'stroke-olga-green hover:fill-olga-green-extra hover:stroke-black h-8 w-16'
      : designType === 'designBySvitlana'
        ? 'stroke-svitlana-blue hover:fill-svitlana-blue-extra stroke-white hover:stroke-s-gray' // Стилі для Світлани
        : 'stroke-default hover:fill-default-extra stroke-black'; // Дефолтні стилі

  return (
    <button
      className={cn(
        buttonStyles,
        'flex h-8 w-16 items-center justify-center rounded-full border border-solid transition-all',
        className
      )}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <IconRow
        // width={64}
        // height={32}
        className={cn(iconStyles, 'transition-stroke duration-500 ease-in-out')}
      />
    </button>
  );
};
