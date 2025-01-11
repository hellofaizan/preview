import React from "react";
import { IconBrandFacebook } from "@tabler/icons-react";
import {
  MessageCircle,
  MoreHorizontal,
  Send,
  Share2,
  ThumbsUp,
  Users,
} from "lucide-react";

export default function Facebook({ data }: { data: any }) {
  const url = data.url.replace(/^https?:\/+/, "");
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* app name */}
      <div className="flex items-center gap-1 rounded-lg border w-max text-sm p-1 px-3 bg-muted/35">
        <IconBrandFacebook size={16} />
        Facebook
      </div>

      <div className="w-full dark:bg-muted rounded-lg shadow">
        {/* Post Header */}
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="flex items-center">
                  <h2 className="font-semibold text-lg">Olivia Watkins</h2>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-xs dark:text-muted-foreground">Just Now</p>
                  <Users size={14} />
                </div>
              </div>
            </div>
            <button className="text-gray-600 dark:text-muted-foreground p-2 rounded-full">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <p className="text-blue-600 hover:underline text-sm block mt-2">
            {data.url}
          </p>
        </div>

        <div className="border-t">
          <div className="">
            <img
              src={data.image}
              alt="HelloFaizan"
              className="w-full object-cover"
            />
            <div className="p-2 px-3 bg-gray-200 dark:bg-neutral-700/45">
              <p className="text-gray-500 dark:text-muted-foreground text-sm tracking-wide">
                {url}
              </p>
              <h3 className="font-semibold font-sans">
                {data.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Interaction Buttons */}
        <div className="px-4 py-2 border-t flex justify-between">
          <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 hover:dark:bg-neutral-700 dark:text-muted-foreground px-3 py-2 rounded-md">
            <ThumbsUp className="w-5 h-5" />
            <span className="text-sm font-medium">Like</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 hover:dark:bg-neutral-700 dark:text-muted-foreground px-3 py-2 rounded-md">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Comment</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 hover:dark:bg-neutral-700 dark:text-muted-foreground px-3 py-2 rounded-md">
            <Send className="w-5 h-5" />
            <span className="text-sm font-medium">Send</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 hover:dark:bg-neutral-700 dark:text-muted-foreground px-3 py-2 rounded-md">
            <Share2 className="w-5 h-5" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>

        {/* Comment Box */}
        <div className="p-4 border-t flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 rounded-full border px-4 py-2 bg-gray-200 dark:bg-neutral-700">
            <p className="text-gray-500 dark:text-muted-foreground text-md">Comment as Fayaz Ahmed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
