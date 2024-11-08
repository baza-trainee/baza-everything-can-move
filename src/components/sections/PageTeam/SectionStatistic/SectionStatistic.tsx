import Label from './Label';
import clsx from 'clsx';
import MoveLine from '@/components/ui/MoveLine';

function SectionStatistic() {
  return (
    <section className="relative overflow-hidden py-[20px] lg:py-[29px] 2xl:py-[21px]">
      <MoveLine
        type="singleLine"
        position="top-0"
        direction="right"
        duration={30}
      />
      <div className={clsx('bg-grid bg-grid-41 lg:bg-grid-20 2xl:bg-grid-90')}>
        <div className="container z-10">
          <ul className="grid h-[698px] grid-cols-2 lg:h-[338px] lg:grid-cols-3 2xl:h-[632px]">
            <li className="relative">
              <Label
                className={
                  'translate-x-5 translate-y-14 transform lg:translate-x-7 lg:translate-y-9 2xl:translate-x-24 2xl:translate-y-24'
                }
                textTop="чоловіків"
                textBottom="в складі команд"
                percentNumber={62}
              />
            </li>
            <li className="relative">
              <Label
                className="translate-x-16 translate-y-24 transform lg:translate-x-32 2xl:translate-x-52 2xl:translate-y-20"
                textTop="учасників"
                textBottom="знаходяться за межами України"
                percentNumber={32}
              />
            </li>
            <li className="relative">
              <Label
                className="translate-x-28 translate-y-2 transform lg:translate-x-24 lg:translate-y-5 2xl:translate-x-60 2xl:translate-y-44"
                textTop="учасників"
                textBottom="студенти ВНЗ"
                percentNumber={46}
              />
            </li>
            <li className="relative">
              <Label
                className="translate-x-10 translate-y-36 transform lg:translate-x-20 lg:translate-y-8 2xl:translate-x-16 2xl:translate-y-20"
                textTop="жінок"
                textBottom="в складі команд"
                percentNumber={38}
              />
            </li>
            <li className="relative">
              <Label
                className="-translate-y-9 translate-x-8 transform lg:translate-x-0 lg:translate-y-2 2xl:-translate-y-4 2xl:translate-x-20"
                textTop="учасників"
                textBottom="світчери"
                percentNumber={40}
              />
            </li>
            <li className="relative">
              <Label
                className="-translate-x-4 translate-y-20 transform lg:translate-x-8 lg:translate-y-8 2xl:translate-y-20"
                textTop="учасників"
                textBottom="навчаються самостійно"
                percentNumber={32}
              />
            </li>
          </ul>
        </div>
      </div>
      <MoveLine
        type="singleLine"
        position="bottom-0"
        direction="left"
        duration={30}
      />
    </section>
  );
}

export default SectionStatistic;
