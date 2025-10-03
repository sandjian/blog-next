"use client";
import React from "react";
import { CalendarDaysIcon, HandHeartIcon } from "lucide-react";

export function CTA() {
  return (
    <div className="relative isolate overflow-hidden  ">
      <div className="relative z-10 w-full mx-auto max-w-7xl bg-neutral-700/60  dark:bg-neutral-900 px-6 lg:px-8 rounded-2xl  py-16">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 ">
          <div className="max-w-xl flex flex-col justify-center  lg:max-w-lg" >
            <h2 className="text-3xl font-bold text-accent-foreground relative mb-8">
              <span className="bg-primary dark:bg-neutral-700 mr-2 px-2 py-3 rounded-xl text-accent-foreground">Write on </span>
              BLOG.
            </h2>
            <p className="mt-2  text-accent-foreground">
              Go to your mail and start  typing your article with title & categories, attached your image/video file (if have).
            </p>
            <p className="mt-2  text-accent-foreground">
              type your personal information.
              (Name, Occupation, Address, Social media links)
            </p>
            <p className="mt-2  text-accent-foreground">
              <span className="font-semibold">
                Send it on:
              </span>

              <span className=" ml-2 hover:underline italic cursor-pointer">
                blog.info@example.com
              </span>
            </p>

          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-2xl bg-white dark:bg-neutral-700 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-accent text-neutral-400"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                By ad  revinue
              </dt>
              <dd className="mt-2 text-sm text-accent-foreground">
                Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-2xl bg-white dark:bg-neutral-700 p-2 ring-1 ring-white/10">
                <HandHeartIcon
                  aria-hidden="true"
                  className="size-6 text-accent  text-neutral-400"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                By affiliate  programmem
              </dt>
              <dd className="mt-2 text-sm text-accent-foreground">
                Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities.
              </dd>
            </div>
          </dl>
        </div>
      </div>

    </div>
  );
}
