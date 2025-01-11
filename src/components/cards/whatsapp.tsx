import React from "react";
import { IconBrandDiscord, IconBrandWhatsapp } from "@tabler/icons-react";
import { CheckCheck } from "lucide-react";

export default function WhatsApp({ data }: { data: any }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* app name */}
      <div className="flex items-center gap-1 rounded-lg border w-max text-sm p-1 px-3 bg-muted/35">
        <IconBrandWhatsapp size={16} />
        WhatsApp
      </div>

      <div className="w-full">
        {/* Message bubble */}
        <div className="flex justify-end">
          <div className="bg-[#c6fabd] dark:bg-[#5dc74a] rounded-t-lg rounded-bl-lg rounded-br-md shadow-sm max-w-[55%] relative">
            {/* Link preview card */}
            <div className="p-[3px] overflow-hidden">
              {/* Image container */}
              <img src={data.image} className="rounded-t-lg" alt="" />
              <div className="bg-[#bbf5af]/85 dark:bg-[#4bbc34]/85 h-max w-full overflow-hidden rounded-b-lg p-2 py-2 flex flex-col gap-1">
                <h1 className="font-semibold text-sm font-sans">{data.title}</h1>
                <p className="text-xs truncate">{data.description}</p>
              </div>
            </div>

            <div className="p-[2px] px-3 pb-2 flex justify-between items-center">
              <p className="text-sm underline text-green-700 dark:text-neutral-800 font-semibold font-sans">
                {data.url}
              </p>
              <CheckCheck size={14} className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
