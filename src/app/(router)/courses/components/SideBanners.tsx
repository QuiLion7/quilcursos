import { SideBannerList } from "@/utils/constants";
import Image from "next/image";
import React from "react";

function SideBanners() {
  return (
    <div>
      {SideBannerList.map((item, index) => (
        <div key={index} className="h-auto w-full">
          <Image
            src={item.banner.url}
            width={500}
            height={300}
            alt="banner"
            className="cursor-pointer rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}

export default SideBanners;
