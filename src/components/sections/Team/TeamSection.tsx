import Image from "next/image";
import Link from "next/link";
import React from "react";

function TeamSection() {
  return (
    <section className=" py-16">
      <div className=" container text-white relative">
        <Image
          className=" absolute left-0 bottom-0"
          alt="Низ"
          width={16}
          height={16}
          src={"/assets/images/TemSection/corner.svg"}
        />
        <Image
          className=" absolute right-0 rotate-180          top-0"
          alt="Низ"
          width={16}
          height={16}
          src={"/assets/images/TemSection/corner.svg"}
        />
        <h2 className=" text-5xl/normal font-medium uppercase">Команди</h2>
        <div className=" flex flex-row justify-between mt-8">
          <div className=" flex gap-14">
            <div className=" flex flex-col gap-12 justify-center">
              <ul className=" flex flex-col items-center gap-3">
                <li className=" ">
                  <div className=" w-[44px] h-[44px]  rounded-full bg-background"></div>
                </li>
                <li>
                  <div className="w-[64px] h-[64px] rounded-full bg-background"></div>
                </li>
                <li>
                  <div className=" w-[44px] h-[44px] rounded-full bg-background"></div>
                </li>
              </ul>
              <div className=" flex flex-col">
                <button type="button" className=" mb-3">
                  <Image
                    width={64}
                    height={33}
                    alt="Кнопка вліво"
                    src={"/assets/images/TemSection/IconRow.svg"}
                  />
                </button>
                <button type="button" className=" ">
                  <Image
                    width={64}
                    height={33}
                    alt="Кнопка вліво"
                    src={"/assets/images/TemSection/IconRow.svg"}
                    className=" rotate-180"
                  />
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/assets/images/TemSection/TeamMemberImage.jpg"
                width={365}
                height={389}
                alt="Фото учасника команди"
                className=" mb-1"
              />
              <p className=" text-center text-sm/normal ">
                Андрій Добрий QA Engineer
              </p>
            </div>
          </div>
          <div className=" max-w-[346px] flex flex-col gap-6 justify-center">
            <p className=" text-lg/snug ">
              На старті розвитку Бази на проєктах було залучено по 20-25 осіб до
              команди. <br />
              {""} <br /> Наразі наш оптимальний склад — до 10 учасників, це —
              до трьох дизайнерів, до трьох фронт девелоперів, до трьох
              тестувальників та Іван.
            </p>
            <Link href={"/team"} className=" flex ml-auto gap-2">
              <span>читати далі</span>
              <Image
                width={24}
                height={24}
                alt="Кнопка читати далі"
                src={"/assets/images/TemSection/icon_arrow.svg"}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
