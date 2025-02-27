"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, ChevronRightIcon } from "lucide-react";


export function AnimatedSubscribeButtonDemo() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={isSubscribed ? "subscribed" : "subscribe"}
        onClick={() => setIsSubscribed(!isSubscribed)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, backgroundColor: isSubscribed ? "#16a34a" : "#F97316" }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="relative flex items-center justify-center overflow-hidden rounded-2xl py-2 px-6 font-semibold text-white"
      >
        {isSubscribed ? (
          <motion.span
            key="subscribed"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center"
          >
            <CheckIcon className="mr-2 size-4" /> Subscribed
          </motion.span>
        ) : (
          <motion.span
            key="subscribe"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center"
          >
            Subscribe <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300" />
          </motion.span>
        )}
      </motion.button>
    </AnimatePresence>
  );
}
