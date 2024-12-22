//css
import "./ContentWork.css"

//utils
import { ContainerCard, ContainerSection } from "@cu/containers/Containers";
import { TypeBody2, TypeH3, TypeH4 } from "@cu/fonts/Type";
import { BtnLink } from "@cu/interface/btns/Btns";

export default function ContentWork() {
    return (
        <ContainerSection className="ContentWork">
            <div className="contentWork__head">
                <TypeH3>Un poco de mi trabajo</TypeH3>
            </div>
            <div className="contentWork__cards">
                <ContainerCard className="contentWork__card">
                    <div className="contentWork__cardHead">
                        <TypeH4>Rodriguez Law Group</TypeH4>
                        <BtnLink to={"https://rodriguez-lawgroup.com/"} label={"ver"} />
                    </div>
                    <TypeBody2>
                        Landing page realizada para la firma de abogados Rodriguez Law Group en Miami.
                        Este proyecto fue hecho con React.js y desplegado en Netlify, usando Netlify
                        forms para el formulario de contacto y la librería AOS para las animaciones.
                    </TypeBody2>
                </ContainerCard>
                <ContainerCard className="contentWork__card">
                    <div className="contentWork__cardHead">
                        <TypeH4>Printperfect</TypeH4>
                        <BtnLink to={"https://www.printperfect.ai/"} label={"ver"} />
                    </div>
                    <TypeBody2>
                        Proyecto enfocado en la creación de camisetas y estampados por medio de la ayuda de IA, el proyecto fue realizado con React.js y desplegado en AWS
                        consume una API Rest creada en Django por NSD co, personalmente me encargue del concepto y prototipado de la landing principal y algunos apartados e
                        interfaces internas.
                    </TypeBody2>
                </ContainerCard>
                <ContainerCard className="contentWork__card">
                    <div className="contentWork__cardHead">
                        <TypeH4>Nearshoredesign</TypeH4>
                        <BtnLink to={"https://www.nearshoredesign.co/"} label={"ver"} />
                    </div>
                    <TypeBody2>
                        Landign page creada para NDS co, Este proyecto fue hecho con React.js y desplegado en Vercel
                    </TypeBody2>
                </ContainerCard>
            </div>
            {/*
                            <div className="contentWork__initScroll">
                <BtnArrowDown label="Ver más" />
            </div>
            
            */}
        </ContainerSection>
    )
}