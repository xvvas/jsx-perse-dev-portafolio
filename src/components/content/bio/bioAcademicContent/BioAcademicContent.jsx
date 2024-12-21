//css
import "./BioAcademicContent.css"

//utils
import { BtnLink } from "@cu/interface/btns/Btns"
import { ContainerCard, ContainerSection } from "@cu/containers/Containers"
import { TypeBody2, TypeH2, TypeSubTitle1 } from "@cu/fonts/Type"

export default function BioAcademicContent() {

    const cardsInfo = [
        {
            title: "Comunicación Audiovisual",
            place: "Politécnico Colombiano 'Jaime Isaza Cadavid'",
            date: "2016 - 2021",
            URL: ""
        },
        {
            title: "Curso Profesional de Git y GitHub",
            place: "Platzi",
            date: "abr. 2023",
            URL: "https://platzi.com/p/xvvas/curso/1557-git-github/diploma/detalle/"
        },
        {
            title: `Curso de Pensamiento Lógico: Manejo  de Datos, Estructuras y Funciones`,
            place: "Platzi",
            date: "may. 2023",
            URL: "https://platzi.com/p/xvvas/curso/3222-pensamiento-logico-estructuras/diploma/detalle/"
        },
        {
            title: "Curso de Storybook: Sistemas de Diseño con JavaScript",
            place: "Platzi",
            date: "oct. 2023",
            URL: "https://platzi.com/p/xvvas/curso/6175-storybook/diploma/detalle/"
        },
        {
            title: "Curso de Programación Orientada a Objetos: POO",
            place: "Platzi",
            date: "jul. 2023",
            URL: "https://platzi.com/p/xvvas/curso/1474-oop/diploma/detalle/"
        },
        {
            title: "Curso de Programación Orientada a Objetos: POO",
            place: "Platzi",
            date: "may. 2023",
            URL: "https://platzi.com/p/xvvas/curso/3221-pensamiento-logico/diploma/detalle/"
        },
        {
            title: "JavaScript Algorithms and Data Structures",
            place: "freeCodeCamp",
            date: "dic. 2022",
            URL: "https://www.freecodecamp.org/certification/XV_vas/javascript-algorithms-and-data-structures"
        },
        {
            title: "Responsive Web Design",
            place: "freeCodeCamp",
            date: "mar. 2022",
            URL: "https://www.freecodecamp.org/certification/XV_vas/responsive-web-design"
        },
    ]




    return (
        <ContainerSection className="BioAcademicContent">
            <div className="bioAcademicContent__head">
                <TypeH2>
                    Mi Recorrido Académico
                </TypeH2>
            </div>
            <div className="bioAcademicContent__content">
                {cardsInfo.map((card, key) => (
                    <ContainerCard key={key} className="bioAcademicContent__card">
                        <TypeSubTitle1 className="bioAcademicContent__title">
                            {card.title}
                        </TypeSubTitle1>
                        <div>
                            <TypeBody2 className="bioAcademicContent__place">
                                {card.place}
                            </TypeBody2>
                            <TypeBody2 className="bioAcademicContent__date">
                                {card.date}
                            </TypeBody2>
                        </div>

                        {card.URL &&
                            <BtnLink label={"Consultar"} to={card.URL} />
                        }
                    </ContainerCard>
                ))

                }
            </div>
        </ContainerSection>
    )
}