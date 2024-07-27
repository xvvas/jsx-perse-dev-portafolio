import BioAcademicContent from "@/components/content/bio/bioAcademicContent/BioAcademicContent";
import BioProfesionalPathContent from "@/components/content/bio/bioProfesionalPathContent/BioProfesionalPathContent";
import BioAboutMeContent from "@cc/bio/bioAboutMeContent/BioAboutMeContent";
import BioMainContent from "@cc/bio/bioMainContent/BioMainContent";


export default function Bio() {
    return (
        <>
            <BioMainContent/>
            <BioAboutMeContent/>
            <BioAcademicContent/>
            <BioProfesionalPathContent/>
        </>
    )
}