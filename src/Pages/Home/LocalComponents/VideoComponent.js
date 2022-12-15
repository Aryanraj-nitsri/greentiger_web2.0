import React from "react";
import Customwidth from "../../../Global Components/CustomWidth";

export default function VideoComponent({ url,text }) {
  return (
    <Customwidth>
      <div className="w-full h-[40rem] flex justify-between  items-center gap-20">
        {/* left side */}
        <div className="w-1/3 ">
          <p className="text-[#00aa13] text-3xl text-center">
            {text}
          </p>
        </div>
        {/* right side  */}
        <div className="w-8/12 flex-initial">
          <video src={url} muted autoPlay loop></video>
        </div>
      </div>
    </Customwidth>
  );
}
