import Label from './Label';
import clsx from 'clsx';
import MoveLine from '@/components/ui/MoveLine';

function SectionStatistic() {
  return (
    <section className="relative py-5">
      <MoveLine
        className="absolute"
        position="top"
        direction="right"
        duration={60}
      />
      <div
        className={clsx(
          'relative bg-[url("/assets/images/TemSection/VectorMobile.svg")] bg-cover bg-center bg-no-repeat lg:bg-[url("/assets/images/TemSection/VectorTablet.svg")] 2xl:bg-[url("/assets/images/TemSection/VectorDesctop.svg")]'
        )}
      >
        <div className="container z-10">
          <ul className="grid h-[636px] grid-cols-2 xl:grid-cols-3">
            <li className="relative">
              <Label
                className={'transform lg:translate-x-20 lg:translate-y-28'}
                textTop="чоловіків"
                textBottom="в складі команд"
                percentNumber={62}
              />
            </li>
            <li className="relative">
              <Label
                className="translate-y-20 transform lg:translate-x-32 xl:translate-x-52"
                textTop="учасників"
                textBottom="знаходяться за межами України"
                percentNumber={32}
              />
            </li>
            <li className="relative">
              <Label
                className="transform lg:translate-x-60 lg:translate-y-44"
                textTop="учасників"
                textBottom="студенти ВНЗ"
                percentNumber={46}
              />
            </li>
            <li className="relative">
              <Label
                className="translate-x-2 translate-y-20 transform lg:translate-x-16"
                textTop="жінок"
                textBottom="в складі команд"
                percentNumber={38}
              />
            </li>
            <li className="relative">
              <Label
                className="translate-x-3 translate-y-0 transform lg:translate-x-20"
                textTop="учасників"
                textBottom="світчери"
                percentNumber={40}
              />
            </li>
            <li className="relative">
              <Label
                className="translate-x-3 translate-y-20 transform"
                textTop="учасників"
                textBottom="навчаються самостійно"
                percentNumber={32}
              />
            </li>
          </ul>
        </div>
      </div>
      <MoveLine
        className="absolute"
        position="bottom"
        direction="left"
        duration={60}
      />
    </section>
  );
}

export default SectionStatistic;
