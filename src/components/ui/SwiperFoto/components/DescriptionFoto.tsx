import { cn } from '@/lib/utils';

type Props = { title: string; description: string; className?: string };

function DescriptionFoto({ title, description, className }: Props) {
  return (
    <div
      className={cn(
        'flex h-[256px] flex-col items-center justify-center gap-2 font-regular leading-o-130',
        className
      )}
    >
      <h2 className="uppercase 2xl:text-l">{title || 'no title'}</h2>
      <p className="2xl:text-sm">{description || 'no description'}</p>
    </div>
  );
}

export default DescriptionFoto;
