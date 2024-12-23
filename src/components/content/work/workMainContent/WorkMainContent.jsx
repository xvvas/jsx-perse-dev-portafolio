//css
import "./WorkMainContent.css"

//utils
import { TypeH1, TypeSubTitle1 } from "@cu/fonts/Type";
//import { BtnArrowDown } from "@cu/interface/btns/Btns";
import { ContainerMain } from "@cu/containers/Containers";

export default function WorkMainContent() {
    return (
        <ContainerMain className="WorkMainContent">
            <div className="workMainContent__content">
                <div className="workMainContent__tittle" data-aos="fade-right" data-aos-duration="2000">
                    <TypeH1 className="workMainContent__tittle">Trabajo hecho <br></br>  con amor</TypeH1>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                    <TypeSubTitle1 className="workMainContent__subTitle">Desarrollo productos que comunican grandes soluciones</TypeSubTitle1>
                </div>
            </div>
            {/* 
            <div className="workMainContent__initScroll">
                <BtnArrowDown label="Conóceme"/>
            </div>
            */}
        </ContainerMain>
    )
}