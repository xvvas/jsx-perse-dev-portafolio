//css
import "./AboutMeContent.css"
//utils
import { TypeBody2, TypeH2, TypeH3 } from "@cu/fonts/Type"
import { ContainerCard, ContainerSection } from "@cu/containers/Containers"
import { BtnArrowDown, BtnOutline } from "@cu/interface/btns/Btns"

export default function AboutMeContent() {
    return (
        <ContainerSection className="AboutMeContent">
            <div className="aboutMeContent__head">
                <TypeH2>Vamos a trabajar juntos</TypeH2>
                <TypeBody2>Me gusta aventurarme en proyectos web, desde una simple Landing-Page hasta aplicaciones web robustas, igualmente siempre estoy abierto a colaborar en proyectos Open Source, así que si consideras que mis habilidades funcionan en tu proyecto, no dudes en escribirme</TypeBody2>
            </div>
            <div className="aboutMeContent__content">
                <div className="aboutMeContent__cards">
                    <ContainerCard className={"aboutMeContent__card"}>
                        <TypeH3>React</TypeH3>
                        <TypeBody2>Soy un gran fan de las tecnologías de vanguardia, principalmente aquellas que puedan potenciar en gran medida los proyectos y mejorar su viabilidad a largo plazo.</TypeBody2>
                    </ContainerCard>
                    <ContainerCard className={"aboutMeContent__card"}>
                        <TypeH3>Figma</TypeH3>
                        <TypeBody2>Gracias a mi primera experiencia en UX/UI, descubrí una herramienta que no solo me introdujo en este campo, sino que también facilitó mi transición al mundo del desarrollo. Ha sido una invaluable aliada a lo largo de mi trayectoria.</TypeBody2>
                    </ContainerCard>
                    <ContainerCard className={"aboutMeContent__card"}>
                        <TypeH3>JavaScript</TypeH3>
                        <TypeBody2>El CMS headless que rompe barreras. Su enfoque flexible y la total libertad que da en el front-end lo convierte en rival ideal de CMS tradicionales como WordPress.</TypeBody2>
                    </ContainerCard>
                </div>
                <div className="aboutMeContent__cta">
                    <BtnOutline label={"Consulta"}/>
                </div>
                <div className="aboutMeContent__initScroll">
                    <BtnArrowDown label="Ver más"/>
                </div>
            </div>     
        </ContainerSection >
    )
}