import clsx from 'clsx';

interface LabelProps {
  textTop: string;
  number: number; // Використовуємо "number" замість "percentNumber"
  showPercentage?: boolean; // Додаємо прапорець для відсотків
  textBottom: string;
  className?: string;
}

function Label({
  textTop = 'чоловіків',
  number = 100,
  showPercentage = true, // Встановлюємо показ відсотка за замовчуванням
  textBottom = 'в складі',
  className,
}: LabelProps) {
  return (
    <div
      className={clsx(
        'w-max text-s leading-o-130 text-white xl:text-m',
        className
      )}
    >
      <p className="">{textTop}</p>
      <span className="text-lg font-medium leading-o-130 text-olga-green xl:text-2xl">
        {number}
        {showPercentage ? '%' : ''} {/* Додаємо % тільки якщо showPercentage = true */}
      </span>
      <p className="max-w-40 lg:max-w-60">{textBottom}</p>
    </div>
  );
}

export default Label;
