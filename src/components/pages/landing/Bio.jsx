
//content
import BioAcademicContent from "@cc/bio/bioAcademicContent/BioAcademicContent";
import BioContactContent from "@cc/bio/bioContactContent/BioContactContent";
import BioProfesionalPathContent from "@cc/bio/bioProfesionalPathContent/BioProfesionalPathContent";
import BioAboutMeContent from "@cc/bio/bioAboutMeContent/BioAboutMeContent";
import BioMainContent from "@cc/bio/bioMainContent/BioMainContent";


export default function Bio() {
    return (
        <>
            <BioMainContent/>
            <BioAboutMeContent/>
            <BioAcademicContent/>
            <BioProfesionalPathContent/>
            <BioContactContent/>
        </>
    )
}