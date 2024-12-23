//css
import "./ContactContent.css"
//util
import { TypeBody2, TypeH5, TypeSubTitle1 } from "@cu/fonts/Type";
import { ContainerCard, ContainerSection } from "@cu/containers/Containers";
import { IconFigma, IconGitHub, IconInstagram, IconLinkedIN } from "@cu/icons/Icons";

export default function ContactContent() {
    return (
        <ContainerSection className="ContactContent">
            <div className="contactContent__content">
                <ContainerCard className="contactContent__card" animation={"fade-up"} duration={"2000"}>
                    <TypeSubTitle1>Redes Sociales</TypeSubTitle1>
                    <TypeBody2>Ponte en contacto conmigo a través de las redes sociales.</TypeBody2>
                    <div className="contactContent__icons">
                        <IconGitHub/>
                        <IconFigma/>
                        <IconInstagram/>
                        <IconLinkedIN/>
                    </div>
                </ContainerCard>
                <div className="contactContent__quote" data-aos="fade-left" data-aos-duration="2000">
                    <TypeH5>
                        “¿Qué hace un desarrollador web cuando tiene hambre? ¡Come cookies con el código fuente”
                    </TypeH5>
                </div>
            </div>
        </ContainerSection>
    )
}