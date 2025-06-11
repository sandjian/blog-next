'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ui/contact-form';
import { Globe, Mail, HelpCircle, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        when: 'beforeChildren',
        staggerChildren: 0.2
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const infoContainer = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2,
      },
    },
  };

  const infoItem = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center mx-auto gap-y-8 pb-6 p-4">
      <div className="mx-auto w-full container space-y-2">

        {/* Hero Banner with Primary Background */}
        <div className="relative isolate z-20 bg-primary flex flex-col items-center justify-center space-y-4 text-center mx-auto w-full max-w-7xl h-[28rem] rounded-2xl overflow-hidden">
          <motion.div
            className="z-50 space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-accent-foreground"
              variants={childVariants}
            >
              We d Love to Hear From You!
            </motion.h1>

            <motion.p
              className="max-w-7xl text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400"
              variants={childVariants}
            >
              We re eager to learn about your ideas, questions, and projects.
              <br className="hidden md:block" />
              Send us a message and let s start a conversation!
            </motion.p>
          </motion.div>
        </div>

        {/* Main Content Container (formerly red, now accent) - Overlapping the Hero Banner */}
        <div className="w-full m-auto max-w-5xl px-4 sm:px-8 relative z-30 -top-32"> {/* -mt-32 pulls it up, adjust as needed */}
          <div className="mx-auto mt-2 grid items-center lg:grid-cols-2 gap-6 lg:gap-16 max-w-7xl w-full bg-accent  p-6 rounded-2xl">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              className="divide-y divide-gray-200 "
              variants={infoContainer}
              initial="hidden"
              animate="show"
            >
              {/* Online Resources */}
              <motion.div className="flex gap-x-7 py-6" variants={infoItem}>
                <Globe className="shrink-0 size-6 mt-1.5 text-neutral-200" /> {/* Changed accent to primary for icon color */}
                <div className="grow">
                  <h3 className="font-semibold text-primary-foreground">Online Resources</h3> {/* Changed neutral-600 to foreground */}
                  <p className="mt-1 text-sm text-gray-200 ">
                    Find articles, tutorials, and guides to enhance your skills.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-300 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    Explore the Blog <ArrowRight className="h-4 w-4 inline-block ml-1" />
                  </a>
                </div>
              </motion.div>

              {/* Email Support */}
              <motion.div className="flex gap-x-7 py-6" variants={infoItem}>
                <Mail className="shrink-0 size-6 mt-1.5 text-neutral-200" /> {/* Changed accent to primary for icon color */}
                <div className="grow">
                  <h3 className="font-semibold text-primary-foreground">Email Support</h3> {/* Changed neutral-600 to foreground */}
                  <p className="mt-1 text-sm text-gray-200 ">
                    Need more personalized help? Send us an email and we ll get back to you!
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-300 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                    href="mailto:example@example.com"
                  >
                    Send Us a Message <ArrowRight className="h-4 w-4 inline-block ml-1" />
                  </a>
                </div>
              </motion.div>

              {/* Frequently Asked Questions */}
              <motion.div className="flex gap-x-7 py-6" variants={infoItem}>
                <HelpCircle className="shrink-0 size-6 mt-1.5 text-neutral-200" /> {/* Changed accent to primary for icon color */}
                <div className="grow">
                  <h3 className="font-semibold text-primary-foreground">Frequently Asked Questions</h3> {/* Changed neutral-600 to foreground */}
                  <p className="mt-1 text-sm text-gray-200 ">
                    Before contacting us, check out our most common questions.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-300 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    View FAQ <ArrowRight className="h-4 w-4 inline-block ml-1" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}