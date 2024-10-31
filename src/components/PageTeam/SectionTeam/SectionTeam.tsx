import Image from 'next/image';
import SectionTitle from '../../ui/SectionTitle';
import MainImage from './MainImage';
// import SubTitle from '@/components/ui/SubTitle';

function SectionTeam() {
  return (
    <section className="pb-16 pt-10">
      <div className="container">
        <div className="relative pb-12">
          <Image
            src={'/assets/icons/corner.svg'}
            className="absolute bottom-0 left-0"
            width={16}
            height={16}
            alt="corners"
          />
          <Image
            src={'/assets/icons/corner.svg'}
            className="absolute right-0 top-0 rotate-180"
            width={16}
            height={16}
            alt="corners"
          />
          <div className="">
            <SectionTitle className="text-xl">команди</SectionTitle>
            {/* <SubTitle className="mt-1">{'Об`єднані ідеєю'}</SubTitle> */}
          </div>
          <div className="mt-8 flex flex-col items-center justify-between xl:flex-row">
            <MainImage />

            <p className="z-[90] max-w-[346px] text-sm font-normal leading-snug">
              Об&#39;єднані для створення якісних вебсайтів та мобільних
              застосунків з благодійною метою. Наші команди - це синергія
              спільного знання та ентузіазму. Ми об&#39;єднуємо спеціалістів
              різних напрямків, які разом працюють над кожним проєктом, щоб
              реалізувати важливу ідею.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTeam;

// import clsx from 'clsx';
// import { ICONS_SHARED } from '@/constants/icons/iconsSrc';

// interface SubTitleProps {
//   children: React.ReactNode;
//   className?: string;
// }

// export default function SubTitle({ children, className }: SubTitleProps) {
//   return (
//     <div
//       className={clsx(
//         'flex items-center font-main-family text-xs font-regular leading-o-150 text-white lg:text-s',

//         className
//       )}
//     >
//       <ICONS_SHARED.ELIPSE_SUB_TITLE className="mr-1 2xl:mr-[6px]" />
//       <span>{children}</span>
//     </div>
//   );
// }
// Example how to use
// <SubTitle className="mb-8"> Долучайтесь</SubTitle>
