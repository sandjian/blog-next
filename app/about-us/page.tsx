import { CTA } from "@/components/Sections/CTA";
import { FeaturesSection } from "@/components/Sections/Features";
import TeamSection from "@/components/Sections/ourTeam";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const titleTextClasses = "mb-3 font-bold leading-tight text-foreground text-3xl";

  return (
    <main className="w-full p-2">
      <div className="w-full max-w-6xl mx-auto relative rounded-2xl bg-neutral-100 dark:bg-neutral-950/50 p-2 text-card-foreground md:max-h-[28rem] my-2">
        <div className="grid grid-cols-1 md:grid-cols-5 h-full">

          <div className="relative w-full lg:max-h-96 md:col-span-3 h-full rounded-2xl">
            <Image
              src="/3.jpg"
              alt="Imagen de About Us"
              className="h-full w-full bg-cover rounded-2xl"
              width={1080}
              height={720}
            />
          </div>

          <div className="flex flex-col justify-start p-6 md:p-8 md:col-span-2 h-full">
            <div>
              <h3 className={titleTextClasses}>
                The Art of Digital Transformation: Turning Vision into Value
              </h3>


              <p className="text-muted-foreground">
                We believe that technology isnt just a tool its the engine of modern growth. Our mission is to guide you through the complexities of the digital landscape, turning ambitious ideas into measurable, impactful results that future-proof your business.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="default" className="rounded-xl transition-all duration-300 hover:scale-105 bg-accent  text-accent-foreground hover:bg-primary hover:text-white">
                Explore Our Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <FeaturesSection />
      </div>

      <div className="w-full max-w-6xl m-auto py-6 ">
        <div className="w-full max-w-6xl mx-auto bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl p-4">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">

            <div className="bg-white rounded-2xl w-full h-full flex-1">
              <Image src={"/4.jpg"} alt="AboutUs" width={1080} height={720} className="w-full bg-cover rounded-2xl" />
            </div>

            <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
              <div className="mt-6">
                <h2 className="text-3xl font-bold text-primary dark:text-white relative mb-8">
                  <span className="bg-primary dark:bg-accent mr-2 px-2 py-3 rounded-xl text-accent-foreground">Our</span>
                  Philosophy
                </h2>
              </div>
              <div className="flex gap-2 flex-col">

                <p className="text-lg max-w-xl lg:max-w-md leading-relaxed tracking-tight text-foreground text-left">
                  Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
                </p>
                <p className="text-lg max-w-xl lg:max-w-md leading-relaxed tracking-tight text-foreground text-left ">
                  We champion simplicity and efficiency. We are dedicated to eliminating friction points, allowing entrepreneurs and small teams to focus on what truly matters: innovation and customer growth, not administrative drag.
                </p>
              </div>
            </div>
          </div>

          <TeamSection />
        </div>
      </div>

      <div className="w-full max-w-6xl m-auto">
        <CTA />
      </div>
    </main>
  );
}