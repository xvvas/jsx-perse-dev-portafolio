//css
import "./BioAboutMeContent.css"

//utils
import { TypeBody1, TypeH2 } from "@cu/fonts/Type";
import { ContainerSection } from "@cu/containers/Containers";
import { BtnArrowDown } from "@/components/util/interface/btns/Btns";

export default function BioAboutMeContent() {
    return (
        <ContainerSection className="BioAboutMeContent">
            <div className="bioAboutMeContent__content">
                <TypeH2>Un poco sobre mi</TypeH2>
                <TypeBody1>
                    Tengo una historia Curiosa, ya que soy profesional en Comunicación Audiovisual, sin embargo, siempre fui un fanático de la tecnología,
                    así que llego un punto de mi vida donde decidí tomar riendas y domar al toro tecnológico por los cuernos, aprendiendo por mi cuenta buscando
                    siempre nuevos conocimientos y retos, es allí cuando entro directamente al sector del desarrollo como Front End y Diseñador UI, lo cual me
                    permite tener un equilibrio entre mis dos pasiones, el diseño y la tecnología.
                </TypeBody1>
            </div>
            <div className="bioAboutMeContent__initScroll">
                <BtnArrowDown label="Continua" />
            </div>
        </ContainerSection>
    )
}