import LandingFooter from "@cg/landingFooter/landingFooter";
import LandingNav from "@cg/landingNav/landingNav";
import Home from "@ce/landing/Home";


export default function LandingTemplate() {
    return (
        <>
            <LandingNav />
            <Home />
            <LandingFooter/>
        </>
    )
}