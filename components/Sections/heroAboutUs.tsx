"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AboutUsProps {
  data: {
    title: string;
    description: string;
    mainImage: {
      src: string;
      alt: string;
    };
    secondaryImage: {
      src: string;
      alt: string;
    };
    breakout: {
      src: string;
      alt: string;
      title: string;
      description: string;
      buttonText: string;
      buttonUrl: string;
    };
    achievementsTitle: string;
    achievementsDescription: string;
    achievements: {
      label: string;
      value: string;
    }[];
  };
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export function Hero({ data }: AboutUsProps) {
  const {
    mainImage,
    secondaryImage,
    breakout,
    achievementsTitle,
    achievementsDescription,
    achievements,
  } = data;

  return (
    <section className="w-full px-4">
      <div className="w-full max-w-7xl mx-auto">

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          <div className="flex flex-col gap-2">

            <motion.div
              className="flex flex-col justify-between gap-2 rounded-3xl bg-accent  p-7 text-white"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <p className="mb-2 text-4xl font-bold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Link 
                  href={breakout.buttonUrl}
                >
                <div className=" w-full mt-8 p-3 dark:bg-accent-foreground  dark:hover:bg-primary bg-primary-foreground text-accent  flex justify-center items-center rounded-3xl hover:shadow-2xl hover:shadow-white/[0.1] hover:bg-primary hover:text-primary-foreground dark:hover:text-accent-foreground transition-all duration-300 ease-in-out hover:-translate-y-2">
                  <button className=" font-semibold"> 
                    {breakout.buttonText}
                  </button>
                </div>
              </Link>

            </motion.div>

            <motion.div
              className="relative w-full overflow-hidden rounded-xl mt-2"
              style={{ paddingTop: '66.66%' }}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block md:col-span-1 lg:col-span-2 relative w-full overflow-hidden rounded-3xl"
            style={{ paddingTop: '66.66%' }}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 0px, (max-width: 1024px) 50vw, 66vw"
              priority
            />
          </motion.div>

        </div>

        <motion.div
          className="relative overflow-hidden rounded-3xl bg-accent mt-12 p-10 md:p-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-accent-foreground">{achievementsTitle}</h2>
            <p className="max-w-screen-sm text-base md:text-lg text-accent-foreground">
              {achievementsDescription}
            </p>
          </div>
          <motion.div
            className="mt-10  grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {achievements.map((item, idx) => (
              <motion.div
                className="flex flex-col gap-2 flex-shrink-0"
                key={item.label + idx}
                variants={fadeIn}
              >
                <div className="h-full justify-center flex items-center">
                  <p className="text-base text-accent-foreground ">{item.label}</p>

                </div>
                <span className="text-2xl md:text-3xl font-semibold text-accent-foreground">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </motion.div>
      </div>
    </section>
  );
}