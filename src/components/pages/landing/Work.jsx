import WorkContactContent from "@/components/content/work/workContactContent/WorkContactContent";
import WorkProjectsContent from "@/components/content/work/workProjectsContent/WorkProjectsContent";
import WorkDescriptionContent from "@cc/work/workDescriptionContent/WorkDescriptionContent";
import WorkMainContent from "@cc/work/workMainContent/WorkMainContent";

export default function Home() {
    return (
        <>
            <WorkMainContent/>
            <WorkDescriptionContent/>
            <WorkProjectsContent/>
            <WorkContactContent/>
        </>
    )
}