//css
import { TypeH1, TypeH6 } from "@/components/util/fonts/Type";
import "./MainContent.css"


//util
import { ContainerMain } from "@cu/containers/Containers";
import { BtnArrowDown } from "@cu/interface/btns/Btns";


export default function MainContent() {
    return (
        <ContainerMain className="MainContent">
            <div className="mainContent__content">
                <TypeH6>¡Hola! Mi nombre es Miguel</TypeH6>
                <TypeH1>Desarrollador web <br/> en<strong className="mainContent__strong"> Medellín</strong></TypeH1>
            </div>
            <div className="mainContent__initScroll">
                <BtnArrowDown label="Conóceme"/>
            </div>
        </ContainerMain>
    )
}