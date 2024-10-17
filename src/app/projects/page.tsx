import React from "react";
//import ColoredGirl from "../../components/Girl/ColoredGirl";
import dynamic from "next/dynamic";

const ColoredGirl = dynamic(() => import("@/components/Girl/ColoredGirl"), {
  ssr: false,
});

const Page = (): JSX.Element => {
  return (
    <>
      <ColoredGirl />
    </>
  );
};

export default Page;
