import clsx from 'clsx';

interface LabelProps {
  textTop: string;
  percentNumber: number;
  textNumber?: string;
  textBottom: string;
  className?: string;
}

function Label({
  textTop = 'чоловіків',
  percentNumber = 100,
  textBottom = 'в складі',
  className,
}: LabelProps) {
  return (
    <div
      className={clsx(
        'w-max text-s leading-o-130 text-white xl:text-m 2xl:text-sm',
        className
      )}
    >
      <p className="">{textTop}</p>
      <span className="text-[36px] font-medium leading-o-130 text-olga-green lg:text-[40px] 2xl:text-2xl">
        {percentNumber}%
      </span>
      <p className="max-w-24  lg:max-w-32 2xl:max-w-60">{textBottom}</p>
    </div>
  );
}

export default Label;
