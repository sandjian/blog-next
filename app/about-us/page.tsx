import {  WhyChooseUsSection } from "@/components/Sections/AboutUsContent";
import { CTA } from "@/components/Sections/CTA";
import { Hero } from "@/components/Sections/heroAboutUs";
import TeamSection from "@/components/Sections/ourTeam";
import { AboutUsPageData, WhyChooseUsAboutData } from "@/lib/constants";

export default function AboutUs() {
  const { hero } = AboutUsPageData;
    return (
        <main className="h-full w-full p-4">
            <Hero data={hero}/>
                    <WhyChooseUsSection data={WhyChooseUsAboutData} />
            <CTA/>
            <TeamSection/>
        </main>
    );
}