"use client";

import Image from "next/image";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

import { WhyChooseUsAboutData } from "@/lib/constants";

interface WhyChooseUsProps {
  data?: {
    breakout: {
      title: string;
      description: string;
    };
    spotlightCards: {
      title: string;
      description: string;
    }[];
    images: {
      mainImage: {
        src: string;
        alt: string;
      };
      secondaryImage: {
        src: string;
        alt: string;
      };
    };
    achievementsSection: {
      title: string;
      description: string;
      achievements: {
        label: string;
        value: string;
      }[];
    };
  };
}


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};


export const WhyChooseUsSection = ({ data = WhyChooseUsAboutData }: WhyChooseUsProps) => {
  const { breakout, spotlightCards, images, achievementsSection } = data;


  return (
    <section className="w-full py-32">
      <div className="w-full max-w-7xl m-auto p-4">
        <motion.div
          className="grid gap-6 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex flex-col w-full lg:col-span-2"
            variants={itemVariants}
          >
            <div className="flex flex-col justify-between gap-3 py-2 px-4 w-full">
              <motion.div className="w-full" variants={itemVariants}>
                <h2 className="mb-2 text-4xl font-semibold text-foreground dark:text-accent-foreground">{breakout.title}</h2>
                <p className="text-foreground dark:text-accent-foreground">{breakout.description}</p>
              </motion.div>

              <motion.div
                className="w-full mt-3 lg:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2 "
                variants={containerVariants}
              >
                {spotlightCards.slice(0, 2).map((card, index) => (
                  <motion.div variants={itemVariants} key={index}>
                    <div
                      className="magic-card gap-2 w-full h-full bg-accent flex flex-col items-center text-center p-6 rounded-xl shadow-sm"

                    >
                      <Zap className="size-6 text-white" />
                      <h4 className="text-xs lg:text-sm font-semibold mt-2 text-accent-foreground">
                        {card.title}
                      </h4>
                      <p className="text-xs lg:text-xs text-accent-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <Image
                src={images.secondaryImage.src}
                alt={images.secondaryImage.alt}
                width={500}
                height={300}
                className="w-full mt-3 h-52 grow basis-0 rounded-3xl object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Image
              src={images.mainImage.src}
              alt={images.mainImage.alt}
              width={800}
              height={720}
              className="size-full max-h-[720px] rounded-3xl object-cover lg:col-span-2"
            />
          </motion.div>
        </motion.div>


        <motion.div
          className="relative overflow-hidden rounded-xl bg-stone-200 dark:bg-neutral-800/70 my-12 p-10 md:p-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex flex-col gap-4 text-center md:text-left"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-semibold text-foreground dark:text-accent-foreground">
              {achievementsSection.title}
            </h2>
            <p className="max-w-screen-sm text-foreground dark:text-accent-foreground">
              {achievementsSection.description}
            </p>

          </motion.div>
          <motion.div
            className="mt-10  grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
            variants={containerVariants}
          >
            {achievementsSection.achievements.map((item, idx) => (
              <motion.div
                className="flex flex-col gap-2 flex-shrink-0"
                key={item.label + idx}
                variants={itemVariants}
              >
                <div className="h-full justify-center flex items-center">
                  <p className="text-base text-foreground dark:text-accent-foreground">{item.label}</p>

                </div>
                <span className="text-2xl text-foreground dark:text-accent-foreground font-semibold md:text-3xl">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Image
              src={images.mainImage.src}
              alt={images.mainImage.alt}
              width={800}
              height={720}
              className="size-full max-h-[720px] rounded-3xl object-cover lg:col-span-2"
            />
          </motion.div>

          <motion.div
            className="flex flex-col w-full lg:col-span-2"
            variants={itemVariants}
          >
            <div className="flex flex-col justify-between gap-3 py-2 px-4 w-full">
              <motion.div className="w-full" variants={itemVariants}>
                <h2 className="mb-2 text-4xl font-semibold text-foreground dark:text-accent-foreground">{breakout.title}</h2>
                <p className="text-foreground dark:text-accent-foreground">{breakout.description}</p>
              </motion.div>

              <motion.div
                className="w-full mt-3 lg:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2 "
                variants={containerVariants}
              >
                {spotlightCards.slice(2, 4).map((card, index) => (
                  <motion.div variants={itemVariants} key={index}>
                    <div
                      className="magic-card gap-2 w-full h-full bg-accent flex flex-col items-center text-center p-6 rounded-xl shadow-sm"

                    >
                      <Zap className="size-6 text-white" />
                      <h4 className="text-xs lg:text-sm font-semibold mt-2 text-accent-foreground">
                        {card.title}
                      </h4>
                      <p className="text-xs lg:text-xs text-accent-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <Image
                src={images.secondaryImage.src}
                alt={images.secondaryImage.alt}
                width={500}
                height={300}
                className="w-full mt-3 h-52 grow basis-0 rounded-3xl object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};