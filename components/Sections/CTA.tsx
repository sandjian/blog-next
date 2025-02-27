"use client";
import React from "react";
import { CalendarDaysIcon, HandHeartIcon } from "lucide-react";

export function CTA() {
  return (
    <div className="relative isolate overflow-hidden  py-12 sm:py-16  mt-20 p-4">

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 rounded-2xl bg-neutral-200 dark:bg-neutral-800 py-16">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 ">
          <div className="max-w-xl flex flex-col justify-center  lg:max-w-lg" >
            <h2 className="text-3xl font-bold text-foreground relative mb-8">
              <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-primary-foreground">Write on </span>
              BLOG.
            </h2>
            <p className="mt-4 text-lg text-foreground">
              Go to your mail and start  typing your article with title & categories, attached your image/video file (if have).
            </p>
            <p className="mt-4 text-lg text-foreground">
              type your personal information.
              (Name, Occupation, Address, Social media links)
            </p>
            <p className="mt-4 text-lg text-foreground">

              Send it on: blog.info@example.com
            </p>

          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-2xl bg-white p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-accent"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-foreground">
              By ad  revinue
              </dt>
              <dd className="mt-2 text-base/7 text-foreground">
              Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-2xl bg-white p-2 ring-1 ring-white/10">
                <HandHeartIcon
                  aria-hidden="true"
                  className="size-6 text-accent"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-foreground">
              By affiliate  programmem
              </dt>
              <dd className="mt-2 text-base/7 text-foreground">
              Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
