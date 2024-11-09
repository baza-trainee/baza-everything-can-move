import { cn } from '@/lib/utils';

type Props = { title: string; description: string; className?: string };

function DescriptionFoto({ title, description, className }: Props) {
  return (
    <div
      className={cn(
        'flex h-[256px] flex-col items-start justify-start gap-5 font-regular leading-o-130 2xl:gap-3',
        className
      )}
    >
      <h2 className="text-md font-regular uppercase leading-o-130 2xl:text-l">
        {title || 'no title'}
      </h2>
      <p className="text-s font-regular leading-o-130 lg:text-m 2xl:text-sm">
        {description || 'no description'}
      </p>
    </div>
  );
}

export default DescriptionFoto;
