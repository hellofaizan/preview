import React from "react";
import { IconBrandGoogle } from "@tabler/icons-react";

export default function Google({ data }: { data: any }) {
  const url = data.url.replace(/^https?:\/+/, "");
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* app name */}
      <div className="flex items-center gap-1 rounded-lg border w-max text-sm p-1 px-3 bg-muted/35">
        <IconBrandGoogle size={16} />
        Google
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-[2px]">
          {data.icon && (
            <img
              src={data.icon}
              alt="Author"
              className="w-6 h-6 rounded-full mr-2 border"
            />
          )}
          <span className="text-sm text-gray-800 dark:text-gray-300 font-normal">{url}</span>
        </div>

        <div className="flex flex-col overflow-hidden mt-2">
          <h1 className="text-xl font-medium text-[#2763c3] dark:text-[#5087e0] truncate">
            {data.title}
          </h1>

          <p className="text-sm line-clamp-2">
          {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
