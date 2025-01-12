import { IconBrandTelegram } from "@tabler/icons-react";
import { CheckCheck } from "lucide-react";
import React from "react";

export default function Telegram({ data }: { data: any }) {
  return (
    <div className="flex flex-col gap-2 w-full overflow-hidden">
      {/* app name */}
      <div className="flex items-center gap-1 rounded-lg borde w-max text-sm p-1 px-3 bg-muted/35">
        <IconBrandTelegram size={16} />
        Telegram
      </div>

      <div className="flex justify-end mb-4 overflow-hidden">
        <div className="bg-[#2EA6FF] dark:bg-[#3e9be2] rounded-t-xl rounded-bl-xl rounded-br-md shadow-sm max-w-[50%] text-white overflow-hidden">
          {/* Link preview */}
          <div className="space-y-1 overflow-hidden h-full">
            {/* URL */}
            <p className="block px-2 pt-2 text-sm underline font-sans">
              {data.requestUrl}
            </p>

            <div className="bg-[#fff]/15 overflow-hidden flex rounded-md m-2 px-[1px]">
              <div className="px-1 flex-1 py-1 max-h-max">
                <h2 className="font-medium text-xs font-sans">{data.title}</h2>
                <p className="text-xs opacity-90 mt-1">{data.description}</p>

                <img
                  src={data.img}
                  className="rounded-md w-full mt-1"
                  alt=""
                />
              </div>
            </div>

            {/* Timestamp */}
            <div className="px-3 pb-1 flex justify-end gap-2 items-center">
              <span className="text-xs opacity-70">12:05 PM</span>
              <CheckCheck size={14} className={"text-white"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
