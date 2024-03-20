import LandingFooter from "@/components/global/landingFooter/landingFooter";
import LandingNav from "@/components/global/landingNav/landingNav";
import Home from "@/components/pages/landing/Home";


export default function LandingTemplate() {
    return (
        <>
            <LandingNav />
            <Home />
            <LandingFooter/>
        </>
    )
}