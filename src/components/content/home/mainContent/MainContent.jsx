//css
import { TypeButton, TypeH1, TypeH6 } from "@/components/util/fonts/Type";
import "./MainContent.css"


//util
import { ContainerMain } from "@cu/containers/Containers";
import IconNavArrowDown from "@cu/icons/Icons";


export default function MainContent() {
    return (
        <ContainerMain>
            <section className="MainContent">
                <TypeH6>¡Hola! Mi nombre es Miguel</TypeH6>
                <TypeH1>Desarrollador web <br/> en Medellín</TypeH1>
            </section>
            <div className="MainContent__initScroll">
                <TypeButton>Conóceme</TypeButton>
                <IconNavArrowDown/>
            </div>
        </ContainerMain>
    )
}