import ButtonContact from '@/components/ui/ButtonContact/ButtonContact';

import Image from 'next/image';

function ButtonJoin() {
  return (
    <div className="flex items-center justify-center p-[70px] lg:w-full lg:max-w-[368px] lg:py-[64px] 2xl:max-w-[658px]">
      <div className="relative">
        <Image
          className=""
          width={200}
          height={200}
          alt="circles"
          src={'/assets/images/PageTeam/iconTwoCircle.svg'}
        />
        <ButtonContact className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
      </div>
    </div>
  );
}

export default ButtonJoin;
