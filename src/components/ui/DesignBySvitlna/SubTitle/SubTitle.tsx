import { Cover } from './Cover';
import { cn } from '@/lib/utils';

export function SubTitle({
  text = 'на базі',
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative h-[34px] w-[126px] border-[1px] border-solid border-white text-md text-white lg:h-[58px] lg:w-[216px] lg:text-lg',
        className
      )}
    >
      <Rectangle className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
      <Rectangle className="right-0 top-0 -translate-y-1/2 translate-x-1/2" />
      <Rectangle className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <Rectangle className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
      <Cover className="flex items-center justify-center font-second-family font-medium uppercase leading-s-100 tracking-custom-tight lg:leading-o-120">
        {text}
      </Cover>
    </div>
  );
}

function Rectangle({ className }: { className: string }) {
  return (
    <div
      className={cn(
        'absolute h-[6px] w-[6px] bg-s-purple lg:h-2 lg:w-2',
        className
      )}
    ></div>
  );
}
