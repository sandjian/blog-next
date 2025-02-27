import { CTA } from "@/components/Sections/CTA";
import TeamSection from "@/components/Sections/ourTeam";

export default function AuthorsList(){
    return(
        <main className="w-full h-full pb-8 p-4">
            <TeamSection/>
            <CTA/>
        </main>
    )
}