import { CTA } from "@/components/Sections/CTA";
import { AboutUsHero } from "@/components/Sections/heroAboutUs";
import TeamSection from "@/components/Sections/ourTeam";
import { LogosCompanies } from "@/components/Sections/logosMarquee";

export default function AboutUs() {

    return (
        <main className="h-full w-full p-4">
            <AboutUsHero/>
            <LogosCompanies/>
            <TeamSection/>
            <CTA/>
        </main>
    );
}