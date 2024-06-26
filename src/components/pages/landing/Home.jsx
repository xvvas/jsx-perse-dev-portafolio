import { ContentWork } from "@/components/content/home/contentWork/ContentWork";
import AboutMeContent from "@cc/home/aboutMeContent/AboutMeContent";
import MainContent from "@cc/home/mainContent/MainContent";

export default function Home() {
    return (
        <>
            <MainContent />
            <AboutMeContent />
            <ContentWork />
        </>
    )
}