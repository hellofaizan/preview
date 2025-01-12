import { IconBrandX } from "@tabler/icons-react";
import React from "react";

export default function Twitter({ data }: { data: any }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* app name */}
      <div className="flex items-center gap-1 rounded-lg border w-max text-sm p-1 px-3 bg-muted/35">
        <IconBrandX size={16} />
        Twitter
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="relative">
          <img
            src={data.img}
            className="w-full rounded-2xl border"
            alt="Image"
          />
          <p className="absolute bottom-[10px] text-white text-sm left-4 z-10">
            {data.title}
          </p>
        </div>
        <p className="text-xs font-light text-gray-600 dark:text-gray-400">From {data.requestUrl}</p>
      </div>
    </div>
  );
}
