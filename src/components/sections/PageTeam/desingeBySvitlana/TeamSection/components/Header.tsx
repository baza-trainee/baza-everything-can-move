import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTilte';

function Header() {
  return (
    <div className="flex flex-col gap-6 lg:max-w-[694px] lg:flex-row lg:items-end lg:gap-0 2xl:max-w-[530px] 2xl:flex-col 2xl:items-start 2xl:gap-6">
      <AnimatedTitle className="top-0" title="Команда проєкту" />
      <div className="font-third-family text-m font-regular leading-o-150 2xl:text-l">
        <p className="lg:max-w-[324px] 2xl:hidden">
          Команда, яка працювала над проєктом{' '}
          <span className="font-medium">“ВСЕ, ЩО РУХАЄТЬСЯ”.</span>
        </p>
        <p className="hidden 2xl:block">
          Команда, яка працювала над цим проєктом. Він має назву
          <span className="font-medium"> “ВСЕ, ЩО РУХАЄТЬСЯ”.</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
