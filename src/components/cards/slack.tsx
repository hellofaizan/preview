import { IconBrandSlack } from "@tabler/icons-react";
import React from "react";

export default function Slack({ data }: { data: any }) {
  const username = data.url
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      {/* app name */}
      <div className="flex items-center gap-1 rounded-lg border w-max text-sm p-1 px-3 bg-muted/35">
        <IconBrandSlack size={16} />
        Slack
      </div>

      <div className="flex justify-end mb-4 overflow-hidden">
        <div className="max-w-3xl w-full">
          {/* Message container */}
          <div className="flex gap-3">
            {/* User avatar */}
            <div className="w-9 h-9 rounded overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Message content */}
            <div className="flex-1">
              {/* User name and timestamp */}
              <div className="flex items-baseline gap-2">
                <span className="font-bold">Olivia Watkins</span>
                <span className="text-sm text-gray-500">10:18 AM</span>
              </div>

              {/* Link */}
              <p className="text-[#1264A3] hover:underline">{data.url}</p>

              {/* Link preview card */}
              <div className="mt-2 border dark:bg-muted w-[80%] rounded-lg overflow-hidden max-w-2xl">
                {/* Card header */}
                <div className="p-2 px-3 border-b">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8">
                      <img
                        src={data.icon}
                        alt="Slack"
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-lg">{username}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#1264A3] dark:text-[#4c9fde] mt-2">
                    {data.title}
                  </h2>
                  <p className="text-gray-700 text-sm dark:text-muted-foreground mt-1">{data.description}</p>
                </div>

                {/* Preview image */}
                <div className="bg-[#F8F9FA]">
                  <img
                    src={data.image}
                    alt="Slack features preview"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
