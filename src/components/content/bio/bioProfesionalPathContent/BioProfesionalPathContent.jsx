//css
import "./BioProfesionalPathContent.css"

//util
//import { BtnArrowDown } from "@cu/interface/btns/Btns"
import { ContainerCard, ContainerSection } from "@cu/containers/Containers"
import { TypeBody2, TypeH3, TypeH4, TypeSubTitle2 } from "@cu/fonts/Type"

export default function BioProfesionalPathContent() {


    const cardContent = [
        {
            title: 'Desarrollador de software',
            subtitle: 'Near Shore Design Co. · Profesional independiente - jun. 2023 - actualidad',
            description: 'Desarrollo de aplicaciones y herramientas web altamente personalizadas mediante el uso de tecnologías de vanguardia como React.js, Bootstrap, CSS y Axios. Además, proporciono asesoramiento integral en la concepción y diseño de prototipos visuales utilizando la plataforma Figma.'
        },
        {
            title: 'Desarrollador de software',
            subtitle: 'Primo Cash · Jornada completa sept. 2022 - jun. 2023',
            description: 'Desarrollo, consultoría y sostenimiento web, con experiencia en el desarrollo de herramientas y optimización de procesos para mejorar la eficiencia y productividad de la empresa Creación de aplicaciones y herramientas web personalizadas que se adaptan a las necesidades específicas de la compañía, brindando soluciones innovadoras y eficaces, mantenimiento y creación de Landing Pages para estrategias de publicidad y lanzamientos de nuevos productos y líneas de negocio. Colaboración activa con los departamentos administrativos y ventas para garantizar la finalización exitosa de los proyectos en tiempo y forma.'
        },
        {
            title: 'Project Manager',
            subtitle: 'Dayvo Sistemas · Jornada completa dic. 2021 - sept. 2022',
            description: 'Gestión de proyectos web, enfocados en la eficiencia y buscando oportunidades para que cada proyecto y su desarrollo se adapte a las necesidades particulares de cada uno de los clientes, en consecuencia que el sitio sea funcional, cumpla con los objetivos y posea una experiencia de uso efectiva de cara al usuario final.'
        }
    ]



    return (
        <ContainerSection className="BioProfesionalPathContent">
            <div className="bioProfesionalPathContent__content">
                <TypeH3 className="bioProfesionalPathContent__title">Mi Recorrido Laboral</TypeH3>
                {cardContent.map((item, index) => (
                    <ContainerCard key={index} className="bioProfesionalPathContent__card" animation={"fade-up"} duration={"2000"}>
                        <div className="bioProfesionalPathContent__cardHead">
                            <TypeH4>{item.title}</TypeH4>
                            <TypeSubTitle2>{item.subtitle}</TypeSubTitle2>
                        </div>
                        <div className="bioProfesionalPathContent__cardBody">
                            <TypeBody2>
                                {item.description}
                            </TypeBody2>
                        </div>
                    </ContainerCard>
                ))}
            </div>
            {/*
                <div className="bioProfesionalPathContent__initScroll">
                    <BtnArrowDown label="Conóceme" />
                </div>
            */}
        </ContainerSection>
    )
}