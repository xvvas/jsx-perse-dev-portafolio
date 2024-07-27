//css
import "./BioContactContent.css"
//utils
import { ContainerCard, ContainerSection } from "@cu/containers/Containers";
import { TypeBody2, TypeSubTitle1 } from "@cu/fonts/Type";
import { IconFigma, IconGitHub, IconInstagram, IconLinkedIN } from "@cu/icons/Icons";

export default function BioContactContent() {
    return (
        <ContainerSection className="BioContactContent">
            <div className="bioContactContent_content">
                <ContainerCard className="bioContactContent__card">
                    <TypeSubTitle1 className="bioContactContent__cardTitle">Redes Sociales</TypeSubTitle1>
                    <TypeBody2 className="bioContactContent__cardTxt">Ponte en contacto conmigo a través de las redes sociales.</TypeBody2>
                    <div className="bioContactContent__icons">
                        <IconGitHub />
                        <IconFigma />
                        <IconInstagram />
                        <IconLinkedIN />
                    </div>
                </ContainerCard>
            </div>
        </ContainerSection>
    )
}