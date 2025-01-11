import React from "react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full fixed bottom-0 justify-center z-10 ">
      <div className="max-w-[38rem] flex items-center gap-1 p-3 px-5 border bg-white dark:bg-black w-full rounded-t-xl shadow-md text-sm">
        <p>Made by</p>
        <Link
          href={"https://mohammadfaizan.in"}
          target="_blank"
          className="font-semibold underline"
        >
          Mohammad Faizan
        </Link>
      </div>
    </div>
  );
}
