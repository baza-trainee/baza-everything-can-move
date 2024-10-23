import Link from "next/link";
import React from "react";

type Props = {};

function PageTeam({}: Props) {
  return (
    <section className="py-16">
      <div className=" container flex flex-col gap-8 items-center justify-center text-white">
        <Link href={"/"}>Головна</Link>
        <h1 className=" text-[48] font-medium uppercase">Команди</h1>
      </div>
    </section>
  );
}

export default PageTeam;
