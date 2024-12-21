//css
import "./BlogIntroContent.css"

//utils
import { TypeBody1, TypeH2 } from "@cu/fonts/Type";
import { ContainerSection } from "@cu/containers/Containers";
import { BtnArrowDown } from "@cu/interface/btns/Btns";

export default function BlogIntroContent() {
    return (
        <ContainerSection className="BlogIntroContent">
            <div className="blogIntroContent__content">
                <TypeH2>El objetivo de mi blog</TypeH2>
                <TypeBody1>
                Mi experiencia en diferentes mundos como Project manager, Comunicador, Desarrollador y Diseñador UI me ha permitido conocer las motivaciones de los emprendedores, equipos de diseño y empresarios cuando necesitan los beneficios del desarrollo web para sus proyectos. Así he podido observar y vivir los errores, entender el porqué ocurren y encontrar soluciones al respecto, así como también encontrar aciertos y disfrutar de sus ventajas. Es esa experiencia la que quiero compartir aquí, la experiencia de un Desarrollador y comunicador que lejos de entrar en temas técnicos y abrumadores busca orientar a aquellos en sus procesos entorno a proyectos web, y permitir que desde su criterio puedan evaluar las decisiones que han tomado o están próximos a tomar sobre dichos procesos.
                </TypeBody1>
            </div>
            <div className="blogIntroContent__initScroll">
                <BtnArrowDown label="Continua" />
            </div>
        </ContainerSection>
    )
}