import React from "react";
//import ColoredGirl from "../../components/Girl/ColoredGirl";
import dynamic from "next/dynamic";

const ColoredGirl = dynamic(() => import("@/components/Girl/ColoredGirl"), {
  ssr: false,
});
const WhiteGirl = dynamic(() => import("@/components/Girl/WhiteGirl"), {
  ssr: false,
});
const WhiteTrGirl = dynamic(() => import("@/components/Girl/WhiteTrGirl"), {
  ssr: false,
});

const Page = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row">
      <ColoredGirl />
      <WhiteTrGirl />
      <WhiteGirl />
    </div>
  );
};

export default Page;
