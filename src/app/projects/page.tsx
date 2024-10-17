import React from "react";
//import ColoredGirl from "../../components/Girl/ColoredGirl";
import dynamic from "next/dynamic";

const ColoredGirl = dynamic(() => import("@/components/Girl/ColoredGirl"), {
  ssr: false,
});
// const WhiteGirl = dynamic(() => import("@/components/Girl/WhiteGirl"), {
//   ssr: false,
// });

const Page = (): JSX.Element => {
  return (
    <div className="flex ">
      <ColoredGirl />
      {/* <WhiteGirl /> */}
    </div>
  );
};

export default Page;
