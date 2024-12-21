

//css
import "./WorkDescriptionContent.css"
//utils
import { ContainerSection } from "@cu/containers/Containers";
import { TypeBody1, TypeH2 } from "@cu/fonts/Type";
import { BtnArrowDown } from "@cu/interface/btns/Btns";

export default function WorkDescriptionContent() {
    return (
        <ContainerSection className="WorkDescriptionContent">
            <div className="workDescriptionContent__content">
                <TypeH2 className="workDescriptionContent__title">Front End Developer / Diseñador UI</TypeH2>
                <TypeBody1 className="workDescriptionContent__txt">
                    Como Front-end Developer, me especializo en la creación y mantenimiento de aplicaciones web y Landing Pages para estrategias de publicidad y lanzamientos de nuevos productos.
                    He trabajado en empresas tecnológicas, garantizando la finalización exitosa de proyectos en tiempo y forma.Mi trayectoria destaca por mi capacidad de adaptación y habilidad para resolver problemas de manera efectiva.
                    Además, poseo conocimientos técnicos en HTML, CSS, JavaScript, React.js y Python, los cuales me permiten desarrollar soluciones creativas y eficientes.Estoy comprometido a mantenerme actualizado en las últimas tendencias tecnológicas para brindar soluciones innovadoras y de alta calidad a mis clientes. Busco constantemente nuevos desafíos y oportunidades para seguir creciendo en el campo tecnológico.
                </TypeBody1>
            </div>
            <div className="workDescriptionContent__initScroll">
                <BtnArrowDown label="Conóceme" />
            </div>
        </ContainerSection>

    )
}