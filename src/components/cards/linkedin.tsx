import { IconBrandLinkedin } from "@tabler/icons-react";
import { MoreHorizontal } from "lucide-react";
import React from "react";

export default function LinkedIn({ data }: { data: any }) {
  const url = data.url.replace(/^https?:\/+/, "");
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* app name */}
      <div className="flex items-center gap-1 rounded-lg border w-max text-sm p-1 px-3 bg-muted/35">
        <IconBrandLinkedin size={16} />
        LinkedIn
      </div>

      <div className="w-full rounded-lg shadow-sm border dark:bg-muted">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-1">
                  <h2 className="font-semibold">Olivia Watkins</h2>
                  <span className="text-gray-500">• You</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">VP of a Big Company</p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <span>3w</span>
                  <span>•</span>
                </div>
              </div>
            </div>
            <button className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800/80 p-2 rounded-full">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="mt-2 text-gray-700 dark:text-gray-300">
            <p className=" text-sm">
              A CEO that I worked for seduced my wife in direct retaliation for
              my pushback on him at work. He won. I got divorced and left the
              company. When I say I truly understand how some executive teams
              can be political snake pits, I trust you will believe me. Learn
              from my pain - do the following:
            </p>
          </div>

          {/* Embedded Link Preview */}
          <div className="mt-3 border dark:border-white/20 rounded-lg overflow-hidden">
            <div className="flex p-2 items-center gap-2">
              <img
                src={data.image}
                alt="Preview"
                className="w-[22%] rounded-lg"
              />
              <div className="">
                <h3 className="font-medium text-sm">{data.title}</h3>
                <p className="text-sm dark:text-gray-400 text-gray-500 mt-1">{url}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
