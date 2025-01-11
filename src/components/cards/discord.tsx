import React from "react";
import { IconBrandDiscord } from "@tabler/icons-react";

export default function Discord({ data }: { data: any }) {
  const username = data.url
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  return (
    <div className="flex flex-col gap-3 w-[68%] overflow-hidden">
      {/* app name */}
      <div className="flex items-center gap-1 rounded-lg border bg-white w-max text-sm p-1 px-3 bg-muted/35">
        <IconBrandDiscord size={16} />
        Discord
      </div>

      <div className="flex flex-col w-full">
        <p className="text-blue-600 hover:underline text-sm block mt-2">
          {data.url}
        </p>

        <div className="flex h-full gap-3 pr-5 rounded-lg bg-[#f5f5f5]/85 overflow-hidden md:text-lg">
          <div className="flex h-full w-[2px] flex-none rounded-lg bg-[#d4d4d4] md:w-1" />
          <div className="py-4 flex flex-col gap-2">
            <p className="text-xs block">{username}</p>
            <h1 className="text-base font-semibold font-sans text-blue-600">
              {data.title}
            </h1>
            <p className="text-xs font-sans">{data.description}</p>

            <img src={data.image} className="rounded-md" alt="" />
          </div>
        </div>

        <div className="mt-1 flex items-center gap-2">
          <div className="flex items-center gap-1 bg-gray-200 text-center p-1 px-2 rounded-md overflow-hidden text-xs cursor-pointer">
            <span className="text-red-500">❤️</span>
            <span className="text-gray-600">4</span>
          </div>
          <div className="flex items-center gap-1 bg-gray-200 text-center p-1 px-2 rounded-md overflow-hidden text-xs cursor-pointer">
            <span>🚀</span>
            <span className="text-gray-600">7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
