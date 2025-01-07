import AnimatedTitle from '@/components/ui/DesignBySvitlna/AnimatedTitle';

export default function OldBase() {
  return (
    <section className="old-base-section pb-[230px] pt-[114px]">
      <div className="container relative flex justify-end">
        <div className="text">
          <AnimatedTitle title="Старт" className="lg-text-[76px] mb-5" />
          <div className="
          z-10 max-w-[320px] font-third-family text-m font-regular leading-o-150 2xl:max-w-[580px] lg:text-l">
            <p>
              Ми почали робити перші проєкти в квітні 2023р. з метою підтримки й
              професійного розвитку джунів та світчерів до сфери IT.
            </p>
            <p className="mt-4">
              Зараз ми пишемо{' '}
              <span className="font-medium uppercase 2xl:font-semibold">
                внутрішні і зовнішні
              </span>{' '}
              проєкти як для себе, так і для наших партнерів.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
